import React from 'react'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className={`header-container ${props.rootClassName} `}>
      <div className="header-container1">
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="header-image"
        />
        <div className="header-container2">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="header-image1"
          />
        </div>
        <div className="header-container3">
          <a
            href={props.link_text}
            target="_blank"
            rel="noreferrer noopener"
            className="headermenulink"
          >
            {props.link1}
          </a>
          <a
            href={props.link_text1}
            target="_blank"
            rel="noreferrer noopener"
            className="header-link1 headermenulink"
          >
            {props.link2}
          </a>
          <a
            href={props.link_text12}
            target="_blank"
            rel="noreferrer noopener"
            className="header-link2 headermenulink"
          >
            {props.link3}
          </a>
          <a
            href={props.link_text11}
            target="_blank"
            rel="noreferrer noopener"
            className="header-link3 headermenulink"
          >
            {props.link4}
          </a>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  link1: 'About',
  link_text12: 'https://example.com',
  image_src2: '/playground_assets/menu.svg',
  link4: 'Get help',
  link_text11: 'https://example.com',
  image_src1: '/playground_assets/logo1.svg',
  link_text1: 'https://example.com',
  rootClassName: '',
  link3: 'Workshops',
  image_alt2: 'image',
  link_text: 'https://example.com',
  link2: 'Products',
  image_alt1: 'image',
}

Header.propTypes = {
  link1: PropTypes.string,
  link_text12: PropTypes.string,
  image_src2: PropTypes.string,
  link4: PropTypes.string,
  link_text11: PropTypes.string,
  image_src1: PropTypes.string,
  link_text1: PropTypes.string,
  rootClassName: PropTypes.string,
  link3: PropTypes.string,
  image_alt2: PropTypes.string,
  link_text: PropTypes.string,
  link2: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Header
