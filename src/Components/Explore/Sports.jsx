import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


function Sports() {
    const [sports,setSports]=useState([]);
    useEffect(()=>{
        fetch('http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard').then(res=>res.json()).then(data=>{console.log(data.events);setSports(data.events)})
    },[])
  return (
    <div>
      {sports.map((element)=>{
        return <div>
            <div><strong>Trending</strong></div>
            <div>
                <h5># {element.name}</h5>
                <p><strong>Year:</strong> {element.season.year}</p>
                <p><strong>Match Type:</strong> {element.status.type.description},{element.status.type.shortDetail}</p>
                <h5><i><strong>Short Name:</strong> {element.shortName}</i></h5>
            </div>
            <div><hr/></div>
        </div>
      })}
    </div>
  )
}

export default Sports
