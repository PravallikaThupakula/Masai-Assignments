import React, { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleForward = () => {
    videoRef.current.currentTime += 5;
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 5;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Custom Video Player (useRef)</h2>

      <video
        ref={videoRef}
        width="600"
        controls={false}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      <div style={{ marginTop: "15px" }}>
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause}>⏸ Pause</button>
        <button onClick={handleRewind}>⏪ Rewind</button>
        <button onClick={handleForward}>⏩ Forward</button>
      </div>
    </div>
  );
}

export default VideoPlayer;
