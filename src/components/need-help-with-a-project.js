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
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="need-help-with-a-project-image"
          />
          <button className="button">{props.button_option_1}</button>
        </div>
        <div className="need-help-with-a-project-container3">
          <span className="need-help-with-a-project-text3">
            {props.option2}
          </span>
          <span className="need-help-with-a-project-text4">
            {props.option2_details}
          </span>
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="need-help-with-a-project-image1"
          />
          <button className="button">{props.button_option_2}</button>
        </div>
      </div>
    </div>
  )
}

NeedHelpWithAProject.defaultProps = {
  heading: 'Need help with an LED project?',
  option2_details: 'Join our community & ask around!',
  rootClassName: '',
  image_src1: '/playground_assets/discord.svg',
  button_option_2: 'Join community',
  option2: 'Option 2:',
  image_alt: 'image',
  image_src: '/playground_assets/twopeople.svg',
  image_alt1: 'image',
  option1_details: 'Get 1 to 1 help from glowingkitty!',
  option1: 'Option 1:',
  button_option_1: 'Book appointment',
}

NeedHelpWithAProject.propTypes = {
  heading: PropTypes.string,
  option2_details: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  button_option_2: PropTypes.string,
  option2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  option1_details: PropTypes.string,
  option1: PropTypes.string,
  button_option_1: PropTypes.string,
}

export default NeedHelpWithAProject
