import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - LEDs by glowingkitty</title>
        <meta property="og:title" content="About - LEDs by glowingkitty" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
    </div>
  )
}

export default About
