import React from 'react'

import PropTypes from 'prop-types'

import './eventsworkshops3d-model-your-l-e-d-project-in-fusion360.css'

const Eventsworkshops3DModelYourLEDProjectInFusion360 = (props) => {
  return (
    <div
      className={`eventsworkshops3d-model-your-l-e-d-project-in-fusion360-container eventblockpreview ${props.rootClassName} `}
    >
      <span className="eventsworkshops3d-model-your-l-e-d-project-in-fusion360-text eventblockh1">
        {props.text}
      </span>
      <span className="eventsworkshops3d-model-your-l-e-d-project-in-fusion360-text1 eventblockh1">
        {props.text1}
      </span>
      <span className="eventsworkshops3d-model-your-l-e-d-project-in-fusion360-text2 eventblockh2">
        {props.text11}
      </span>
      <div className="eventblockgradient"></div>
    </div>
  )
}

Eventsworkshops3DModelYourLEDProjectInFusion360.defaultProps = {
  text: 'Beginner workshop -',
  text1: '3D model your LED project in Fusion360',
  rootClassName: '',
  text11: 'at xHain hack & makespace',
}

Eventsworkshops3DModelYourLEDProjectInFusion360.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
}

export default Eventsworkshops3DModelYourLEDProjectInFusion360
