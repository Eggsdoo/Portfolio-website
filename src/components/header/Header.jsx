import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.png'
// import HeaderSocials from './HeaderSocials'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container"> {/* General container class we will wrap everything in */}
        <div className="header__title">
          <h1>Hello,</h1>
          <h1>I am Sam.</h1>
        </div>
        <div className="typewriter">
          <h4 id="typewriter__text">A certified web applications developer</h4>
        </div>
        <CTA/>
        {/* <HeaderSocials/> */}
        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
        <div className="languages">
          <div className="languages__slide">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <FaReact/>
            <FaNodeJs/>
            <FaJava/>
            <FaBootstrap/>
            <FaPython/>
          </div>
          <div className="languages__slide">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <FaReact/>
            <FaNodeJs/>
            <FaJava/>
            <FaBootstrap/>
            <FaPython/>
          </div><div className="languages__slide">
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <FaReact/>
            <FaNodeJs/>
            <FaJava/>
            <FaBootstrap/>
            <FaPython/>
          </div>
        </div>
        {/* <div className="me">
          <img src={ME} alt="me"/>
        </div> */}
      </div>
    </header>
  )
}

export default Header