import './Header.css'
import React from 'react'

const Header = () => {
  return (
<>
<header className='all-header'>
    <div className='header-wrapper'>
        <div className='header'>
     <div className='header-left'>
        <h1>The Curve Bank</h1>
     </div>
     <div className='header-right'>
        <p>John Doe</p>
        <button className='header-right-button'> Logout</button>
     </div>
        </div>
    </div>
</header>

</>
  )
}

export default Header
