import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';

function Sidebar() {

  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://media-exp1.licdn.com/dms/image/C5616AQE-JOhFbExBbQ/profile-displaybackgroundimage-shrink_350_1400/0/1640282124806?e=1667433600&v=beta&t=3hRL0Xc6tR5czck_Uo9Y0ylEtD17sxEGz6icBiIIFmM" alt="" />
            <Avatar className="sidebar_avatar" src={user.photoUrl}>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who's viewed your profile</p>
                <p className="sidebar_statNumber">2533</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on your post</p>
                <p className="sidebar_statNumber">200</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('Reactjs')}
            {recentItem('Typescript')}
            {recentItem('Programming')}
            {recentItem('Devops')}
            {recentItem('SRE')}
        </div>
    </div>
  )
}

export default Sidebar