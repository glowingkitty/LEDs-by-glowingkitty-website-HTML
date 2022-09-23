import React from 'react'

import PropTypes from 'prop-types'

import './footer-web-links.css'

const FooterWebLinks = (props) => {
  return (
    <div className={`footer-web-links-container ${props.rootClassName} `}>
      <a
        href={props.link_text}
        target="_blank"
        rel="noreferrer noopener"
        className="footer-web-links-link"
      >
        {props.text}
      </a>
      <a
        href={props.link_text1}
        target="_blank"
        rel="noreferrer noopener"
        className="footer-web-links-link1"
      >
        {props.text1}
      </a>
      <a
        href={props.link_text11}
        target="_blank"
        rel="noreferrer noopener"
        className="footer-web-links-link2"
      >
        {props.text11}
      </a>
    </div>
  )
}

FooterWebLinks.defaultProps = {
  text: 'Imprint',
  link_text: 'https://example.com',
  text1: 'Privacy',
  link_text1: 'https://example.com',
  text11: 'Support',
  link_text11: 'https://example.com',
  rootClassName: '',
}

FooterWebLinks.propTypes = {
  text: PropTypes.string,
  link_text: PropTypes.string,
  text1: PropTypes.string,
  link_text1: PropTypes.string,
  text11: PropTypes.string,
  link_text11: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FooterWebLinks
