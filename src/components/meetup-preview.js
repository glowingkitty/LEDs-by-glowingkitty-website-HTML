import React from 'react'

import PropTypes from 'prop-types'

import './meetup-preview.css'

const MeetupPreview = (props) => {
  return (
    <div className={`meetup-preview-container ${props.rootClassName} `}></div>
  )
}

MeetupPreview.defaultProps = {
  rootClassName: '',
}

MeetupPreview.propTypes = {
  rootClassName: PropTypes.string,
}

export default MeetupPreview
