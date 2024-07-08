import React from 'react';
import '../styles/tutorialPage.css';
import search_mode from "../assets/videos/search_mode.mp4";
import track_mode from "../assets/videos/track_mode.mp4"
import rays from "../assets/videos/rays.mp4"
import detected from "../assets/videos/detected.mp4"

import SpanAnimation from "../components/spanAnimation";
import track_image from "../assets/images/v09funuctkv6xezvt46d.webp"
const TutorialPage = () => {
    return (
        <>
            <div className='t-page'>
                <div className='t-content'>
                 
                    
                    <div className="t-sub-content first-sub-content">
                        {/* RADAR INTRODUCTION */}
                        <div className="t-description-content">
                            <h2>How Radar Works</h2>
                            <SpanAnimation />
                            <p>Radars in fighter jets are crucial for detecting, tracking, and engaging targets. They operate in different modes to provide comprehensive situational awareness and target engagement capabilities.
                            </p>
                            <div className="t-video-content">
                                <div className='t-video-container-2'>
                                    <video className="t-video"  src={rays} autoPlay loop></video>
                                </div>
                            </div>
                        
                            <ul>
                                <li><span>Transmission:</span> The radar system transmits high-frequency radio waves (pulses) through an antenna.</li>
                                <li><span>Reflection:</span> These waves travel through the air and reflect off objects (like enemy aircraft or missiles).</li>
                                <li><span>Reception:</span> The radar's antenna receives the reflected waves (echoes) and the system calculates the distance, speed, and direction of the object based on the time delay and frequency shift of the returned signals.</li>
                            </ul>
                        </div> 

                        <div className="t-video-content">
                                <div className='t-video-container'>
                                    <video className="t-video" src={rays} autoPlay loop></video>
                                </div>
                        </div>
                        
                    </div>

                    {/* SEARCH MODE */}
                    <div className="t-sub-content">
                        <div className="t-description-content">
                            <h2>Search Mode</h2>
                            <SpanAnimation />
                            
                            <div className="t-video-content">
                                <div className='t-video-container-2'>
                                    <video className="t-video" src={rays} autoPlay loop></video>
                                </div>
                            </div>

                            <p>Search mode is designed to scan large volumes of airspace to detect potential targets.</p>
                            <ul>
                                <li><span>Volume Search:</span> The radar sweeps a wide area, often using a pattern like a sector scan, spiral, or raster to cover the entire search volume.</li>
                                <li><span>Pulse-Doppler Processing:</span> Differentiates moving targets from stationary ones based on the Doppler effect (frequency shift due to relative motion).</li>
                                <li><span>Scan Patterns:</span> These can include conical scanning (rotating cone pattern), sector scanning (fixed sector of space), and raster scanning (moving in a grid-like pattern).</li>
                            </ul>
                        </div>
                      
                        <div className="t-video-content">
                            <div className='t-video-container'>
                                <video className="t-video" src={search_mode} autoPlay loop></video>
                            </div>
                        </div>
                    </div>



                    <div className="t-sub-content">
                        {/* TRACK MODE */}
                        <div className="t-description-content">
                            <h2>Track Mode</h2>
                            <SpanAnimation />
                            
                            <div className="t-video-content">
                                <div className='t-video-container-2'>
                                    <video className="t-video" src={rays} autoPlay loop></video>
                                </div>
                            </div>

                            <p>Track mode is used to maintain continuous tracking of a specific target after it has been detected in search mode.</p>
                            <ul >
                                <li><span>Target Acquisition:</span> After a target is detected, the radar switches to track mode to follow the target more precisely.</li>
                                <li><span>Track-While-Scan (TWS):</span> A hybrid mode that continues to search while tracking multiple targets simultaneously.</li>
                                <li><span>Pulse Doppler:</span> These methods provide constant updates on the target’s range, speed, and vector.
                                </li>
                            </ul>
                        </div>
                        
                        <div className="t-video-content">
                            <div className='t-video-container'>
                                <video className="t-video"  src={detected} autoPlay loop></video>
                            </div>
                        </div>
                       
                    </div>
                    

                    <div className="t-sub-content">
                        {/* HUD IN TRACK MODE */}
                        <div className="t-description-content">
                            <h2>Head-Up Display in track mode</h2>
                            <SpanAnimation />
                            

                            <div className="t-video-content">
                                <div style={{height:"400px"}} className='t-video-container-2'>
                                    <video className="t-video" src={rays} autoPlay loop></video>
                                </div>
                            </div>   
                            <ul>
                                <li><span>Target Symbol:</span> Displays a moving symbol (like a box or crosshair) on the HUD, locked onto the target, tracking its movements in real-time.</li>
                                <li><span>Target Data:</span> Shows critical information around the target symbol, including range, speed, and heading.</li>
                                <li><span>Weapon Guidance:</span> Provides lead indicators and lock confirmation for aiming and engaging the target accurately.</li>
                                <li><span>Dynamic Adjustments:</span> Continuously updates to reflect the target’s position and movements, aiding precise tracking and engagement.</li>
                            </ul>
                        </div>
                        
                        <div  className="t-video-content">
                            <div  style={{height:"700px", transform:"scale(0.6)"}}  className='t-video-container'>
                                <video className="t-video" style={{transform:"scale(0.4) translateX(-800px) translateY(-1500px)"}}  src={track_mode} autoPlay loop></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TutorialPage;
