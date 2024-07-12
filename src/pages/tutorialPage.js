import React from 'react';
import '../styles/tutorialPage.css';
import search_mode from "../assets/videos/search_mode.mp4";
import track_mode from "../assets/videos/track_mode.mp4"
import rays from "../assets/videos/rays.mp4"
import detected from "../assets/videos/detected.mp4"
import Button1 from '../components/button1';
import search from "../assets/images/search.webp"
import track from "../assets/images/track.webp"
import { Element } from 'react-scroll';
import Sidebar from '../components/Sidebar';
import { TutorialSection } from '../components/TutorialSection';

import SpanAnimation from "../components/spanAnimation";
const TutorialPage = () => {

    let data = [
        "When a fighter jet moves through the sky in a hostile environment, the pilot needs to know of any possible threats that may be in their zone of operation. To gain the element of surprise, a pilot must be able to spot the other aircraft before they see him. To see the other aircraft Beyond Visual Range (BVR), the pilot’s aircraft needs a radar with such capability. Flying at 25,000 feet, a fighter pilot needs to be able to identify threats that are moving below him. The RADAR needs to not only detect a possible target but also track that target. There is a lot going on when you look down below the horizon–trees, hills, buildings, ocean waves, animals, and even rainy weather. How does the radar distinguish between an aircraft and all the other ‘stuff’ going on below? Today, we will take a high-level look at what radar is and how a radar system sees through all the things that can distract it from seeing other aircraft."
        ,"RADAR stands for Radio Detection And Ranging. A radar system detects other aircraft, ships, or other objects and the speed and direction in which they travel by sending out a pulse of high-frequency electromagnetic waves. This pulse goes out ahead of the aircraft until it encounters an object and reflects off of it. The signal then returns to the radar’s antenna for processing. if you stood on a cliff and yell toward another cliff, the sound would return to you after bouncing off the wall. If you pick the right location and yell in the direction of multiple cliffs situated at different distances away from you then your voice could return from multiple points, causing an echo. The farther away you get, the longer it takes for that yell to bounce off and return. Radio waves are like these sound waves. When an aircraft’s radar is scanning for threats over land or sea, it has to deal with clutter. Clutter can be anything from trees, ground, ocean waves, anything that can produce an unwanted echo return to the radar. Clutter can also be weather/rain, animals, chaff, and atmospheric turbulences. This clutter sending back signals makes it difficult to find the target you really want to detect. To understand how clutter is separated from a target, we first learn about the Doppler Effect."
        , "As noted by ThePhysicsClassroom.com, “The Doppler effect is observed whenever the source of waves is moving with respect to an observer.” Sheldon Cooper of The Big Bang Theory gives us a more technical description: The Doppler Effect (or Doppler Shift) is the change in frequency or wavelength of a wave (or other periodic events) for an observer moving relative to its source."
        , "To continue with simple explanations, we use an example of a police car. Let’s say you are standing on a corner and you hear a police car blaring its siren driving in your direction. As the siren gets closer to you, it’s pitch will sound higher than it would if the car sat stationary. As the police car approaches, passes, and then moves away from your location, the pitch will go from higher to lower."
        , "For a visual example, observe a water bug on a puddle. As the bug moves its legs in a stationary spot, the waves created from that movement will move away from the bug in equal distance. If the bug chooses a direction to move then those waves in front of the bug will move away from it but will be closer together than the waves moving away behind the bug. The same is true for radio waves. When any object moves, it creates frequency waves. The faster it moves the higher the frequency waves are in front of it and the lower the frequency waves are behind it. This change in frequency is what is referred to as Doppler Shift. The faster or slower it moves in relation to the radar detector also affects the frequency.",
        "When an aircraft’s radar system sends out a pulse, it can detect an object out in front once the signal returns. It can send another pulse and tell if it’s closer or farther by how long it takes the pulse to return based on the aircraft’s own location. It’s an effective way to determine an object’s location, but much slower than taking advantage of the doppler effect."
        ,"When the radio beam is reflected by a target aircraft, an indication appears on one of the pilot’s radar display. In search mode, no single aircraft is being tracked, but the pilot can usually tell generally what a particular radar return is doing because with each successive sweep, the radar return moves slightly <br> This is an example of the fire control radar display for an F-16 Fighting Falcon when the radar is in a search mode: <br> Each white brick is a radar return. Because the radar is only scanning, not tracking, no other information is available about the radar targets. (There is one exception: The Doppler shift of the radar return can be measured, to estimate how fast the aircraft traveling towards or away from you, much like the pitch of an inbound train’s whistle can tell you how fast it’s coming at you. This is displayed as the small white trend line originating from each brick.) Note that the cursors are over the bottom-most brick (closest to our aircraft). The pilot is ready to lock up this target. This will put the radar into a track mode"
        , `In track mode, the radar focuses its energy on a particular target. Because the radar is actually tracking a target, and not just displaying bricks when it gets a reflection back, it can tell the pilot a lot more about the target. This is what the F-16’s fire control radar display looks like when a target is locked: Along the top we have a lot of information about what our radar target is doing. <br><br> Its aspect angle (angle between its nose position and our nose position) is 160° to the left <br> its heading is 190°<br> its airspeed is 450 knots <br> and our closure rate is 828 knots.<br></br> with this information, the pilot gets a much better idea of what the aircraft is doing, but at the expense of information about other aircraft in the area. Note that in the above picture, the bottom-most (closest) target is locked (circle around it), the two targets further away are tracked (yellow squares), and there are two radar returns even further away (white bricks). This is demonstrating an advanced feature of modern radars, situational awareness modes. A radar in SAM combines both tracking and scanning to allow a pilot to track one or a small number of “interesting” targets while not losing the big picture of what other targets are doing. In this mode, the radar beam sweeps the sky, while briefly and regularly pausing its scan to check up on a locked target. Note that all of this comes with tradeoffs. In the end, a radar is only as powerful as it is, and you can put a lot of radar energy on one target, or spread it out weakly throughout the sky, or some compromise in between. In the above photo you can see two vertical bars spanning the height of the display — these are the azimuth scan limits. It’s the aircraft’s way of telling you, “OK, I can both track this target, and scan for other targets, but in return, I’m only going to scan a 40° wide cone in front of the aircraft, instead of the usual 60°. Radar, like life, is full of tradeoffs. An important thing to note is that a radar lock is not always mandatory to release weapons at a target. For guns kills, if the aircraft has a radar lock on a target, it can accurately gauge range to the target, and provide the pilot with the appropriate corrections for lead and gravity drop, to get an accurate guns kill. Without the radar, the pilot simply has to rely on his or her own judgement.`

    ]

    return (
        <>
     
            <div style={{ display: 'flex' }}>

            <Sidebar />
                <div className="tutorial-container" >
                    <h1 style={{marginLeft:"30px", fontWeight:"bold", fontSize:"40px"}}>Radar Tutorial</h1>
                
                <TutorialSection content={data[0]} />
                    
                <Element name="What is Radar">
                    <TutorialSection heading="What is Radar?" content={data[1]}/>
                </Element>
                
                <Element name="Doppler Effect">
                    <TutorialSection heading="Doppler Effect" content={data[2]}/>
                </Element>
                
                <Element name="Police Siren">
                    <TutorialSection heading="Police Siren" content={data[3]}/>
                </Element>
                
                <Element name="Water Bug">
                    <TutorialSection heading="Water Bug?" content={data[4]}/>
                </Element>
                
                <Element  name="Multiple Pulses to Determine Location">
                    <TutorialSection custom_style={{height:"740px", overflow:"hidden"}} heading="Multiple Pulses to Determine Location" videoURL={search_mode} content={data[0]}/>
                </Element>

                <Element name="Search Mode">
                    <TutorialSection  heading="Search Mode" imageURL={search} content={data[6]}/>
                </Element>
                    
                <Element name="Track Mode">
                        <TutorialSection heading="Track Mode" imageURL={track} content={data[7]} />
                 
                    </Element>
                    <div style={{ display: "flex", alignItems: "start", justifyContent: "center" }}>
                        <video className="t-last-video" autoPlay={true} loop src={track_mode} />
                        <div style={{marginTop:"30px", display:"flex", flexDirection:"column"}}>
                            <Button1 buttonTitle={"Visualize"} location={'/objectDetection'} />
                            <Button1 buttonTitle={"About"} location={"/about"} />
                        </div>

                    </div>
                    
            </div>
            </div>
           
        </>
    );
}

export default TutorialPage;
