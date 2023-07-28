import React from 'react';
import '../styles/Searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Searchbar() {
  return (
    <div className='searchbar'>
      <FontAwesomeIcon className='searchbar-icon' icon={faSearch} />
      <input className='searchbar-input' type='text' placeholder='Explore meridio...' />
    </div>
  );
}
