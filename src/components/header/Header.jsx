import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className='container header_container'>
      <h5 className='heading'> Hello I'm</h5>
      <h1 className='heading'>Lucky Parihar</h1>
      <h5 className='text-light heading'>React-Js Frontend Developer</h5>
      <CTA />
      <HeaderSocial />

      <div className='me'>
        <img src={ME} alt= "me"/>
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>

    </header>
  )
}

export default Header;