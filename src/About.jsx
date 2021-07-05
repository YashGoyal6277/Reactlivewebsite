import React from 'react'
import { NavLink } from 'react-router-dom'
import { Common } from './Common'
import image from './images/heroo.jfif'

export const About = () => {
    return (
        <>
      <Common msg="Welcome to About Page" btnmsg="Contact Us" visit="/contact"
      img={image} />
        </>
    )
}
