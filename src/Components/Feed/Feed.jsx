import React, { useEffect, useState } from 'react'
import './Feed.css'
import Tweetbox from '../Tweetbox/Tweetbox'
import { db } from '../firebase';
import Post from '../Post/Post';
import FlipMove from 'react-flip-move';

function Feed() {
  const [input,setInput]=useState([]);

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapShot=>(
      setInput(snapShot.docs.map(doc=>doc.data()))  //Gives us an array of all data in database
    ))
  },[])
  return (
    <div className='feed'>
      <div className='feed-head'>
        <h2>Home</h2>
      </div>
      <Tweetbox/>
      <FlipMove>
      {input.map((input)=>{
        return<>
        <Post key={input.text} displayName={input.displayName}
        username={input.username}
        text={input.text}
        verified={input.verified}
        avatar={input.avatar}
        image={input.image}/>
        </>
      })}
      </FlipMove>
    </div>
  )
}

export default Feed
