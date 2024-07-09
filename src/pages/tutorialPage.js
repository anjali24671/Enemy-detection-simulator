import React from 'react';
import '../styles/tutorialPage.css';
import search_mode from "../assets/videos/search_mode.mp4";
import track_mode from "../assets/videos/track_mode.mp4"
import rays from "../assets/videos/rays.mp4"
import detected from "../assets/videos/detected.mp4"

import { Element } from 'react-scroll';
import Sidebar from '../components/Sidebar';
import { TutorialSection } from '../components/TutorialSection';

import SpanAnimation from "../components/spanAnimation";
import track_image from "../assets/images/v09funuctkv6xezvt46d.webp"
const TutorialPage = () => {

    let data = [
        "When a fighter jet moves through the sky in a hostile environment, the pilot needs to know of any possible threats that may be in their zone of operation. To gain the element of surprise, a pilot must be able to spot the other aircraft before they see him. To see the other aircraft Beyond Visual Range (BVR), the pilot’s aircraft needs a radar with such capability. Flying at 25,000 feet, a fighter pilot needs to be able to identify threats that are moving below him. The RADAR needs to not only detect a possible target but also track that target. There is a lot going on when you look down below the horizon–trees, hills, buildings, ocean waves, animals, and even rainy weather. How does the radar distinguish between an aircraft and all the other ‘stuff’ going on below? Today, we will take a high-level look at what radar is and how a radar system sees through all the things that can distract it from seeing other aircraft."
        ,"RADAR stands for Radio Detection And Ranging. A radar system detects other aircraft, ships, or other objects and the speed and direction in which they travel by sending out a pulse of high-frequency electromagnetic waves. This pulse goes out ahead of the aircraft until it encounters an object and reflects off of it. The signal then returns to the radar’s antenna for processing. if you stood on a cliff and yell toward another cliff, the sound would return to you after bouncing off the wall. If you pick the right location and yell in the direction of multiple cliffs situated at different distances away from you then your voice could return from multiple points, causing an echo. The farther away you get, the longer it takes for that yell to bounce off and return. Radio waves are like these sound waves. When an aircraft’s radar is scanning for threats over land or sea, it has to deal with clutter. Clutter can be anything from trees, ground, ocean waves, anything that can produce an unwanted echo return to the radar. Clutter can also be weather/rain, animals, chaff, and atmospheric turbulences. This clutter sending back signals makes it difficult to find the target you really want to detect. To understand how clutter is separated from a target, we first learn about the Doppler Effect."
        , "As noted by ThePhysicsClassroom.com, “The Doppler effect is observed whenever the source of waves is moving with respect to an observer.” Sheldon Cooper of The Big Bang Theory gives us a more technical description: The Doppler Effect (or Doppler Shift) is the change in frequency or wavelength of a wave (or other periodic events) for an observer moving relative to its source."
        , "To continue with simple explanations, we use an example of a police car. Let’s say you are standing on a corner and you hear a police car blaring its siren driving in your direction. As the siren gets closer to you, it’s pitch will sound higher than it would if the car sat stationary. As the police car approaches, passes, and then moves away from your location, the pitch will go from higher to lower."
        , "For a visual example, observe a water bug on a puddle. As the bug moves its legs in a stationary spot, the waves created from that movement will move away from the bug in equal distance. If the bug chooses a direction to move then those waves in front of the bug will move away from it but will be closer together than the waves moving away behind the bug. The same is true for radio waves. When any object moves, it creates frequency waves. The faster it moves the higher the frequency waves are in front of it and the lower the frequency waves are behind it. This change in frequency is what is referred to as Doppler Shift. The faster or slower it moves in relation to the radar detector also affects the frequency.",
        "When an aircraft’s radar system sends out a pulse, it can detect an object out in front once the signal returns. It can send another pulse and tell if it’s closer or farther by how long it takes the pulse to return based on the aircraft’s own location. It’s an effective way to determine an object’s location, but much slower than taking advantage of the doppler effect.",
    ]

    return (
        <>
            
            <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '200px', padding: '20px' }}>
                <Element name="section1">
                        <TutorialSection content={data[0]} />
                </Element>
                
                <Element name="section2">
                        <TutorialSection heading="What is Radar?" content={data[0]}/>
                </Element>
                    
                <Element name="section3">
                      <TutorialPage heading="Doppler Effect"/>
                    </Element>
                    
                    <Element name="Police Siren">
                        <TutorialSection />
                </Element>
                    
            </div>
            </div>
            {/* <div className='t-page'>
                <div className='t-content'>
                 
                    
                    <div className="t-sub-content first-sub-content">
                     
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
            </div> */}
        </>
    );
}

export default TutorialPage;
