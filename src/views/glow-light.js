import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './glow-light.css'

const GlowLight = (props) => {
  return (
    <div className="glow-light-container">
      <Helmet>
        <title>GlowLight - LEDs by glowingkitty</title>
        <meta property="og:title" content="GlowLight - LEDs by glowingkitty" />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
    </div>
  )
}

export default GlowLight
