import React from 'react';
import '../styles/TrendingTile.css';

export default function TrendingTile(props) {
  const fCount = props?.count ?? 0;
  const fTime = props?.time ?? 0;
  const fText = `${fCount} in ${fTime} hours`
  return (
    <div className="trending-tile">
      <div className="tile-text">
        <p className="tile-text-header">
          Blender Update
        </p>
        <p className="tile-text-count">
          125 posts today
        </p>
      </div>
      <div className="tile-frequency">
        <p className="tile-frequency-text">{fText}</p>
      </div>
    </div>
  )
}
