import React, { useReducer } from "react";
import DescriptionBox from "../components/descriptionBox.js";
import VideoFeed from "../components/VideoFeed.js";
import Button1 from "../components/button1.js"
import "../styles/button1.css"
import '../styles/homePage.css'
import homePageImage1 from "../assets/images/f34.png"
import homePageImage2 from "../assets/images/f19.png";
import homePageiVideo from "../assets/videos/planeVideo1.mp4";
import { gsap } from 'gsap'
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { useEffect } from "react";
import { getActiveElement } from "@testing-library/user-event/dist/utils";




// gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {

    useEffect(() => {
        
        const html = document.documentElement;
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');

        const currentFrame = (index) => {
            return require(`../assets/images/scrollImages/frames${index.toString().padStart(4, '0')}.png`);
            
            
          };
    
        const frameCount = 73
    
        
        const preloadImages = () => {
            for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            }
        };
    
      
        const img = new Image();
        img.src = currentFrame(1)
      
        // When the image is loaded, draw it on the canvas
        img.onload = () => {
          // Calculate the aspect ratio of the image
          const aspectRatio = img.width / img.height;
      
          // Set the canvas dimensions to match the aspect ratio of the image
          canvas.width = img.width;
          canvas.height = img.height;
      
          // Calculate the scaled width and height to fit the canvas
          const scaledWidth = canvas.width;
          const scaledHeight = canvas.width / aspectRatio;
      
          // Clear the canvas and draw the img with the new dimensions
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0,0, canvas.width, canvas.height);
        };

        const updateImage = index => {
            img.src = currentFrame(index);
            context.drawImage(img, 0, 0);
          }

          window.addEventListener('scroll', () => {
            const scrollTop = html.scrollTop;
            const maxScrollTop = html.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(scrollFraction * frameCount)
            )
    
            requestAnimationFrame(() => updateImage(frameIndex + 1))
        })
      
        preloadImages()
          
      }, []);

    return (
        <>
           
            <div className="adjustPicture">
            <img src={homePageImage1}></img>
                <div className="textContainer">
                    <h1 className="title">The Sky Guardians</h1>   
                    <h3>An interactive RADAR tutorial</h3>
                </div>  
            </div>


            <div className="adjustScroll">
                {/* <img src={homePageImage2}></img> */}
                <canvas className="scroll-canvas">
                </canvas>
                <DescriptionBox title="Radar visualization tool" data='The tool simulates the tracking of aircraft using RGB sensors, allowing users to monitor their position accurately.'/>
                <DescriptionBox title="Directional Awareness" data='With the use of RGB sensors, users can determine the direction from which the aircraft is approaching, enhancing situational awareness.'/>
                <DescriptionBox title="Speed Detection" data='The tool accurately measures the speed of enemy aircraft, enabling users to visualize their movements and take appropriate actions.'/>
            </div>

         
            <div className="adjustPicture">  
                <video autoPlay loop muted src={homePageiVideo}></video>
                <div className="button-container">
                    <Button1 buttonTitle={"Learn RADAR"} location={'/tutorial'}/>
                    <Button1 buttonTitle={"Visualize RADAR"} location={'/objectDetection'}/>
                    <Button1 buttonTitle={"About"} location={"/about"} />
                </div>
            </div>
        </>
        
        
    )
}

export default HomePage