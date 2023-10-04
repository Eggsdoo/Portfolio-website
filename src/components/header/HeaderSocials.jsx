import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
// import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/uykhan/" rel="noreferrer" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/Eggsdoo" rel="noreferrer" target='_blank'><FaGithubSquare/></a>
        {/* <a href="https://dribbble.com" rel="noreferrer" target='_blank'><FaDribbbleSquare/></a> */}
    </div>

  )
}

export default HeaderSocials