/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useRef } from 'react';
import './WebcamCapture.css';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useNavigate } from 'react-router-dom';

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user"
}

function WebcamCapture() {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    navigate('/preview')
  }, [webcamRef])

  return (
    <div className='webcamCapture'>
      <Webcam 
        audio = {false}
        height = {videoConstraints.height}
        width = {videoConstraints.width}
        ref = {webcamRef}
        screenshotFormat = "image/jpeg"
        videoConstraints = {videoConstraints}
      />

      <RadioButtonUncheckedIcon 
        className='webcamCapture_button'
        onClick={capture}
        fontSize="large"
      />

      <img src="" alt=''></img>
    </div>

    
  )
}

export default WebcamCapture