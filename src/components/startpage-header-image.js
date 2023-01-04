import React from 'react'

import PropTypes from 'prop-types'

import './startpage-header-image.css'

const StartpageHeaderImage = (props) => {
  return (
    <div className={`startpage-header-image-container ${props.rootClassName} `}>
      <h1 className="startpage-header-image-text">{props.header1}</h1>
      <button type="button" className="button">
        {props.button}
      </button>
    </div>
  )
}

StartpageHeaderImage.defaultProps = {
  header1: 'Learn industrial design the easy & fun way, with LEDs!',
  rootClassName: '',
  button: 'Explore products',
}

StartpageHeaderImage.propTypes = {
  header1: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default StartpageHeaderImage
