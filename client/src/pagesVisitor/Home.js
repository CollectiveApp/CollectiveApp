import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <img className="logo" src="" alt="Logo"/>
      <p>Description</p>
      <Link to={'/projects'}>Projects</Link>
      <Link to={'/events'}>Events</Link>
    </div>
  )
}
