import React from 'react'

import PropTypes from 'prop-types'

import './productbannerglowlight.css'

const Productbannerglowlight = (props) => {
  return (
    <div className={`productbannerglowlight-container ${props.rootClassName} `}>
      <div className="productbannerglowlight-container1">
        <span className="productbannerglowlight-text">{props.productname}</span>
        <span className="productbannerglowlight-text1">
          {props.description}
        </span>
        <div className="productbannerglowlight-container2">
          <a
            href="https://shop.glowingkitty.com/products/glowlight"
            target="_blank"
            rel="noreferrer noopener"
            className="productbannerglowlight-link product_promoteblock_link"
          >
            {props.cta1}
          </a>
          <a
            href="https://shop.glowingkitty.com/products/glowtower"
            target="_blank"
            rel="noreferrer noopener"
            className="productbannerglowlight-link1 product_promoteblock_link"
          >
            {props.cta2}
          </a>
        </div>
      </div>
    </div>
  )
}

Productbannerglowlight.defaultProps = {
  productname: 'GlowLight',
  description: 'What a beautiful desk lamp!',
  rootClassName: '',
  cta1: 'Learn more',
  cta2: 'Show prices',
}

Productbannerglowlight.propTypes = {
  productname: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  cta1: PropTypes.string,
  cta2: PropTypes.string,
}

export default Productbannerglowlight
