import React from 'react';
import "../styles/videoFeed.css"

const VideoFeed = () => {
    return (
        <div>
            <h1 class="loading">Loading Please wait...</h1>
            <img
                src="http://localhost:5000/video_feed"
                alt="Video Feed"
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default VideoFeed;