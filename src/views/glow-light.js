import React from 'react'

import { Helmet } from 'react-helmet'

import './glow-light.css'

const GlowLight = (props) => {
  return (
    <div className="glow-light-container">
      <Helmet>
        <title>GlowLight - LEDs by glowingkitty</title>
        <meta property="og:title" content="GlowLight - LEDs by glowingkitty" />
      </Helmet>
    </div>
  )
}

export default GlowLight
