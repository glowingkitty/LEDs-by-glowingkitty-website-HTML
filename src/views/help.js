import React from 'react'

import { Helmet } from 'react-helmet'

import './help.css'

const Help = (props) => {
  return (
    <div className="help-container">
      <Helmet>
        <title>Help - LEDs by glowingkitty - website</title>
        <meta
          property="og:title"
          content="Help - LEDs by glowingkitty - website"
        />
      </Helmet>
    </div>
  )
}

export default Help
