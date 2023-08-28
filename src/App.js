import { Routes,Route, Navigate } from 'react-router-dom';
// import './App.css';
import Signin from './Components/Authentication/Signin';
import Feed from './Components/Feed/Feed';
import Sidebar from './Components/Sidebar/Sidebar';
import Widgets from './Components/Widgets/Widgets';
import Home from './Components/Home/Home';
import Signup from './Components/Authentication/Signup';
import ProtectedRoutes from './Components/Services/ProtectedRoutes';
import Lists from './Components/Lists/Lists';
import Explore from './Components/Explore/Explore';
import Notifications from './Components/Notifications/Notifications';
import Message from './Components/Message/Message';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Profile from './Components/Profile/Profile'
import More from './Components/More/More';
import All from './Components/Notifications/All';
import Pagenotfound from './Components/Pagenotfound';
import Verified from './Components/Notifications/Verified';
import Mentions from './Components/Notifications/Mentions';
import Sports from './Components/Explore/Sports';
import News from './Components/Explore/News';
import Entertainment from './Components/Explore/Entertainment';


function App() {
  return (
    <div className="App">
       {/* <div>
        <Routes>
      <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>  */}
     <Sidebar/>
     
      <div style={{margin:'10px 22%'}}>
          <Routes>
        <Route path='/' element={<ProtectedRoutes/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}>
        <Route path='sports' element={<Sports/>}/>
        <Route path='' element={<Navigate to='sports'/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='' element={<Navigate to='news'/>}/>
        <Route path='entertainment' element={<Entertainment/>}/>
        <Route path='' element={<Navigate to='entertainment'/>}/>
        </Route>
        <Route path='/notifications' element={<Notifications/>}>
        <Route path='all' element={<All/>}/>
        <Route path='' element={<Navigate to='all'/>} />
        <Route path='verified' element={<Verified/>}/>
        <Route path='' element={<Navigate to='verified'/>}/>
        <Route path='mentions' element={<Mentions/>}/>
        <Route path='' element={<Navigate to='mentions'/>}/>
        </Route>
        <Route path='/message' element={<Message/>}/>
        <Route path='/bookmarks' element={<Bookmarks/>}/>
        <Route path='/lists' element={<Lists/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/more' element={<More/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
        </Route>
      </Routes>
      </div>
      {/* <Sidebar/>
      <Feed/>
      <Widgets/> */}
      <Widgets/>
    </div>
  );
}

export default App;
