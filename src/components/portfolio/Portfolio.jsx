import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfo1.png'
import IMG2 from '../../assets/portfo2.png'
import IMG3 from '../../assets/portfo3.png'
// import IMG4 from '../../assets/portfo4.png'
// import IMG5 from '../../assets/portfo5.png'
// import IMG6 from '../../assets/portfo6.png'

const data = [

  {
    id: 1,
    image: IMG1,
    title: 'War of Java',
    description: 'Turn-based Java Simulation Game',
    github: 'https://github.com/Eggsdoo/Simulation-game',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'News Application',
    description: 'News app built in Android Studio',
    github: 'https://github.com/Eggsdoo/News-app',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Canvas - Egg Collector',
    description: 'Interactive 2D web-based game; collect objectives and avoid obstacles',
    github: 'https://github.com/Eggsdoo/Canvas-game',
    demo: 'https://dribbble.com'
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'name of project',
  //   description: 'N/A',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'name of project',
  //   description: 'N/A',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'name of project',
  //   description: 'N/A',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com'
  // },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo, description }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p className="portfolio__item-description">{description}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                  {/* <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio