import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer-web-links.css'

const FooterWebLinks = (props) => {
  return (
    <div className={`footer-web-links-container ${props.rootClassName} `}>
      <a
        href="https://shop.glowingkitty.com/pages/imprint"
        target="_blank"
        rel="noreferrer noopener"
        className="footer-web-links-link"
      >
        {props.text}
      </a>
      <a
        href="https://shop.glowingkitty.com/policies/privacy-policy"
        target="_blank"
        rel="noreferrer noopener"
        className="footer-web-links-link1"
      >
        {props.text1}
      </a>
      <Link to="/about" className="footer-web-links-navlink">
        {props.text11}
      </Link>
    </div>
  )
}

FooterWebLinks.defaultProps = {
  text1: 'Privacy',
  rootClassName: '',
  link_text11: 'https://example.com',
  link_text1: 'https://example.com',
  link_text: 'https://example.com',
  text: 'Imprint',
  text11: 'About',
}

FooterWebLinks.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  link_text11: PropTypes.string,
  link_text1: PropTypes.string,
  link_text: PropTypes.string,
  text: PropTypes.string,
  text11: PropTypes.string,
}

export default FooterWebLinks
