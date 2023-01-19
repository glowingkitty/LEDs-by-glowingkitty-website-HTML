import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './glow-tube.css'

const GlowTube = (props) => {
  return (
    <div className="glow-tube-container">
      <Helmet>
        <title>GlowTube - LEDs by glowingkitty</title>
        <meta property="og:title" content="GlowTube - LEDs by glowingkitty" />
      </Helmet>
      <Header rootClassName="header-root-class-name6"></Header>
    </div>
  )
}

export default GlowTube
