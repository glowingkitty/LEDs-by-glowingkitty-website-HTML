import React from 'react'

import PropTypes from 'prop-types'

import './eventsworkshops-how-to-plan-build-your-own-l-e-d-project.css'

const EventsworkshopsHowToPlanBuildYourOwnLEDProject = (props) => {
  return (
    <div
      className={`eventsworkshops-how-to-plan-build-your-own-l-e-d-project-container ${props.rootClassName} `}
    >
      <span className="eventsworkshops-how-to-plan-build-your-own-l-e-d-project-text">
        {props.text}
      </span>
      <span className="eventsworkshops-how-to-plan-build-your-own-l-e-d-project-text1">
        {props.text1}
      </span>
      <span className="eventsworkshops-how-to-plan-build-your-own-l-e-d-project-text2">
        {props.text11}
      </span>
    </div>
  )
}

EventsworkshopsHowToPlanBuildYourOwnLEDProject.defaultProps = {
  text1: 'How to plan & build your own LED project',
  rootClassName: '',
  text: 'Beginner workshop -',
  text11: 'at xHain hack & makespace',
}

EventsworkshopsHowToPlanBuildYourOwnLEDProject.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text11: PropTypes.string,
}

export default EventsworkshopsHowToPlanBuildYourOwnLEDProject
