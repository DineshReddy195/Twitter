import React from 'react';
import './Notifications.css';
import { Link, Outlet } from 'react-router-dom';

function Notifications() {
  return (
    <div className='notifications'>
      <div className='all-details'>
          <Link to='all' className='all-info'><h3>All</h3></Link>
        <Link to='verified' className='verified'><h3>Verified</h3></Link>
        <Link to='mentions' className='mention'><h3>Mentions</h3></Link>
        </div>
        <div className='down-panel'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Notifications
