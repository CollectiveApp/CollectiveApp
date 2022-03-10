import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
  <>
  <div className="home-container">
    <header>        
      <div className="home-btn-container">
        <button className="home-btn"><Link className="home-link" to={'/projects'}>PROJECTS</Link></button>
        <button className="home-btn"><Link className="home-link" to={'/events'}>EVENTS</Link></button>
      </div>
    </header>
    <div>
      <div className="logo-container">
        <img className="logo" src="/images/logo_gelb.png" alt="Logo"/>
      </div>
    </div>
    <footer className="footer">
      <a className="footer-link" href="https://www.facebook.com/ramschakl"><img className="icon" src="/images/fb.png" alt="Logo"/></a>
      <a className="footer-link" href="https://soundcloud.com/ramschakl" ><img className="icon" src="/images/sc.png" alt="Logo"/></a>
      <a className="footer-link" href=""><img className="icon" src="/images/mail.png" alt="Logo"/></a>
    </footer>
  </div>
  </>
  )
}
