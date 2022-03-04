import React from 'react'
import './services.css'

import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services' >
      <h5>Supplement</h5>
      <h2>SKILLS</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Office information technology</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p> Proficient in Word, Excel, Power Point.</p>
            </li>

          </ul>
        </article>
        {/*END UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>English</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p> Be able to read and understand English material and documents</p>
            </li>

          </ul>
        </article>
        {/*END WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3>Working skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Be able to self-study, work independently, work in a team, and work under pressure</p>
            </li>

          </ul>
        </article>
        {/*END CONTENT CREATION  */}



      </div>
    </section>
  )
}

export default Services