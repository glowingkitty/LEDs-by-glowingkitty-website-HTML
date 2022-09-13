import React from 'react'

import PropTypes from 'prop-types'

import './startpage-header-image.css'

const StartpageHeaderImage = (props) => {
  return (
    <div className={`startpage-header-image-container ${props.rootClassName} `}>
      <span className="startpage-header-image-text">{props.header}</span>
      <button className="startpage-header-image-button button">
        {props.header_cta}
      </button>
    </div>
  )
}

StartpageHeaderImage.defaultProps = {
  header: 'Learn electronics the easy & fun way, with LEDs!',
  rootClassName: '',
  header_cta: 'Explore products',
}

StartpageHeaderImage.propTypes = {
  header: PropTypes.string,
  rootClassName: PropTypes.string,
  header_cta: PropTypes.string,
}

export default StartpageHeaderImage
