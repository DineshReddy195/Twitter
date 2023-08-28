import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const url = 'https://crypto-news11.p.rapidapi.com/cryptonews/bitcoin?max_articles=10&last_n_hours=48&top_n_keywords=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b56894877bmsh2480b8128479b86p1b5634jsnb9d0a76c542f',
		'X-RapidAPI-Host': 'crypto-news11.p.rapidapi.com'
	}
};
function News() {
    const [news,setNews]=useState([]);
    useEffect(()=>{
        fetch(url,options).then(res=>res.json()).then(data=>{console.log(data.articles);setNews(data.articles)})
    },[])
  return (
    <div>
       {news.map((element)=>{
        return <div>
            <div>
            <h4><strong>Title:</strong> {element.title}</h4>
            <p><strong>Description:</strong> {element.text}</p>
           <strong><Link to={element.url} style={{ color: 'black',textDecoration: 'none'}}>Click Here for more info</Link></strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span><strong>Date:</strong> {element.date}</span>
            </div>
            <hr/>
        </div>
        
       })}
    </div>
  )
}

export default News
