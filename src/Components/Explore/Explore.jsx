import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import './Explore.css'
import Widgets from '../Widgets/Widgets';
import { Link, Outlet } from 'react-router-dom';

const url = 'https://webit-news-search.p.rapidapi.com/trending?language=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b56894877bmsh2480b8128479b86p1b5634jsnb9d0a76c542f',
		'X-RapidAPI-Host': 'webit-news-search.p.rapidapi.com'
	}
};


function Explore() {
  const [explore,setExplore]=useState([])

  useEffect(()=>{
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExplore(data.results);
      });
  })
  return (
    <div className='explore'>
     <div className='explore-sets'>
      <Link to='sports' className='sports'><h4>Sports</h4></Link>
      <Link to='news' className='news'><h4>News</h4></Link>
      <Link to='entertainment' className='entertainment'><h4>Entertainment</h4></Link>
     </div>
     <div className='down-page'>
      <Outlet/>
     </div>
    </div>
  )
}

export default Explore
