import React from 'react'

import PropTypes from 'prop-types'

import MainCTAButton from './main-c-t-a-button'
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
          <a
            href="https://shop.glowingkitty.com/products/ask-a-mentor"
            target="_blank"
            rel="noreferrer noopener"
            className="need-help-with-a-project-link"
          >
            <MainCTAButton
              header_cta="Book an appointment"
              rootClassName="main-c-t-a-button-root-class-name1"
              className="need-help-with-a-project-component"
            ></MainCTAButton>
          </a>
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
          <a
            href="http://discord.gg/Gq8xmN9tnD"
            target="_blank"
            rel="noreferrer noopener"
            className="need-help-with-a-project-link1"
          >
            <MainCTAButton
              header_cta="Join us on Discord"
              rootClassName="main-c-t-a-button-root-class-name2"
              className="need-help-with-a-project-component1"
            ></MainCTAButton>
          </a>
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
  option2: 'Option 2:',
  image_alt: 'image',
  image_src: '/playground_assets/twopeople.svg',
  image_alt1: 'image',
  option1_details: 'Get 1 to 1 help from glowingkitty!',
  option1: 'Option 1:',
}

NeedHelpWithAProject.propTypes = {
  heading: PropTypes.string,
  option2_details: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  option2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  option1_details: PropTypes.string,
  option1: PropTypes.string,
}

export default NeedHelpWithAProject
