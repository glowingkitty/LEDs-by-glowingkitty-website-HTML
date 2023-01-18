import React from 'react'

import PropTypes from 'prop-types'

import './eventsworkshops-learn-p-c-b-design-with-ki-cad.css'

const EventsworkshopsLearnPCBDesignWithKiCad = (props) => {
  return (
    <div
      className={`eventsworkshops-learn-p-c-b-design-with-ki-cad-container ${props.rootClassName} `}
    >
      <span className="eventsworkshops-learn-p-c-b-design-with-ki-cad-text">
        {props.text}
      </span>
      <span className="eventsworkshops-learn-p-c-b-design-with-ki-cad-text1">
        {props.text1}
      </span>
      <span className="eventsworkshops-learn-p-c-b-design-with-ki-cad-text2">
        {props.text11}
      </span>
    </div>
  )
}

EventsworkshopsLearnPCBDesignWithKiCad.defaultProps = {
  rootClassName: '',
  text: 'Beginner workshop -',
  text1: 'Learn PCB design with KiCad',
  text11: 'at xHain hack & makespace',
}

EventsworkshopsLearnPCBDesignWithKiCad.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
}

export default EventsworkshopsLearnPCBDesignWithKiCad
