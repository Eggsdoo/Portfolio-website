import React from 'react'
import './about.css'
// import ME from '../../assets/stick/me.svg'
// import { FaAward } from 'react-icons/fa'
// import { FaUsers } from 'react-icons/fa'
// import { FaFolderOpen } from 'react-icons/fa'
// import lottie from 'lottie-web'
// import { useEffect, useRef } from 'react'

const About = () => {

  // const container = useRef(null)

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData: require('../../assets/about__me-animation.json')
  //   })
  // }, [])
  // <div className="about__me-image"> ref={container} </div> //
  return (
    <section id='about'>
      {/* <h2>Get to know me</h2> */}

      <div className='container about__container'>
        <div className="about__me">
          <div className="wrapper">
            <div className="text">
              <div className="row">
                <p>Get</p>
                <p>Let's</p>
                {/* <p>yes</p> */}
              </div>
              <div className="row">
                <p>to know</p>
                <p>connect</p>
                {/* <p>aaaaa</p> */}
              </div>
              <div className="row">
                <p>me</p>
                <p>!!!</p>
                {/* <p>yellow</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__info">
            <p>
              Hello again, I'm Sam, a Toronto-based Developer with a passion for crafting user-centric web experiences.
            </p>
            <p>
              With over a year of experience in web development, I specialize in HTML, CSS, JavaScript, Java, and modern front-end frameworks like React. I enjoy transforming design concepts into clean, efficient, and accessible code.
            </p>
            <p>
              Beyond coding, you'll still find me in front of my computer, but that's because video games are my second love!
            </p>
            <p>
              Let's collaborate and bring your web ideas to life.
            </p>
          </div>
          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About