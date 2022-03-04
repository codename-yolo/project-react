import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/" target="_blank"><BsLinkedin></BsLinkedin></a>
      <a href="https://www.github.com/" target="_blank"><BsGithub></BsGithub></a>
      <a href="https://www.facebook.com/" target="_blank"><BsFacebook></BsFacebook></a>

    </div>
  )
}

export default HeaderSocial