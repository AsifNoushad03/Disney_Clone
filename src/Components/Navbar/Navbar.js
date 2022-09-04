import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" className="brand-logo" alt="" />
      <ul className="nav-links">
        <li className="nav-items"><a href="/">TV</a></li>
        <li className="nav-items"><a href="/">movies</a></li>
        <li className="nav-items"><a href="/">sports</a></li>
        <li className="nav-items"><a href="/">premium</a></li>
      </ul>

      <div className="right-container">
        <input type="text" className="search-box" placeholder="search" />
        <button className="sub-btn">subscribe</button>
        <a href="/" className="login-link">login</a>
      </div>
    </nav>
  )
}

export default Navbar
