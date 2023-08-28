import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import Sidebaroptions from './Sidebaroptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'


function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='twitter-icon'/>
       <Link to='/' ><Sidebaroptions active Icon={HomeIcon} text={'Home'} className='home'/></Link>
        <Link to='/explore'><Sidebaroptions Icon={SearchIcon} text={'Explore'} className='explore'/></Link>
        <Link to='/notifications'><Sidebaroptions Icon={NotificationsNoneIcon} text={'Notifications'}/></Link>
        <Link to='/message'><Sidebaroptions Icon={MailOutlineIcon} text={'Message'}/></Link>
        <Link to='/bookmarks'><Sidebaroptions Icon={BookmarkBorderIcon} text={'Bookmarks'}/></Link>
        <Link to='/lists'><Sidebaroptions Icon={ListAltIcon} text={'Lists'}/></Link>
        <Link to='/profile'><Sidebaroptions Icon={PermIdentityIcon} text={'Profile'}/></Link>
        <Link to='/more'><Sidebaroptions Icon={MoreHorizIcon} text={'More'}/></Link>
        <Button className='tweet' variant='outlined' fullWidth>Tweet</Button>
        
    </div>
  )
}

export default Sidebar
