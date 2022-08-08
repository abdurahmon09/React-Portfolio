import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {ImTelegram} from 'react-icons/im'
import {FaInstagram} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9pfr7ca', 'template_f7k90xi', form.current, '4BaXG4ZE0xNgmul4h')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='contact__option-email'>abdurahmonumataliyev09@gmail.com</h5>
            <a href="mailto:abdurahmonumataliyev09@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>abdurahmon_8_7</h5>
            <a href="https://www.instagram.com/abdurahmon_8_7/" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <ImTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Abdurahmon</h5>
            <a href="https://telegram.me/a6uf8" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact