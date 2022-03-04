import React from 'react'
import './footer.css'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>UNDEFINED</a>
      <ul className='permalinks'>
        <li><a href="#"></a>Home</li>
        <li><a href="#about"></a>About</li>
        <li><a href="#experience"></a>Experience</li>
        <li><a href="#portfolio"></a>My Projects</li>
        <li><a href="#services"></a>Supplement</li>
        <li><a href="#testimonials"></a>Rate</li>
        <li><a href="#contact"></a>Contact</li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF></FaFacebookF></a>
        <a href="https://instagram.com"><FiInstagram></FiInstagram></a>
        <a href="https://twitter.com"><IoLogoTwitter></IoLogoTwitter></a>
        <a href="https://telegram.com"><FaTelegramPlane></FaTelegramPlane></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; UNDEFINED Cdz. All right reserved. </small>
      </div>
    </footer>
  )
}

export default Footer