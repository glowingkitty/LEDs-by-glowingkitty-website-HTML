import React from 'react'

import PropTypes from 'prop-types'

import './eventsworkshops-learn-p-c-b-design-with-ki-cad.css'

const EventsworkshopsLearnPCBDesignWithKiCad = (props) => {
  return (
    <div className="eventsworkshops-learn-p-c-b-design-with-ki-cad-container eventblockpreview">
      <span className="eventblockh1">{props.text}</span>
      <span className="eventblockh1">{props.text2}</span>
      <span className="eventblockh2">{props.text11}</span>
      <div className="eventblockgradient"></div>
    </div>
  )
}

EventsworkshopsLearnPCBDesignWithKiCad.defaultProps = {
  rootClassName: '',
  text11: 'at xHain hack & makespace',
  text: 'Beginner workshop -',
  text2: 'Learn PCB design with KiCad',
}

EventsworkshopsLearnPCBDesignWithKiCad.propTypes = {
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default EventsworkshopsLearnPCBDesignWithKiCad
