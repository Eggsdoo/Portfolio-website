import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ivxn36', 'template_ys739nt', form.current, '7yBe6Nllth25gJbdZ')

      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact">

      <div className="container contact__container">
        <div className="contact__prompt">
          <h2>Get In Touch</h2>
          <p>I'm excited to connect. Feel free to drop me a message about opportunities, collaborations, or just to say hello.</p>
          <div className="contact__links">
            <a href="https://github.com/Eggsdoo" rel="noreferrer" target="_blank"><FaGithubSquare/></a>
            <a href="https://www.linkedin.com/in/uykhan/" rel="noreferrer" target="_blank"><FaLinkedin/></a>
          </div>
        </div>
  
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message..' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact