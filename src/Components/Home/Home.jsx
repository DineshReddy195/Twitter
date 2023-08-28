import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import Widgets from '../Widgets/Widgets'
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const userName=JSON.parse(localStorage.getItem('user'));
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('loggedin');
    navigate('/signin')
  }
  return (
    <div>
      <div className='head d-flex'>
        <h3>Welcome - {userName.name}</h3>
        <button className='btn btn-primary p-2' onClick={handleLogout}>Logout</button>
      </div>
      <div className='home'>
        <Feed/>
      </div>
    </div>
  )
}

export default Home
