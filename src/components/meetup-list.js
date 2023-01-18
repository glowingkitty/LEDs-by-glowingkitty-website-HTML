import React from 'react'

import PropTypes from 'prop-types'

import EventsLEDCoHackingEvening from './events-l-e-d-co-hacking-evening'
import EventsworkshopsLearnPCBDesignWithKiCad from './eventsworkshops-learn-p-c-b-design-with-ki-cad'
import EventsworkshopsHowToPlanBuildYourOwnLEDProject from './eventsworkshops-how-to-plan-build-your-own-l-e-d-project'
import Eventsworkshops3DModelYourLEDProjectInFusion360 from './eventsworkshops3d-model-your-l-e-d-project-in-fusion360'
import EventsworkshopsDesignItAllIntoToFigma from './eventsworkshops-design-it-all-into-to-figma'
import './meetup-list.css'

const MeetupList = (props) => {
  return (
    <div className={`meetup-list-container ${props.rootClassName} `}>
      <div className="meetup-list-container01">
        <span className="meetup-list-text">{props.headline}</span>
        <span className="meetup-list-text1">{props.text}</span>
        <span className="meetup-list-text2">{props.text1}</span>
      </div>
      <div className="meetup-list-container02">
        <div className="meetup-list-container03">
          <EventsLEDCoHackingEvening
            rootClassName="events-l-e-d-co-hacking-evening-root-class-name"
            className=""
          ></EventsLEDCoHackingEvening>
        </div>
        <div className="meetup-list-container04">
          <EventsworkshopsLearnPCBDesignWithKiCad
            rootClassName="eventsworkshops-learn-p-c-b-design-with-ki-cad-root-class-name"
            className=""
          ></EventsworkshopsLearnPCBDesignWithKiCad>
        </div>
        <div className="meetup-list-container05">
          <EventsworkshopsHowToPlanBuildYourOwnLEDProject
            rootClassName="eventsworkshops-how-to-plan-build-your-own-l-e-d-project-root-class-name"
            className=""
          ></EventsworkshopsHowToPlanBuildYourOwnLEDProject>
        </div>
        <div className="meetup-list-container06">
          <Eventsworkshops3DModelYourLEDProjectInFusion360
            rootClassName="eventsworkshops3d-model-your-l-e-d-project-in-fusion360-root-class-name3"
            className=""
          ></Eventsworkshops3DModelYourLEDProjectInFusion360>
        </div>
        <div className="meetup-list-container07">
          <EventsworkshopsDesignItAllIntoToFigma
            rootClassName="eventsworkshops-design-it-all-into-to-figma-root-class-name"
            className=""
          ></EventsworkshopsDesignItAllIntoToFigma>
        </div>
        <div className="meetup-list-container08"></div>
        <div className="meetup-list-container09"></div>
      </div>
      <a
        href="https://events.glowingkitty.com"
        target="_blank"
        rel="noreferrer noopener"
        className="meetup-list-link button"
      >
        {props.button}
      </a>
    </div>
  )
}

MeetupList.defaultProps = {
  text1: 'From total beginner to advanced.',
  text: 'Workshops, talks and more.',
  button: 'Show upcoming events',
  headline: 'Join our events',
  rootClassName: '',
}

MeetupList.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  headline: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MeetupList
