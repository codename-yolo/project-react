import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlinePhone } from 'react-icons/ai'



import './contact.css'
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_x4gexwh', 'template_7x2h1rn', form.current, 'jYleNM-WZteQVYiGz')
    e.target.reset()
    // .then((result) => {
    //   console.log(result.text);
    // }, (error) => {
    //   console.log(error.text);
    // });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'></MdOutlineEmail>
            <h4>Email</h4>
            <h5>handofgodd.01@gmail.com</h5>
            <a href="mailto:handofgodd.01@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'></RiMessengerLine>
            <h4>Message</h4>
            <h5>Đoàn Mạnh Cường</h5>
            <a href="https://m.me/sweetguys99">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlinePhone className='contact__option-icon'></AiOutlinePhone>
            <h4>Phone</h4>
            <h5>0986463167</h5>
            <a href="https://api.whatsapp.com/sen?phone=113">Call</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Full Name...!' required />
          <input type="email" name='email' placeholder='Email...!' required />
          <textarea name='message' rows='7' placeholder='Message...!' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact