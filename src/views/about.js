import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - LEDs by glowingkitty</title>
        <meta property="og:title" content="About - LEDs by glowingkitty" />
      </Helmet>
    </div>
  )
}

export default About
