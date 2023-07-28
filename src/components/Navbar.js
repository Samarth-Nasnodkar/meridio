import { faBell, faChevronDown, faCommentDots, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/Navbar.css';
import NavbarTabSwitcher from './NavbarTabSwitcher';

export default function Navbar(props) {
  const pfp = props.pfp ?? 'https://marketplace.canva.com/EAFEits4-uw/1/0/800w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-r0bPCSjUqg0.jpg';
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-body">
          <div className="navbar-left-section">
            <div className="navbar-header">
              <FontAwesomeIcon className="navbar-header-icon" icon={faHome} />
              <h2>Home</h2>
            </div>
            <div className="tab-switcher">
              <NavbarTabSwitcher />
            </div>
          </div>
          <div className="navbar-right-section">
            <div className="navbar-action-buttons">
              <div className="navbar-button">
                <FontAwesomeIcon className="navbar-button-icon" icon={faCommentDots}/>
              </div>
              <div className="navbar-button">
                <FontAwesomeIcon className="navbar-button-icon" icon={faBell}/>
              </div>
            </div>
            <h3 className="navbar-profile-name">Samarth N</h3>
            <div className="navbar-profile-image-wrapper">
              <img src={pfp} alt="Profile" className="navbar-profile-image" />
              <FontAwesomeIcon className="navbar-profile-image-dropdown" icon={faChevronDown}/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
