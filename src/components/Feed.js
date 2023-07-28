import React from 'react';
import Posts from './Posts';
import '../styles/Feed.css';
import Recommendations from './Recommendations';

export default function Feed() {
  return (
    <div className='feed'>
      <Posts />
      <Recommendations />
    </div>
  );
}
