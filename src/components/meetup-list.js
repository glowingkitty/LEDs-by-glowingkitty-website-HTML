import React from 'react'

import PropTypes from 'prop-types'

import MeetupPreview from './meetup-preview'
import './meetup-list.css'

const MeetupList = (props) => {
  return (
    <div className={`meetup-list-container ${props.rootClassName} `}>
      <div className="meetup-list-container1">
        <span className="meetup-list-text">{props.text}</span>
      </div>
      <div className="meetup-list-container2">
        <MeetupPreview
          rootClassName="meetup-preview-root-class-name4"
          className=""
        ></MeetupPreview>
        <MeetupPreview
          rootClassName="meetup-preview-root-class-name5"
          className=""
        ></MeetupPreview>
        <MeetupPreview
          rootClassName="meetup-preview-root-class-name6"
          className=""
        ></MeetupPreview>
      </div>
    </div>
  )
}

MeetupList.defaultProps = {
  text: 'Join an upcoming event:',
  rootClassName: '',
}

MeetupList.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MeetupList
