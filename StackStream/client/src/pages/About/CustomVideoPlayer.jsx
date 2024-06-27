import React, { useRef, useState } from "react";



import ReactPlayer from "react-player";
import video from "../../assets/About.mp4";

const CustomVideoPlayer = () => {
  const videoRef = useRef(null);

  const [doubleScreenCount, setDoubleScreenCount] = useState(0);

  const handleScreenHold = (progress) => {
    if (doubleScreenCount === 2) {
      const currentTime = videoRef.current.getCurrentTime();
      const changement = currentTime + progress;
      videoRef.current.seekTo(changement);



      
    }
  };

  const handleTouchStart = (ev) => {



    
   
    let screenx = ev.changedTouches[0]["screenX"];

    let MidWidth = videoRef.current.getInternalPlayer().videoWidth / 2; 

   
  };

  return (
    <div>

      
      <ReactPlayer url={video} controls width={"90%"} height={"90%"} />
     <h1> You can see all about this project here...</h1>
    </div>
  );
};

export default CustomVideoPlayer;