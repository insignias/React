import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    auth.signOut().then(
        dispatch(logout())
    )
  }

  return (
    <div className='header'>
        <div className="header_left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src="https://cdn.vox-cdn.com/thumbor/xo19HgFstSY4ctGJrdYtmcC0HMA=/0x0:1320x880/1200x800/filters:focal(555x335:765x545)/cdn.vox-cdn.com/uploads/chorus_image/image/68491189/newgmaillogo.0.jpg" alt="" />
        </div>
        <div className="header_middle">
            <SearchIcon />
            <input placeholder="Seach mail" type="text" />
            <ArrowDropDownIcon className='header_inputCaret' />
        </div>
        <div className="header_right">
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <Avatar onClick={logoutOfApp} src={user?.photoUrl}>{user?.email[0]}</Avatar>
        </div>
    </div>
  )
}

export default Header