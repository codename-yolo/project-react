import React from 'react'
import { useState } from 'react'

import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
      <a href="#header" onClick={() => { setActiveNav('#header') }} className={activeNav === '#/' ? 'active' : ''}><AiOutlineHome></AiOutlineHome></a>
      <a href="#about" onClick={() => { setActiveNav('#about') }} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser></AiOutlineUser></a>
      <a href="#experience" onClick={() => { setActiveNav('#experience') }} className={activeNav === '#experience' ? 'active' : ''}><BiBook></BiBook></a>
      <a href="#services"><RiServiceLine onClick={() => { setActiveNav('#services') }} className={activeNav === '#services' ? 'active' : ''}></RiServiceLine></a>
      <a href="#contact" onClick={() => { setActiveNav('#contact') }} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail></BiMessageSquareDetail></a>



    </nav>
  )
}

export default Nav