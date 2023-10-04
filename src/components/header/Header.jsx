import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container"> {/* General container class we will wrap everything in */}
        <h5>Hello I'm</h5>
        <h1>Usama Khan</h1>
        <div className="typewriter">
          <h5 className="text-light" id="typewriter__text">I build things for the web</h5>
        </div>
        <CTA/>
        <HeaderSocials/>
        <div className="languages">
          <div className="languages__slide">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <FaReact/>
            <FaNodeJs/>
            <FaJava/>
            <FaBootstrap/>
          </div>
          <div className="languages__slide">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <FaReact/>
            <FaNodeJs/>
            <FaJava/>
            <FaBootstrap/>
          </div><div className="languages__slide">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <FaReact/>
            <FaNodeJs/>
            <FaJava/>
            <FaBootstrap/>
          </div>
        </div>
        {/* <div className="me">
          <img src={ME} alt="me"/>
        </div> */}

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header