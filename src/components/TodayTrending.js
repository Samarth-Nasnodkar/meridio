import React from 'react';
import '../styles/TodayTrending.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import TrendingTile from './TrendingTile';

export default function TodayTrending() {
  const [expanded, setExpanded] = React.useState(true);
  const tiles = [
    <TrendingTile count={66} time={1} key="1"/>,
    <TrendingTile count={66} time={1} key="2"/>,
    <TrendingTile count={66} time={1} key="3"/>,
  ];
  return (
    <div className='today-trending'>
      <div className="trending-title">
        <p className="trending-title-text">Today Trending</p>
        <button className="trending-title-dropdown">
          <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} onClick={() => setExpanded(!expanded)}/>
        </button>
      </div>
      { expanded && 
        <div className="trending-tiles-wrapper">
          <div className="trending-tiles">
            {tiles}
          </div>
          <p className="trending-footer">See all</p>
        </div>
      } 
    </div>
  );
}
