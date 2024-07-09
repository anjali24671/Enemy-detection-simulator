import React from "react";

export function TutorialSection({heading, content, imageURL}) {
    return (
        <>
            {heading ? <h1>{heading}</h1> : null}
            {imageURL? <img src={imageURL} alt="loading image"/> : null}
            <p>{content}</p> 
        </>
    )
}