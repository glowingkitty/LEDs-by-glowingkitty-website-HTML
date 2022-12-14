import React from 'react'

import PropTypes from 'prop-types'

import './meetup-list.css'

const MeetupList = (props) => {
  return (
    <div className={`meetup-list-container ${props.rootClassName} `}>
      <div className="meetup-list-container1">
        <span className="meetup-list-text">{props.headline}</span>
        <span className="meetup-list-text1">{props.text}</span>
        <span className="meetup-list-text2">{props.text1}</span>
      </div>
      <button className="button">{props.button}</button>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="meetup-list-image"
      />
    </div>
  )
}

MeetupList.defaultProps = {
  text1: 'From total beginner to advanced.',
  text: 'Workshops, talks and more.',
  button: 'Join on Meetup',
  headline: 'Join our events',
  image_alt: 'image',
  rootClassName: '',
  image_src: '/playground_assets/meetup.svg',
}

MeetupList.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  headline: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default MeetupList
