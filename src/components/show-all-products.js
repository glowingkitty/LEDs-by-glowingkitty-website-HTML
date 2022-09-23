import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import MainCTAButton from './main-c-t-a-button'
import './show-all-products.css'

const ShowAllProducts = (props) => {
  return (
    <div className={`show-all-products-container ${props.rootClassName} `}>
      <span className="show-all-products-text">{props.heading}</span>
      <span className="show-all-products-text1">{props.text}</span>
      <Link to="/products" className="show-all-products-navlink">
        <MainCTAButton
          header_cta="Show all products"
          rootClassName="main-c-t-a-button-root-class-name3"
          className="show-all-products-component"
        ></MainCTAButton>
      </Link>
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
