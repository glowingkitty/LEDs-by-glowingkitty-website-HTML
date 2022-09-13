import React from 'react'

import PropTypes from 'prop-types'

import './need-help-with-a-project.css'

const NeedHelpWithAProject = (props) => {
  return (
    <div
      className={`need-help-with-a-project-container ${props.rootClassName} `}
    >
      <span className="need-help-with-a-project-text">{props.heading}</span>
      <div className="need-help-with-a-project-container1">
        <div className="need-help-with-a-project-container2">
          <span className="need-help-with-a-project-text1">
            {props.option1}
          </span>
          <span className="need-help-with-a-project-text2">
            {props.option1_details}
          </span>
        </div>
        <div className="need-help-with-a-project-container3">
          <span className="need-help-with-a-project-text3">
            {props.option2}
          </span>
          <span className="need-help-with-a-project-text4">
            {props.option2_details}
          </span>
        </div>
      </div>
    </div>
  )
}

NeedHelpWithAProject.defaultProps = {
  heading: 'Need help with an LED project?',
  option2_details: 'Join our community & ask around!',
  rootClassName: '',
  option2: 'Option 2:',
  option1_details: 'Get 1 to 1 help from glowingkitty!',
  option1: 'Option 1:',
}

NeedHelpWithAProject.propTypes = {
  heading: PropTypes.string,
  option2_details: PropTypes.string,
  rootClassName: PropTypes.string,
  option2: PropTypes.string,
  option1_details: PropTypes.string,
  option1: PropTypes.string,
}

export default NeedHelpWithAProject
