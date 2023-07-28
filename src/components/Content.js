import React from 'react'
import '../styles/Content.css'
import Navbar from './Navbar'
import Feed from './Feed'

export default function Content() {
  return (
    <div className="content">
      <Navbar />
      <Feed />
    </div>
  )
}
