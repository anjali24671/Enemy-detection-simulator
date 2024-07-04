import numpy as np
import cv2
from PIL import Image

def get_limits(color):
    c = np.uint8([[color]])  # BGR values
    hsvC = cv2.cvtColor(c, cv2.COLOR_BGR2HSV)

    hue = hsvC[0][0][0]  # Get the hue value

    # Handle red hue wrap-around
    if hue >= 165:  # Upper limit for divided red hue
        lowerLimit = np.array([hue -7, 150, 150])
        upperLimit = np.array([180, 255, 255])
    elif hue <= 15:  # Lower limit for divided red hue
        lowerLimit = np.array([0, 150, 150])
        upperLimit = np.array([hue + 7, 255, 255])
    else:
        lowerLimit = np.array([hue - 7, 150, 150])
        upperLimit = np.array([hue + 7, 255, 255])

    return lowerLimit, upperLimit

yellow = [0, 255, 255]  # yellow in BGR colorspace
cap = cv2.VideoCapture(0)

# Get the screen resolution
screen_width = 1920  # Change this value according to your screen resolution
screen_height = 1080  # Change this value according to your screen resolution
w = 340
h = 250
# Create a full-screen window
cv2.namedWindow('Frame', cv2.WINDOW_NORMAL)
cv2.setWindowProperty('Frame', cv2.WND_PROP_FULLSCREEN, cv2.WINDOW_FULLSCREEN)

while True:
    ret, frame = cap.read()

    hsvImage = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    lowerLimit, upperLimit = get_limits(color=yellow)

    mask = cv2.inRange(hsvImage, lowerLimit, upperLimit)

    mask_ = Image.fromarray(mask)

    bbox = mask_.getbbox()
    frame = cv2.circle(frame, [w,h], 1, (0,255,0), 1)
    

    if bbox is not None:
        x1, y1, x2, y2 = bbox

        frame = cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 5)
        midpoint = [(x1 + x2) // 2, (y1 + y2) // 2]
        frame = cv2.circle(frame, midpoint, 1, (0,255,0), 10)
        distance = np.sqrt((midpoint[0]-w)**2 + (midpoint[1]-h)**2)
        print(f"the distance is: {distance}")
        

    cv2.imshow('Frame', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
