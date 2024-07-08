import React from "react";
import "../styles/button1.css"


const Button1 = () => {
    return <>
        <div className="button-container">
            <button onClick={()=>  window.location.href = '/tutorial'}>
                Learn Radar
            </button>
            <button onClick={()=>  window.location.href = '/objectDetection'}>
                Detect Enemy
            </button>
            <button onClick={()=>  window.location.href = '/about'}>
                About
            </button>
        </div>
        
    </>
}

export default Button1