import React from "react";
import "./DescriptionBox.css"
import SpanAnimation from "./spanAnimation";

const DescriptionBox = ({title, data}) =>{
    return (
        <>
            <div className="descr-container">
                <div className="descrBox">
                    <h1 className="sub-heading">{title}</h1>
                    <SpanAnimation />
                    <div className="description">
                     {data}
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default DescriptionBox