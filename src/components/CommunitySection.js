import React from 'react'
import MyCommunities from './MyCommunities'
import CommunityTile from './CommunityTile';

export default function CommunitySection() {
  const mycomms = [];
  for (let i = 0; i < 3; i++) {
    mycomms.push(<CommunityTile />);
  }
  return (
    <div>
      <MyCommunities />
      <div className='joined-communities'>
        {mycomms}
      </div>
    </div>
  )
}
