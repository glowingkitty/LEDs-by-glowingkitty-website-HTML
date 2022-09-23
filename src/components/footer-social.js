import React from 'react'

import PropTypes from 'prop-types'

import './footer-social.css'

const FooterSocial = (props) => {
  return (
    <div className={`footer-social-container ${props.rootClassName} `}>
      <span className="footer-social-text">{props.text}</span>
      <div className="footer-social-container1">
        <a
          href="https://www.patreon.com/glowingkitty"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-social-link"
        >
          <img
            src={props.image_src}
            alt={props.image_alt}
            className="footer-social-image socialmedia_icon"
          />
        </a>
        <a
          href="https://discord.com/invite/Gq8xmN9tnD"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-social-link1"
        >
          <img
            src={props.image_src1}
            alt={props.image_alt1}
            className="footer-social-image1 socialmedia_icon"
          />
        </a>
        <a
          href="https://www.instagram.com/glowing_kitty/"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-social-link2"
        >
          <img
            src={props.image_src2}
            alt={props.image_alt2}
            className="footer-social-image2 socialmedia_icon"
          />
        </a>
        <a
          href="http://medium.com/@glowingkitty"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-social-link3"
        >
          <img
            src={props.image_src3}
            alt={props.image_alt3}
            className="footer-social-image3 socialmedia_icon"
          />
        </a>
        <a
          href="https://github.com/LEDs-by-glowingkitty"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-social-link4"
        >
          <img
            src={props.image_src4}
            alt={props.image_alt4}
            className="footer-social-image4 socialmedia_icon"
          />
        </a>
      </div>
    </div>
  )
}

FooterSocial.defaultProps = {
  text: 'Stay updated',
  rootClassName: '',
  image_src: '/playground_assets/social_patreon.svg',
  image_alt: 'image',
  image_src1: '/playground_assets/social_discord.svg',
  image_alt1: 'image',
  image_src2: '/playground_assets/social_instagram.svg',
  image_alt2: 'image',
  image_src3: '/playground_assets/social_medium.svg',
  image_alt3: 'image',
  image_src4: '/playground_assets/social_github.svg',
  image_alt4: 'image',
}

FooterSocial.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt4: PropTypes.string,
}

export default FooterSocial
