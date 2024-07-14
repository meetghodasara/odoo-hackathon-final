import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header-main'>
        <div className="header-left">
            <div className="header-logo">
                <img src="./Logo.png" alt="" className='logo' />
            </div>
            <div className="header-title">Public Library</div>
        </div>
        <div className="header-right">
            <button>Login</button>
        </div>
    </div>
  )
}

export default Header