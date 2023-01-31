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
      <Header></Header>
      <div className="about-container1">
        <h1 className="about-text">glowingkitty</h1>
        <span className="about-text1">
          <span>
            Using our fascination for LEDs,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            to educate the next generation
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>of industrial designers.</span>
        </span>
        <a href="#explore" className="about-link button">
          Learn more
        </a>
      </div>
    </div>
  )
}

export default About
