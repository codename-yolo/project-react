import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscProject } from 'react-icons/vsc'


import './about.css'
import ME from '../../assets/about-me.png'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'></FaAward>
              <h5>FPT-Aptech</h5>
              <small>Grade: Distinction </small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'></FiUsers>
              <h5>GangBang</h5>
              <small>+500 People </small>
            </article>
            <article className='about__card'>
              <VscProject className='about__icon'></VscProject>
              <h5>Projects</h5>
              <small>99+ Completed </small>
            </article>
          </div>
          <p>I desire to apply the knowledge obtained from my study in my work to become an excellent Frontend Developer, bringing values for customers and the company's products, thereby contributing more to the development of the Company.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About