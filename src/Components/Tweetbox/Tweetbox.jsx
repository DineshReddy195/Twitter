import React from 'react'
import './Tweetbox.css'
import { Avatar, Button } from '@mui/material'
import { useState } from 'react'
import {db} from '../firebase';

function Tweetbox() {
  const [tweet,setTweet]=useState("");
  const [image,setImage]=useState("");
  const sendTweet=(e)=>{
    if(tweet==='' || tweet===null){
        alert('Type something in the input box to tweet')
    }else{
      e.preventDefault();
      db.collection('posts').add({
        displayName:'Dinesh Reddy',
        username:'dineshreddy',
        verified:true,
        image:image,
        text:tweet,
        avatar:'https://cdn.pixabay.com/photo/2020/11/22/22/17/male-5768177_640.png',
      })
    }
    setImage('')
    setTweet('')
  }
  return (
    <div className='tweet-box'>
        <form>
          <div className="tweet-input">
            <Avatar src='https://cdn.pixabay.com/photo/2020/11/22/22/17/male-5768177_640.png'/>
            <input value={tweet} type='text' placeholder="What's happening" onChange={(e)=>{setTweet(e.target.value)}}/>
          </div>
          <input type='text' className='tweet-image' placeholder='Optional: Enter Image URL' value={image} onChange={(e)=>{setImage(e.target.value)}}/>
          <Button className='tweet-button' onClick={sendTweet}>Tweet</Button>
        </form>
    </div>
  )
}

export default Tweetbox
