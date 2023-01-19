import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './glow-tower.css'

const GlowTower = (props) => {
  return (
    <div className="glow-tower-container">
      <Helmet>
        <title>GlowTower - LEDs by glowingkitty</title>
        <meta property="og:title" content="GlowTower - LEDs by glowingkitty" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
    </div>
  )
}

export default GlowTower
