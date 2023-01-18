import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {CiUser} from 'react-icons/ci'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'




const Nav = () => {
  const {activeNav, setActiveNav} = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active': ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active': ''} ><CiUser/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active': ''}><BsFillBookmarkFill/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav==='#services' ? 'active': ''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav;