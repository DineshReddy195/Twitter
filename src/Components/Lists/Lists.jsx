import React,{useState,useEffect} from 'react'
import './Lists.css'
import Sidebar from '../Sidebar/Sidebar';
import Widgets from '../Widgets/Widgets';


const url =
  "https://twitter154.p.rapidapi.com/user/following?user_id=96479162&limit=100";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0fc1bbd449msh43c1734f4ce93fcp1f32ebjsn760c1f4ac686",
    "X-RapidAPI-Host": "twitter154.p.rapidapi.com"
  }
};

function Lists() {
    const [list,setList]=useState([]);
    useEffect(()=>{
        fetch(url,options).then(res=>res.json()).then(data=>{console.log(data.results);setList(data.results)})
    },[])
  return (
    <div className='lists'>
      <div className='pinned-lists'>
        <h1>Pinned Lists</h1>
        <p>Nothing to see here yet — pin your favorite Lists to access them quickly.</p>
        </div>
        <hr/>
        <div>
          <div>
            <h1>Discover new lists</h1>
            {
              list.map((element)=>{
                return <div className='list-mapped'>
                  <div>
                  <img src={element.profile_pic_url} alt='profile' width={70} height={70} className='list-image'/>
                  </div>
                  <div className='mapped-content'>
                  <span><strong>{element.name}</strong></span> 
                  <span className='span-content'>{element.listed_count} posts</span>
                  <p>{element.follower_count} followers including @{element.username}</p>
                  </div>
                </div>
              })
            }
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default Lists
