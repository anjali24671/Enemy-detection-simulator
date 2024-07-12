import React from "react";
import "./spanAnimation.css"
import { useEffect } from "react";
import gsap from "gsap";

const SpanAnimation = ({}) => {

    useEffect(()=>{
        const span1 = document.querySelector(".span-animation span:nth-child(2)");
        const span2 = document.querySelector(".span-animation span:nth-child(3)");
        const span3 = document.querySelector(".span-animation span:nth-child(4)");
        const span4 = document.querySelector(".span-animation span:nth-child(5)");
        const span5 = document.querySelector(".span-animation span:nth-child(6)");
        
        const tl = gsap.timeline();
        tl.fromTo(span1, {marginLeft:0}, {marginLeft:15, duration:0.1})
          .fromTo(span2, {marginLeft:0}, {marginLeft:15, duration:0.1})
          .fromTo(span3, {marginLeft:0}, {marginLeft:30, duration:0.1})
          .fromTo(span4, {marginLeft:0}, {marginLeft:15, duration:0.1})
          .fromTo(span5, {marginLeft:0}, {marginLeft:30, duration:0.1})
          tl.play()
    }, [])



    return (
        <>
            <div className="span-animation">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}


export default SpanAnimation;