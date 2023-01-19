import React from 'react'

import { Helmet } from 'react-helmet'

import './glow-tube.css'

const GlowTube = (props) => {
  return (
    <div className="glow-tube-container">
      <Helmet>
        <title>GlowTube - LEDs by glowingkitty</title>
        <meta property="og:title" content="GlowTube - LEDs by glowingkitty" />
      </Helmet>
    </div>
  )
}

export default GlowTube
