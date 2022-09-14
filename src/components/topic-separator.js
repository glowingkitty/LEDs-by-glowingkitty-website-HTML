import React from 'react'

import PropTypes from 'prop-types'

import './topic-separator.css'

const TopicSeparator = (props) => {
  return (
    <div className={`topic-separator-container ${props.rootClassName} `}>
      <span className="topic-separator-text">{props.text}</span>
    </div>
  )
}

TopicSeparator.defaultProps = {
  rootClassName: '',
  text: 'Learn how to build an LED lamp: with a DIY kit!',
}

TopicSeparator.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default TopicSeparator
