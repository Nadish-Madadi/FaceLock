import React, {useState} from "react";
import FaceDetection from './FaceDetection';
const FaceDetection = () => {
  return (
    <div>
      <img src="http://localhost:5000/video_feed" alt="Video Frame" />
    </div>
  );
};

export default FaceDetection;