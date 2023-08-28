import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

function ProtectedRoutes() {
    const authentication=localStorage.getItem('loggedin')
  return (
    authentication?<Outlet/>:<Navigate to={'/signin'}/>
  )
}

export default ProtectedRoutes
