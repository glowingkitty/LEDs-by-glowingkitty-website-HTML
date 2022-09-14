import React from 'react'

import PropTypes from 'prop-types'

import './show-all-products.css'

const ShowAllProducts = (props) => {
  return (
    <div className={`show-all-products-container ${props.rootClassName} `}>
      <span className="show-all-products-text">{props.text}</span>
    </div>
  )
}

ShowAllProducts.defaultProps = {
  text: 'There is more to glow',
  rootClassName: '',
}

ShowAllProducts.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ShowAllProducts
