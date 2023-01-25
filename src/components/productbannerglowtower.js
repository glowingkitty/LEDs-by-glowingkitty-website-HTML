import React from 'react'

import PropTypes from 'prop-types'

import './productbannerglowtower.css'

const Productbannerglowtower = (props) => {
  return (
    <div className={`productbannerglowtower-container ${props.rootClassName} `}>
      <div className="productbannerglowtower-container1">
        <span className="productbannerglowtower-text">{props.productname}</span>
        <span className="productbannerglowtower-text1">
          {props.description}
        </span>
        <div className="productbannerglowtower-container2">
          <a
            href="https://shop.glowingkitty.com/products/glowtower"
            target="_blank"
            rel="noreferrer noopener"
            className="productbannerglowtower-link product_promoteblock_link"
          >
            {props.cta1}
          </a>
          <a
            href="https://shop.glowingkitty.com/products/glowtower"
            target="_blank"
            rel="noreferrer noopener"
            className="productbannerglowtower-link1 product_promoteblock_link"
          >
            {props.cta2}
          </a>
        </div>
      </div>
    </div>
  )
}

Productbannerglowtower.defaultProps = {
  rootClassName: '',
  productname: 'GlowTower',
  cta1: 'Learn more',
  cta2: 'Show prices',
  description: 'Set the mood for your whole room!',
}

Productbannerglowtower.propTypes = {
  rootClassName: PropTypes.string,
  productname: PropTypes.string,
  cta1: PropTypes.string,
  cta2: PropTypes.string,
  description: PropTypes.string,
}

export default Productbannerglowtower
