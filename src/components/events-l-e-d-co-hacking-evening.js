import React from 'react'

import PropTypes from 'prop-types'

import './events-l-e-d-co-hacking-evening.css'

const EventsLEDCoHackingEvening = (props) => {
  return (
    <div
      className={`events-l-e-d-co-hacking-evening-container ${props.rootClassName} `}
    >
      <span className="events-l-e-d-co-hacking-evening-text">
        {props.text1}
      </span>
      <span className="events-l-e-d-co-hacking-evening-text1">
        {props.text11}
      </span>
    </div>
  )
}

EventsLEDCoHackingEvening.defaultProps = {
  rootClassName: '',
  text1: 'LED co-hacking evening',
  text11: 'at xHain hack & makespace',
}

EventsLEDCoHackingEvening.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
}

export default EventsLEDCoHackingEvening