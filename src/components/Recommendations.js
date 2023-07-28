import React from 'react';
import '../styles/Recommendations.css';
import TodayTrending from './TodayTrending';
import MyFriends from './MyFriends';

export default function Recommendations() {
  return (
    <div className='recommendations'>
      <TodayTrending />
      <MyFriends />
    </div>
  )
}
