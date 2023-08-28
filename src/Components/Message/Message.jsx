import React from 'react';
import './Message.css'
import Sidebar from '../Sidebar/Sidebar';
import { Button } from '@mui/material'

function Message() {
  return (
    <div className='message'>
      <div className='inbox'>
        <h1>Welcome to your <br/> inbox!</h1>
        <p>Drop a line, share posts and more with private<br/> conversations between you and others on twitter. </p>
        <Button className='message-details'>Write a message</Button>
      </div>
      <div style={{borderRight:'1px solid black',margin:'20px'}}></div>
      <div className='right-panel'>
        <h1>Select a message</h1>
        <p>Choose from your existing conversations, start a new one, or just keep swimming.</p>
        <Button className='new-message'>New Message</Button>
      </div>
    </div>
  )
}

export default Message
