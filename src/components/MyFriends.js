import React from 'react';
import '../styles/MyFriends.css';
import FriendTile from './FriendTile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function MyFriends() {
  const [expanded, setExpanded] = React.useState(true);
  const tiles = [
    <FriendTile notifs={10} key="1"/>,
    <FriendTile key="2"/>,
    <FriendTile key="3"/>,
    <FriendTile notifs={5} key="4"/>,
  ];
  return (
    <div className='my-friends'>
      <div className="friends-title">
        <p className="friends-title-text">My Friends</p>
        <button className="friends-title-dropdown">
          <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} onClick={() => setExpanded(!expanded)}/>
        </button>
      </div>
      { expanded && 
        <div className="friends-tiles">
          {tiles}
        </div>
      } 
    </div>
  );
}
