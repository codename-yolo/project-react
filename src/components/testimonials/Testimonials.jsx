import React from 'react'
import './testimonials.css'
import CLIENT1 from '../../assets/client1.png'
import CLIENT2 from '../../assets/client2.png'
import CLIENT3 from '../../assets/client3.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



//DO NOT USE THE IMAGE IN PRODUCTION
const data = [{
  avatar: CLIENT1,
  name: 'THE TUNG CAVE 1',
  review: 'Sao anh cuong co the dep trai the a'

},
{
  avatar: CLIENT2,
  name: 'THE TUNG CAVE 2',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at aspernatur molestiae? At delectus mollitia ullam sed repellendus doloribus, consequatur eius corporis nihil, dolor ipsam iste, dicta reiciendis aperiam recusandae'

},
{
  avatar: CLIENT3,
  name: 'THE TUNG CAVE 3',
  review: 'Alo a cuong dep trai nhat the gioi'
}]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Self appraisal</h5>
      <h2>From Everyone</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>)
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials