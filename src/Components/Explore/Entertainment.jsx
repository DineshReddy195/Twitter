import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const url = 'https://memes-from-reddit.p.rapidapi.com/memes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b56894877bmsh2480b8128479b86p1b5634jsnb9d0a76c542f',
		'X-RapidAPI-Host': 'memes-from-reddit.p.rapidapi.com'
	}
};
function Entertainment() {
    const [entertainment,setEntertainment]=useState([])
    useEffect(()=>{
        fetch(url,options).then(res=>res.json()).then(data=>{console.log(data.data);setEntertainment(data.data)})
    },[])
  return (
    <div>
      {entertainment.map((element)=>{
        return <div>
            <div>
            <h4><strong>Title:</strong>{element.title}</h4>
            <h6><strong>Author:</strong>{element.author}</h6>
            <strong><Link to={element.url} style={{ color: 'black',textDecoration: 'none'}}>Click here for more</Link></strong>
            </div>
            <div><hr/></div>
        </div>
      })}
    </div>
  )
}

export default Entertainment
