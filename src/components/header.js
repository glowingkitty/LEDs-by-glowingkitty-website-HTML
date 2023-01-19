import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className={`header-container ${props.rootClassName} `}>
      <div className="header-container1">
        <img
          id="burgericon"
          alt={props.image_alt2}
          src={props.image_src2}
          className="header-image"
        />
        <div className="header-container2">
          <Link to="/" className="header-navlink">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="header-image1"
            />
          </Link>
        </div>
        <div className="header-container3">
          <Link to="/products" className="headermenulink">
            {props.link2}
          </Link>
          <a
            href="https://workshops.glowingkitty.com"
            target="_blank"
            rel="noreferrer noopener"
            className="headermenulink"
          >
            {props.link3}
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="headermenulink"
          >
            {props.link4}
          </a>
          <Link to="/about" className="header-navlink2 headermenulink">
            {props.link1}
          </Link>
          <a
            href="https://blog.glowingkitty.com"
            target="_blank"
            rel="noreferrer noopener"
            className="headermenulink"
          >
            {props.link21}
          </a>
        </div>
      </div>
      <div id="menu_mobile" className="mobilemenu header-container4">
        <Link to="/products" className="headermenulink mobile">
          {props.link22}
        </Link>
        <a
          href="https://workshops.glowingkitty.com"
          target="_blank"
          rel="noreferrer noopener"
          className="headermenulink mobile"
        >
          {props.link31}
        </a>
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer noopener"
          className="headermenulink mobile"
        >
          {props.link42}
        </a>
        <Link to="/about" className="header-navlink4 headermenulink mobile">
          {props.link11}
        </Link>
        <a
          href="https://blog.glowingkitty.com"
          target="_blank"
          rel="noreferrer noopener"
          className="headermenulink mobile"
        >
          {props.link211}
        </a>
      </div>
    </div>
  )
}

Header.defaultProps = {
  link1: 'About',
  link11: 'About',
  link42: 'Get help',
  link41: 'https://example.com',
  image_src2: '/playground_assets/menu.svg',
  link211: 'Blog',
  link4: 'Get help',
  link_text11: 'https://example.com',
  image_src1: '/playground_assets/logo1.svg',
  link_text1: 'https://example.com',
  rootClassName: '',
  link21: 'Blog',
  link3: 'Workshops',
  link22: 'Products',
  image_alt2: 'image',
  link31: 'Workshops',
  link_text: 'https://example.com',
  link2: 'Products',
  image_alt1: 'image',
}

Header.propTypes = {
  link1: PropTypes.string,
  link11: PropTypes.string,
  link42: PropTypes.string,
  link41: PropTypes.string,
  image_src2: PropTypes.string,
  link211: PropTypes.string,
  link4: PropTypes.string,
  link_text11: PropTypes.string,
  image_src1: PropTypes.string,
  link_text1: PropTypes.string,
  rootClassName: PropTypes.string,
  link21: PropTypes.string,
  link3: PropTypes.string,
  link22: PropTypes.string,
  image_alt2: PropTypes.string,
  link31: PropTypes.string,
  link_text: PropTypes.string,
  link2: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Header
