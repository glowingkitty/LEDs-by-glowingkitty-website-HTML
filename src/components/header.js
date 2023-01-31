import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className="header-container">
      <header data-thq="thq-navbar" className="header-navbar-interactive">
        <Link to="/" className="header-navlink">
          <img
            alt={props.Logo_alt}
            src={props.Logo_src}
            className="header-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="header-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="header-nav"
          >
            <Link to="/products" className="header-navlink1 headermenulink">
              {props.text}
            </Link>
            <a
              href={props.link_text}
              target="_blank"
              rel="noreferrer noopener"
              className="header-link headermenulink"
            >
              {props.text1}
            </a>
            <a href="#help" className="header-link1 headermenulink">
              {props.text2}
            </a>
            <a
              href={props.link_text2}
              target="_blank"
              rel="noreferrer noopener"
              className="header-link2 headermenulink"
            >
              {props.text3}
            </a>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="header-burger-menu">
          <svg viewBox="0 0 1024 1024" className="header-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="header-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="header-nav1"
          >
            <div className="header-container1">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="header-image"
              />
              <div data-thq="thq-close-menu" className="header-menu-close">
                <svg viewBox="0 0 1024 1024" className="header-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="header-nav2"
            >
              <Link
                to="/products"
                className="header-link3 headermenulink mobilemenuheader"
              >
                {props.text8}
              </Link>
              <a
                href={props.link_text3}
                target="_blank"
                rel="noreferrer noopener"
                className="header-link4 headermenulink mobilemenuheader"
              >
                {props.text11}
              </a>
              <a
                href="#help"
                className="header-link5 headermenulink mobilemenuheader"
              >
                {props.text22}
              </a>
              <a
                href={props.link_text21}
                target="_blank"
                rel="noreferrer noopener"
                className="header-link6 headermenulink mobilemenuheader"
              >
                {props.text31}
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

Header.defaultProps = {
  Logo_src: '/playground_assets/logo1.svg',
  link_text21: 'https://blog.glowingkitty.com',
  link_text2: 'https://blog.glowingkitty.com',
  text3: 'Blog',
  Logo_alt: 'logo',
  text8: 'Products',
  image_src: '/playground_assets/logo1.svg',
  text1: 'Workshops',
  text: 'Products',
  link_text1: 'https://discord.glowingkitty.com',
  link_text: 'https://workshops.glowingkitty.com',
  image_alt: 'image',
  link_text3: 'https://workshops.glowingkitty.com',
  text2: 'Get help',
  text11: 'Workshops',
  text31: 'Blog',
  text22: 'Get help',
}

Header.propTypes = {
  Logo_src: PropTypes.string,
  link_text21: PropTypes.string,
  link_text2: PropTypes.string,
  text3: PropTypes.string,
  Logo_alt: PropTypes.string,
  text8: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  link_text1: PropTypes.string,
  link_text: PropTypes.string,
  image_alt: PropTypes.string,
  link_text3: PropTypes.string,
  text2: PropTypes.string,
  text11: PropTypes.string,
  text31: PropTypes.string,
  text22: PropTypes.string,
}

export default Header
