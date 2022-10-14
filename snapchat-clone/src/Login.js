import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/appSlice';
import { auth, provider } from './firebase';
import './Login.css';

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(({ user }) => {
        dispatch(
            login({
                username: user.displayName,
                profilePic: user.photoURL,
                id: user.uid
            })
        );
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
        <div className="login_container">
            <img src="https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo=w480-h960-rw" alt="" />
            <Button variant='outlined' onClick={signIn}>Sign in</Button>
        </div>
    </div>
  )
}

export default Login