import React from 'react';
import '../styles/Sidebar.css';
import logo from '../icons/svg/logo-no-background.svg';
import Searchbar from './Searchbar';
import Divider from './Divider';
import SidebarButtonGroup from './SidebarButtonGroup';
import CommunitySection from './CommunitySection';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <img className='sidebar-logo' src={logo} alt="Meridio" />
      </div>
      <Searchbar />
      <SidebarButtonGroup />
      <Divider />
      <CommunitySection />
    </div>
  );
}
