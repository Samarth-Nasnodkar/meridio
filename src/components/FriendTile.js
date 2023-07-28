import React from 'react';
import '../styles/FriendTile.css';

export default function FriendTile(props) {
  const fCount = props?.notifs ?? 0;
  const fUrl = props?.profileUrl ?? 'https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg';
  return (
    <div className="friend-tile">
      <div className="friend-profile">
          <img className="friend-profile-img" src={fUrl} alt="profile"/>
        <div className="friend-text">
          <p className="friend-text-header">
            Jon Snow
          </p>
          <p className="friend-text-count">
            Last active 2 hours ago
          </p>
        </div>
      </div>
      {
        fCount > 0 && 
        <div className="friend-notifs">
          <p className="friend-notifs-text">{fCount}</p>
        </div>
      }
    </div>
  )
}
