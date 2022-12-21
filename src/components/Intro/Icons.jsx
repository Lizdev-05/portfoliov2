import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiHashnode } from 'react-icons/si'
import './icons.css'

const Icons = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/oyinlade-ojesanmi/"> <BsLinkedin /> </a>
        <a href="https://github.com/Lizdev-05"><BsGithub /></a>
        <a href="https://hashnode.com/@Lizdev"><SiHashnode /></a>
    </div>
  )
}

export default Icons;