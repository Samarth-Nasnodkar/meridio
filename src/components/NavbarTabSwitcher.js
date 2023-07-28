import React, { useState } from 'react';
import '../styles/NavbarTabSwitcher.css'

export default function NavbarTabSwitcher() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabNames = ['Explore', 'Community Feed', 'Friends'];
  const tabs = tabNames.map((tabName, index) => {
    var cls = "navbar-tab-switcher-tab";
    if (index === activeTabIndex)
      cls += " active";
    return (<div className={cls} onClick={() => setActiveTabIndex(index)} key={index}>{tabName}</div>);
  });
  return (
    <div className="navbar-tab-switcher">
      {/* <div className="navbar-tab-switcher-tab active">Explore</div>
      <div className="navbar-tab-switcher-tab">Community Feed</div>
      <div className="navbar-tab-switcher-tab">Friends</div> */}
      {tabs}
    </div>
  );
}
