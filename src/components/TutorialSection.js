import React from "react";
import DOMPurify from 'dompurify';
import "../styles/tutorialSection.css";

export function TutorialSection({custom_style={}, heading = "", content = "", imageURL = "", videoURL = "" }) {
    const sanitizedContent = DOMPurify.sanitize(content);

    return (
        <>
            <details style={custom_style} open={true} className="tutorial-section">
                <summary>{heading ? <h1 className="tutorial-heading">{heading}</h1> : null}</summary>
                {imageURL ? <img className="t-image" src={imageURL} alt="loading image" /> : null}
                {videoURL ? <video className="t-video" src={videoURL} autoPlay={true} loop ></video> : null}
                <div className="tutorial-para" dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
            </details>
        </>
    );
}
