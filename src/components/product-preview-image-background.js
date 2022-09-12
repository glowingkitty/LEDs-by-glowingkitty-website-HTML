import React from 'react'

import PropTypes from 'prop-types'

import './product-preview-image-background.css'

const ProductPreviewImageBackground = (props) => {
  return (
    <div
      className={`product-preview-image-background-container ${props.rootClassName} `}
    >
      <div className="product-preview-image-background-container1">
        <span className="product-preview-image-background-text">
          {props.productname}
        </span>
        <span className="product-preview-image-background-text1">
          {props.description}
        </span>
        <div className="product-preview-image-background-container2">
          <span className="product-preview-image-background-text2">
            {props.cta1}
          </span>
          <span className="product-preview-image-background-text3">
            {props.cta2}
          </span>
        </div>
      </div>
    </div>
  )
}

ProductPreviewImageBackground.defaultProps = {
  rootClassName: '',
  productname: 'GlowTower',
  cta1: 'Learn more',
  cta2: 'Buy',
  description: 'Set the mood for your whole room!',
}

ProductPreviewImageBackground.propTypes = {
  rootClassName: PropTypes.string,
  productname: PropTypes.string,
  cta1: PropTypes.string,
  cta2: PropTypes.string,
  description: PropTypes.string,
}

export default ProductPreviewImageBackground
