import React from 'react'
import { useState,useNavigate } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card() {
    const [input,setInput]=useState({
        name:'',
        email:'',
        password:''
    })
    

    // const handleSubmit=(e)=>{
    //     if(input.name===''|| input.name===null &&input.email===''||input.email===null&&input.password===''||input.password===null){
    //         alert('Please enter all inputs')
    //     }else{
    //     e.preventDefault();
    //     localStorage.setItem('user',JSON.stringify(input))
    //     navigate('/signin')
    //     }
    // }
  return (
    <div className='card'>
      <div>
        <img src='https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg' alt='twitter' className='twitter-pic'/>
      </div>
      <div>
      {/* <form className='form-control form' onSubmit={handleSubmit}>
      <input type='name' name='name' className='name form-control' placeholder='Enter Your name' value={input.name} onChange={(e)=>{setInput({...input,[e.target.name]:e.target.value})}}/><br/><br/>
            <input type='email' name='email' className='mail form-control' placeholder='Enter Your Mail id' value={input.email} onChange={(e)=>{setInput({...input,[e.target.name]:e.target.value})}} /><br/><br/>
            <input type='password' name='password' className='password form-control' placeholder='Enter Password' value={input.password} onChange={(e)=>{setInput({...input,[e.target.name]:e.target.value})}}/><br/><br/>
            <button className= 'register btn btn-outline-info'>Signup</button><br/>
            <span className='span'>Already have an account? <Link to='/signin'>Login</Link></span>
        </form> */}
      </div>
    </div>
  )
}

export default Card
