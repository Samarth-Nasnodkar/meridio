import React from 'react';
import '../styles/CommunityTile.css';

export default function CommunityTile(props) {
  const icon = props.icon ?? 'https://img.freepik.com/free-vector/hand-drawn-soccer-logo-template_23-2149364524.jpg';
  const name = props.name ?? 'Memes';
  return (
    <div className='community-tile'>
      <img src={icon} alt={name}/>
      <div className="community-tile-content">
        <h3 className='community-tile-name'>{name}</h3>
        <p className='community-tile-members'>750 members</p>
      </div>
    </div>
  );
}
