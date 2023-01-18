import React from 'react'

import PropTypes from 'prop-types'

import './eventsworkshops-design-it-all-into-to-figma.css'

const EventsworkshopsDesignItAllIntoToFigma = (props) => {
  return (
    <div
      className={`eventsworkshops-design-it-all-into-to-figma-container ${props.rootClassName} `}
    >
      <span className="eventsworkshops-design-it-all-into-to-figma-text">
        {props.text}
      </span>
      <span className="eventsworkshops-design-it-all-into-to-figma-text1">
        {props.text1}
      </span>
      <span className="eventsworkshops-design-it-all-into-to-figma-text2">
        {props.text11}
      </span>
    </div>
  )
}

EventsworkshopsDesignItAllIntoToFigma.defaultProps = {
  rootClassName: '',
  text: 'Beginner workshop -',
  text1: 'Design it all. Intro to Figma',
  text11: 'at xHain hack & makespace',
}

EventsworkshopsDesignItAllIntoToFigma.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
}

export default EventsworkshopsDesignItAllIntoToFigma
