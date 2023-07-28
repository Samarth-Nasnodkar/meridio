import React from 'react';
import '../styles/Compose.css';

export default function Compose(props) {
  const pfp = props.pfp ?? 'https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg';
  return (
    <div className='compose-wrapper'>
      <div className="top-row">
        <img src={pfp} className='compose-img' alt='pfp'/>
        <input type="text" placeholder="What's happening?" className="compose-input"/>
      </div>
    </div>
  )
}
