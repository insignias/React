import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import InputOption from './InputOption';
import './Post.css';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';

const Post = forwardRef(({ name, message, description, photoUrl }, ref) => {
  
  return (
    <div ref={ref} className='post'>
        <div className="post_header">
            <Avatar src={photoUrl}/>
            <div className="post_info">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>

        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_buttons">
            <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
            <InputOption Icon={ChatOutlined} title="Chat" color="gray" />
            <InputOption Icon={ShareOutlined} title="Share" color="gray" />
            <InputOption Icon={SendOutlined} title="Send" color="gray" />
        </div>

    </div>
  )
})

export default Post