import React from 'react'

import PropTypes from 'prop-types'

import './need-help-with-a-project.css'

const NeedHelpWithAProject = (props) => {
  return (
    <div
      className={`need-help-with-a-project-container ${props.rootClassName} `}
    >
      <span className="need-help-with-a-project-text">{props.heading}</span>
    </div>
  )
}

NeedHelpWithAProject.defaultProps = {
  heading: 'Need help with an LED project?',
  rootClassName: '',
}

NeedHelpWithAProject.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NeedHelpWithAProject
