import React from 'react'

import PropTypes from 'prop-types'

import './footer-social.css'

const FooterSocial = (props) => {
  return (
    <div className={`footer-social-container ${props.rootClassName} `}>
      <span className="footer-social-text">{props.text}</span>
      <div className="footer-social-container1">
        <a
          href="https://patreon.glowingkitty.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-social-link"
        >
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="footer-social-image socialmedia_icon"
          />
        </a>
        <a
          href="https://discord.glowingkitty.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-social-link1"
        >
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="footer-social-image1 socialmedia_icon"
          />
        </a>
        <a
          href="https://instagram.glowingkitty.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-social-link2"
        >
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="footer-social-image2 socialmedia_icon"
          />
        </a>
        <a
          href="https://blog.glowingkitty.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-social-link3"
        >
          <img
            alt={props.image_alt3}
            src={props.image_src3}
            className="footer-social-image3 socialmedia_icon"
          />
        </a>
        <a
          href="https://git.glowingkitty.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-social-link4"
        >
          <img
            alt={props.image_alt4}
            src={props.image_src4}
            className="footer-social-image4 socialmedia_icon"
          />
        </a>
      </div>
    </div>
  )
}

FooterSocial.defaultProps = {
  image_alt: 'image',
  text: 'Stay updated',
  rootClassName: '',
  image_alt4: 'image',
  image_src3: '/playground_assets/social_medium.svg',
  image_src2: '/playground_assets/social_instagram.svg',
  image_src1: '/playground_assets/social_discord.svg',
  image_alt3: 'image',
  image_alt1: 'image',
  image_src4: '/playground_assets/social_github.svg',
  image_alt2: 'image',
  image_src: '/playground_assets/social_patreon.svg',
}

FooterSocial.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src3: PropTypes.string,
  image_src2: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src: PropTypes.string,
}

export default FooterSocial
