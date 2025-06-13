import React from 'react'
import "./index.css";
const Navbar = () => {
  return (
    <div className='navbar'>
        <h2 id="logo">RankUP</h2>
        <div className='paths'>
          <a className="links"href='#'>College Predictor</a>
          <a className="links"href="#">Rank Predictior</a>
          <a className="links"href="#">Choose examination</a>
        </div>
        <div className='paths' id="loginButton">
          <a className="links"href='#'>Login</a>
        </div>
        
    </div>
  )
}

export default Navbar