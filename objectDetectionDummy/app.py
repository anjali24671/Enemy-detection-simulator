from flask import Flask, Response
from flask_cors import CORS
import numpy as np
from PIL import Image
import math
import cv2
import time
from collections import deque

app = Flask(__name__)
CORS(app)

def get_limits(color):
    '''Returns the upper and lower limits for a given color in HSV'''
    c = np.uint8([[color]])  # BGR values
    hsvC = cv2.cvtColor(c, cv2.COLOR_BGR2HSV)
    hue = hsvC[0][0][0]  # Get the hue value

    if hue >= 165:  # Upper limit for divided yellow hue
        lowerLimit = np.array([hue - 7, 150, 150])
        upperLimit = np.array([180, 255, 255])
    elif hue <= 15:  # Lower limit for divided yellow hue
        lowerLimit = np.array([0, 150, 150])
        upperLimit = np.array([hue + 7, 255, 255])
    else:
        lowerLimit = np.array([hue - 7, 150, 150])
        upperLimit = np.array([hue + 7, 255, 255])

    return lowerLimit, upperLimit

def generate_frames():
    yellow = [0, 255, 255]  # Enemy characteristic
    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        print("Error: Could not open camera.")
        return

    radar_radius = 240  # Radar scope radius
    radar_center = (320, 240)
    sweep_angle = 0
    sweep_speed = 0.05  # Speed of radar sweep

    prevPosition = None
    prev_time = time.time()
    speed_history = deque(maxlen=10)  # Store last 10 speeds

    while True:
        ret, frame = cap.read()
        if not ret:
            print("Error: Could not read frame.")
            break

        frame = cv2.resize(frame, (640, 480))  # Resize frame to fit radar
        hsvImage = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
        lowerLimit, upperLimit = get_limits(color=yellow)

        mask = cv2.inRange(hsvImage, lowerLimit, upperLimit)
        mask_ = Image.fromarray(mask)
        bbox = mask_.getbbox()

        radar_display = np.zeros((480, 640, 3), dtype=np.uint8)

        # Draw radar scope
        cv2.circle(radar_display, radar_center, radar_radius, (0, 255, 0), 2)
        for i in range(1, 4):
            cv2.circle(radar_display, radar_center, radar_radius // 4 * i, (0, 255, 0), 1)
        cv2.line(radar_display, (radar_center[0] - radar_radius, radar_center[1]), 
                 (radar_center[0] + radar_radius, radar_center[1]), (0, 255, 0), 1)
        cv2.line(radar_display, (radar_center[0], radar_center[1] - radar_radius), 
                 (radar_center[0], radar_center[1] + radar_radius), (0, 255, 0), 1)

        # Draw radar sweep
        sweep_x = int(radar_center[0] + radar_radius * math.cos(sweep_angle))
        sweep_y = int(radar_center[1] + radar_radius * math.sin(sweep_angle))
        cv2.line(radar_display, radar_center, (sweep_x, sweep_y), (0, 255, 0), 2)

        # Increment sweep angle
        sweep_angle += sweep_speed
        if sweep_angle >= 2 * np.pi:
            sweep_angle -= 2 * np.pi

        if bbox is not None:
            x1, y1, x2, y2 = bbox

            midpoint = [(x1 + x2) // 2, (y1 + y2) // 2]

            curr_time = time.time()
            if prevPosition is not None:
                # calculate speed
                dist = np.sqrt((midpoint[0] - prevPosition[0]) ** 2 + (midpoint[1] - prevPosition[1]) ** 2)
                time_diff = curr_time - prev_time
                if time_diff > 0:
                    speed = dist / time_diff
                    speed_history.append(speed)

            prevPosition = midpoint
            prev_time = curr_time

            # Map detected point to radar display
            dx = midpoint[0] - radar_center[0]
            dy = radar_center[1] - midpoint[1]
            # calculate distance
            distance = np.sqrt(dx**2 + dy**2)
            # calculate angle
            angle = math.atan2(dy, dx)
            if angle < 0:
                angle += 2 * np.pi

            # paint the enemy red
            if distance <= radar_radius:
                blip_x = int(radar_center[0] + (distance / radar_radius) * radar_radius * math.cos(angle))
                blip_y = int(radar_center[1] - (distance / radar_radius) * radar_radius * math.sin(angle))
                cv2.circle(radar_display, (blip_x, blip_y), 5, (0, 0, 255), -1)
                avg_speed = np.mean(speed_history) if speed_history else 0
                angleDeg = math.degrees(angle)
                cv2.putText(radar_display, f"Speed: {avg_speed:.2f} px/s", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)
                cv2.putText(radar_display, f"Angle: {angleDeg:.2f} deg", (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)
                cv2.putText(radar_display, f"Distance: {distance:.2f} px", (10, 90), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)

        ret, buffer = cv2.imencode('.jpg', radar_display)
        if not ret:
            print("Error: Frame encoding failed.")
            break

        frame = buffer.tobytes()

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    cap.release()
    cv2.destroyAllWindows()

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
