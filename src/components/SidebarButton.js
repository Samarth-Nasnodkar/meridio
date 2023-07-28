import React from 'react';
import '../styles/SidebarButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SidebarButton(props) {
  const buttonClassName = props.active ? 'sidebar-button active' : 'sidebar-button';
  return (
    <div className={buttonClassName} onClick={props.clickFunc}>
      <div className='sidebar-button-icon'>
        <FontAwesomeIcon icon={props.iconName} />
      </div>
      <div className='sidebar-button-text'>{props.name}</div>
    </div>
  )
}
