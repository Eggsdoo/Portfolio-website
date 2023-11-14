import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.png'
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

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
           <div className="about__me-image"> {/* ref={container} */}

            {/* <img src={ME} alt="About Snap"/>  don't need this anymore because of animation */}
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Worldwide</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div> */}

          <div className="about__info">
            <p>
              Hello again, I'm Usama, a Toronto-based Front-End Developer with a passion for crafting user-centric web experiences.
            </p>
            {/* <p>
              My journey into web development started a year ago. I hold an advanced diploma in Business Administration - Marketing and a diploma in Web Applications Development (Mobile Specialist), providing me with a strong foundation in coding and problem-solving.
            </p> */}
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