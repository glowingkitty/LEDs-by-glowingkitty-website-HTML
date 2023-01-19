import React from 'react'

import { Helmet } from 'react-helmet'

import './glow-tower.css'

const GlowTower = (props) => {
  return (
    <div className="glow-tower-container">
      <Helmet>
        <title>GlowTower - LEDs by glowingkitty</title>
        <meta property="og:title" content="GlowTower - LEDs by glowingkitty" />
      </Helmet>
    </div>
  )
}

export default GlowTower
