import React,{forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from '@mui/icons-material/Publish';
import { useState } from 'react';

const Post= forwardRef(({displayName,username,verified,text,image,avatar},ref={ref}) => {
  const [like,setLike]=useState(false);
  const handleLikes=()=>{
    setLike((prevVal)=>!prevVal)
  }
  return (
    <div className='post'>
      <div className='avatar'>
        <Avatar src={avatar}/>
      </div>
      <div className='post-body'>
        <div className='post-header'>
            <div className='header-text'>
                <h3>{displayName}
                <span className='post-verified'>
                   {verified &&  <VerifiedIcon className='verified-icon'/>}
                    @{username}
                </span>
                </h3>
            </div>
            <div className="header-description">
              <p>{text}</p>
            </div>
            <img src= {image} alt='username' height={150} className='image'/>
            <div className='footer'>
              <ChatBubbleOutlineIcon fontSize='small' className='comments'/>
              <RepeatIcon fontSize='small' className='repeat'/>
              <FavoriteIcon fontSize='small' className='likes' onClick={handleLikes} style={{color:like?'red':'black'}}/>
              <PublishIcon fontSize='small' className='share'/>
            </div>
        </div>
      </div>
    </div>
  )
})

export default Post
