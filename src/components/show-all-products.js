import React from 'react'

import PropTypes from 'prop-types'

import './show-all-products.css'

const ShowAllProducts = (props) => {
  return (
    <div className={`show-all-products-container ${props.rootClassName} `}>
      <span className="show-all-products-text">{props.heading}</span>
      <span className="show-all-products-text1">{props.text}</span>
    </div>
  )
}

ShowAllProducts.defaultProps = {
  rootClassName: '',
  text: 'Explore all the LED products by glowingkitty.',
  heading: 'There is more!',
}

ShowAllProducts.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default ShowAllProducts
