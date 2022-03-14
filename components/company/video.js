import React from 'react';

function video(props) {
    return (
        <div>
           <video src="/videos/aboutvideo.mp4" muted loop controls={false} autoPlay={true} />
        </div>
    );
}

export default video;