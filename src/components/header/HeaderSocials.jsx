import React from 'react'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className= 'Header__socials'>
        <a href='https://www.linkedin.com/in/lucky-parihar-b90425208/' target='_blank'><CiLinkedin/></a>
        <a href='https://github.com/Luckyparihar11' target='_blank'><FaGithub/></a>
        <a href='https://www.instagram.com/_lucky_parihar/' target='_blank'><FaInstagram/></a>

    </div>
  )
}

export default HeaderSocials