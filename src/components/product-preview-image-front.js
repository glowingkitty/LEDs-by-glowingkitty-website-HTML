import React from 'react'

import PropTypes from 'prop-types'

import './product-preview-image-front.css'

const ProductPreviewImageFront = (props) => {
  return (
    <div
      className={`product-preview-image-front-container ${props.rootClassName} `}
    >
      <div className="product-preview-image-front-container1">
        <span className="product-preview-image-front-text">
          {props.productname}
        </span>
        <span className="product-preview-image-front-text1">
          {props.description}
        </span>
        <div className="product-preview-image-front-container2">
          <a
            href="https://shop.glowingkitty.com/products/glowcore"
            target="_blank"
            rel="noreferrer noopener"
            className="product-preview-image-front-link product_promoteblock_link"
          >
            {props.cta1}
          </a>
          <a
            href="http://shop.glowingkitty.com/products/glowcore"
            target="_blank"
            rel="noreferrer noopener"
            className="product-preview-image-front-link1 product_promoteblock_link"
          >
            {props.cta2}
          </a>
        </div>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="product-preview-image-front-image"
      />
    </div>
  )
}

ProductPreviewImageFront.defaultProps = {
  productname: 'GlowCore',
  rootClassName: '',
  description: 'The easiest way to control LED strips!',
  image_alt: 'image',
  cta2: 'Show prices',
  image_src: '/playground_assets/glowcore-500h.png',
  cta1: 'Learn more',
}

ProductPreviewImageFront.propTypes = {
  productname: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  cta2: PropTypes.string,
  image_src: PropTypes.string,
  cta1: PropTypes.string,
}

export default ProductPreviewImageFront
