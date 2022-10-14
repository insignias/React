/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Chats from './Chats';
import ChatView from './ChatView';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase';
import Login from './Login';
import Preview from './Preview';
import WebcamCapture from './WebcamCapture';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
       <Router>
          {
            !user ? (<Login />) : (
              <>
                <img className="app_logo" src="https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo=w480-h960-rw" alt="" />
                <div className="app_body">
                  <div className="app_bodyBackground">
                    <Routes>
                      <Route path="/preview" element={<Preview />} />
                      <Route path="/chats" element={<Chats />} />
                      <Route path="/chats/view" element={<ChatView />} />
                      <Route exact path="/" element={<WebcamCapture />} />
                    </Routes>
                  </div>
                </div>
              </>
            )
          }
    </Router>
      
    </div>
  );
}

export default App;
