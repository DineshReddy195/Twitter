import React, { useState,useEffect } from 'react'
import './Profile.css'



const url = 'https://twitter154.p.rapidapi.com/user/details?username=omarmhaimdat&user_id=96479162';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b56894877bmsh2480b8128479b86p1b5634jsnb9d0a76c542f',
		'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
	}
};

function Profile() {
  const [state,setState]=useState([])
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data);
      });
  }, []);
  return (
    <div className='profile'>
      <div className='profile-image'>
        <fieldset>
          <img src={state.profile_banner_url} alt='background' height={250}/>
        </fieldset>
        <div className='profile-panel'>
      {<img src={state.profile_pic_url} alt='profile' width={150} height={150} className='profile-pic'/>}
      <h2 style={{marginTop:'100px'}}>{state.name}</h2>
      <p>@{state.username}</p><br/>
      <p>Joined: {state.creation_date}</p>
      <span>{state.following_count} Following</span>&nbsp; &nbsp;
      <span>{state.follower_count} Followers</span>
      </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Profile
