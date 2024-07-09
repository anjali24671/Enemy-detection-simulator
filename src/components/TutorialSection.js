import React from "react";
import "../styles/tutorialSection.css"

export function TutorialSection({heading="", content, imageURL=""}) {
    return (
        <>
            <details open={true}   className="tutorial-section">
                <summary>{heading ? <h1 className="tutorial-heading">{heading}</h1> : null}</summary>
                {imageURL? <img src={imageURL} alt="loading image"/> : null}
                <p className="tutorial-para">{content}</p> 
            </details>
        </>
    )
}