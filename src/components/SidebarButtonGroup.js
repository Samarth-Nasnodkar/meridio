import React, { useState } from 'react';
import SidebarButton from './SidebarButton';
import { faHome, faNewspaper, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
export default function SidebarButtonGroup(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonData = [
    {
      name: 'Home',
      icon: faHome
    },
    {
      name: 'Communities',
      icon: faPeopleGroup
    },
    {
      name: 'News Feed',
      icon: faNewspaper
    }
  ];
  const buttons = [];
  for(let i = 0; i < buttonData.length; i++) {
    const button = buttonData[i];
    buttons.push(<SidebarButton name={button.name} iconName={button.icon} clickFunc={() => setActiveIndex(i)} active={i === activeIndex}/>);
  }

  return (
    <div>
      {buttons}
    </div>
  )
}
