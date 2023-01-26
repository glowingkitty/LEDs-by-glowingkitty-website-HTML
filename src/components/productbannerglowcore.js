import React from 'react'

import PropTypes from 'prop-types'

import './productbannerglowcore.css'

const Productbannerglowcore = (props) => {
  return (
    <div className={`productbannerglowcore-container ${props.rootClassName} `}>
      <div className="productbannerglowcore-container1">
        <span className="productbannerglowcore-text">{props.productname}</span>
        <span className="productbannerglowcore-text1">{props.description}</span>
        <div className="productbannerglowcore-container2">
          <a
            href="https://shop.glowingkitty.com/products/glowcore"
            target="_blank"
            rel="noreferrer noopener"
            className="productbannerglowcore-link product_promoteblock_link"
          >
            {props.cta1}
          </a>
          <a
            href="http://shop.glowingkitty.com/products/glowcore"
            target="_blank"
            rel="noreferrer noopener"
            className="productbannerglowcore-link1 product_promoteblock_link"
          >
            {props.cta2}
          </a>
        </div>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="productbannerglowcore-image"
      />
    </div>
  )
}

Productbannerglowcore.defaultProps = {
  productname: 'GlowCore',
  rootClassName: '',
  description: 'The easiest way to control LED strips!',
  image_alt: 'image',
  cta2: 'Show prices',
  image_src: '/playground_assets/glowcore-1100h.png',
  cta1: 'Learn more',
}

Productbannerglowcore.propTypes = {
  productname: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  cta2: PropTypes.string,
  image_src: PropTypes.string,
  cta1: PropTypes.string,
}

export default Productbannerglowcore
