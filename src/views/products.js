import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './products.css'

const Products = (props) => {
  return (
    <div className="products-container">
      <Helmet>
        <title>Products - LEDs by glowingkitty - website</title>
        <meta
          property="og:title"
          content="Products - LEDs by glowingkitty - website"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
    </div>
  )
}

export default Products
