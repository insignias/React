import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetCameraImage, selectCameraImage } from './features/cameraSlice';
import './Preview.css';
import CloseIcon from '@mui/icons-material/Close';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CropIcon from '@mui/icons-material/Crop';
import TimerIcon from '@mui/icons-material/Timer';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuid } from 'uuid';
import { db, storage } from './firebase';
import firebase from 'firebase/compat/app'; 
import { selectUser } from './features/appSlice';

function Preview() {
  const cameraImage = useSelector(selectCameraImage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  useEffect(() => {
    if(!cameraImage) {
        navigate('/')
    }
  }, [cameraImage, navigate])

  const closePreview = () => {
    dispatch(resetCameraImage());
    navigate('/');
  } 

  const sendPost = () => {
    const id = uuid();
    const uploadTask = storage.ref(`posts/${id}`).putString(cameraImage, 'data_url');

    uploadTask.on(
        'state_changed', 
        null, 
        (error) => {
            console.log(error)
        },
        () => {
            storage
            .ref('posts')
            .child(id)
            .getDownloadURL()
            .then((url) => {
                db.collection('posts').add({
                    imageUrl: url,
                    username: user.username,
                    read: false,
                    profilePic: user.profilePic,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                navigate('/chats')
            })
        }
        )
  }

  return (
    <div className='preview'>
        <CloseIcon onClick={closePreview} className='preview_close' />
        <div className="preview_toolbarRight">
            <TextFieldsIcon />
            <CreateIcon />
            <NoteIcon />
            <MusicNoteIcon />
            <AttachFileIcon />
            <CropIcon />
            <TimerIcon />
        </div>
        <img src={cameraImage} alt="" />
        <div onClick={sendPost} className="preview_footer">
            <h2>Send Now</h2>
            <SendIcon  fontSize='small' className='preview_sendIcon'/>
        </div>
    </div>
  )
}

export default Preview