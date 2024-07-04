import React from "react";
import "../styles/button1.css"
import { useNavigate } from 'react-router-dom';

const Button1 = () => {

    const naviagate = useNavigate()

    return <>
        <div className="button-container">
            <button onClick={()=>  window.location.href = '/objectDetection'}>
                Let's get started
            </button>
            <button onClick={()=>  window.location.href = '/about'}>
                About
            </button>
        </div>
        
    </>
}

export default Button1