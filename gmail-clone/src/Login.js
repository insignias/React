import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
  const dispatch = useDispatch();

  const signin = () => {
    auth.signInWithPopup(provider)
    .then(({ user }) => {
        dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
        }))
    })
    .catch((error) => alert(error))
  }
  return (
    <div className='login'>
        <div className="login_container">
            <img src="https://cdn.vox-cdn.com/thumbor/xo19HgFstSY4ctGJrdYtmcC0HMA=/0x0:1320x880/1200x800/filters:focal(555x335:765x545)/cdn.vox-cdn.com/uploads/chorus_image/image/68491189/newgmaillogo.0.jpg" alt="" />
            <Button variant="contained" color="primary" onClick={signin}>Login</Button>
        </div>
    </div>
  )
}

export default Login