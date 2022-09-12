import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './glow-core.css'

const GlowCore = (props) => {
  return (
    <div className="glow-core-container">
      <Helmet>
        <title>GlowCore - LEDs by glowingkitty - website</title>
        <meta
          property="og:title"
          content="GlowCore - LEDs by glowingkitty - website"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
    </div>
  )
}

export default GlowCore
