import React, {useState} from "react";
import FaceDetectionRegister from './FaceDetectionRegister';
const FaceDetectionRegister = () => {
  return (
    <div>
      <img src="http://localhost:5001/video_feed" alt="Video Frame" />
    </div>
  );
};

export default FaceDetectionRegister;