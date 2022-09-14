import React from 'react'

import { Helmet } from 'react-helmet'

import './demo.css'

const Demo = (props) => {
  return (
    <div className="demo-container">
      <Helmet>
        <title>Demo - LEDs by glowingkitty - website</title>
        <meta
          property="og:title"
          content="Demo - LEDs by glowingkitty - website"
        />
      </Helmet>
      <div>Placeholder for widget demoWidget</div>
    </div>
  )
}

export default Demo
