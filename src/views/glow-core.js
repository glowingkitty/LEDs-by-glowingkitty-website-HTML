import React from 'react'

import { Helmet } from 'react-helmet'

import './glow-core.css'

const GlowCore = (props) => {
  return (
    <div className="glow-core-container">
      <Helmet>
        <title>GlowCore - LEDs by glowingkitty</title>
        <meta property="og:title" content="GlowCore - LEDs by glowingkitty" />
      </Helmet>
    </div>
  )
}

export default GlowCore
