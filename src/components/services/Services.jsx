import React from 'react'
import './services.css'
import { BsCheckAll } from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">

          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Intuitive User Interfaces:</b> Crafting user interfaces that are both visually appealing and user-friendly, with 
                a focus on JavaScript, HTML, and CSS</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Wireframing and Prototyping:</b> Creating wireframes and prototypes to visualize design concepts and interactions.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Usability Testing:</b> Conducting usability testing to ensure an optimal user experience.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Responsive Design:</b> Designing interfaces that adapt seamlessly to different devices, utilizing Bootstrap for responsiveness.</p>
            </li>
            {/* <li>
              <BsCheckAll className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* End of UI/UX Section */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Front-End Development:</b> Building dynamic and interactive web applications using JavaScript, HTML, and CSS.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Back-End Development:</b> Crafting robust server-side applications with Node.js for JavaScript-based back-end development and ASP.NET Core for C#.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Database Management:</b> Designing and managing databases, including SQL for data manipulation and retrieval.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>API Integration:</b> Integrating APIs and third-party services to enhance web applications.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Version Control:</b> Utilizing Git for efficient code versioning and collaboration.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Mobile Development:</b> Experience with Android Studio and SwiftUI for Android and iOS app development respectively.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development Section */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Engaging Content:</b> Producing engaging and SEO-friendly content using HTML, CSS, and JavaScript for web content.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Graphic Design:</b> Designing web graphics and visuals to enhance user engagement.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Social Media Strategy:</b> Crafting content strategies for social media platforms to boost online presence.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>CMS Proficiency:</b> Work efficiently with content management systems.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon' />
              <p><b>Accessibility Focus:</b> Prioritize web accessibility through semantic HTML and alt text.</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation Section*/}
      </div>
    </section>
  )
}

export default Services