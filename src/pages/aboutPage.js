import React from "react";
import coolPlane from "../assets/videos/cool plane.mp4"
// import coolPlane from "./assets/videos/coolPlane"
import "../styles/aboutPage.css"
import enemyPlane from "../assets/videos/enemy detection sam.mp4"
import SpanAnimation from "../components/spanAnimation";


const AboutPage = () => {
    return (
        <>
        <div className="video-container">
            
            <video className="cool-plane-video" autoPlay loop src={coolPlane}></video>
            <div className="about-descr">
                <h1 className="aboutTitle">About</h1>
                <SpanAnimation />
                

                <h2>The radar visualization tool provides following information about detected aircraft</h2>
                <br></br>
                
                <h1>- Aspect angle</h1>
                <h1>- Direction</h1>
                <h1>- Airspeed</h1>
                <h1>- Closure Rate</h1>

            </div>
        </div>
        <div className="about-second-page">
            <div className="second-text-container">
                <h2 className="aboutTitle">Working </h2>
                <SpanAnimation />
                <p>
                     The system works in two modes:<br></br>
                        <br></br>
                        
                            - Search mode<br></br>
                            - Track mode<br></br>
                        
                     <br></br>
                     <span>In Search mode,</span> The system will run an object detection algo to locate the enemy. At this point the location of the potential threats will be showed to the pilot.<br></br>
                      Note: there may be multiple threats <br></br><br></br>
                     <span>In the Track mode:</span> The system provides more information about one of the “interesting” target, which produces most suspicion
                </p>
            </div>
            <div className="enemy-video-container">
                <video className="video-enemy" autoPlay loop src={enemyPlane}></video>
            </div>
            
        </div>
        </>
    )
}

export default AboutPage