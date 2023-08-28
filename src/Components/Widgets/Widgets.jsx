import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className="widget-input">
        <SearchIcon className='search-icon'/>
        <input type='text' placeholder='Search Twitter'/>
      </div>
      <div className="widget-container">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={'932586791953158144'}/>
        <TwitterTimelineEmbed sourceType='profile' screenName='bramus'
        options={{height:400}} />
        <TwitterShareButton url={'https://twitter.com/bramus?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E932586791953158144%7Ctwgr%5E119120abba1d7cf448913eb4431775e07ba9103a%7Ctwcon%5Es1_&ref_url=http%3A%2F%2Flocalhost%3A3000%2F'} options={{text:'Air bnb react-native-maps', via:'Bramus'}}/>
      </div>
    </div>
  )
}

export default Widgets
