import React from 'react';

const VideoFeed = () => {
    return (
        <div>
            <h1>Live Video Feed</h1>
            <img
                src="http://localhost:5000/video_feed"
                alt="Video Feed"
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default VideoFeed;