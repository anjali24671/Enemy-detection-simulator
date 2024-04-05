import React from "react";

const BackgroundVideo = ({source}) => {
    return (
        <>
            <video autoPlay loop muted src={source}></video>
        </>
    )
}

export default BackgroundVideo;