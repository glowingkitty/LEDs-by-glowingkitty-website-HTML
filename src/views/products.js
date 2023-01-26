import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import TopicSeparator from '../components/topic-separator'
import Productbannerglowtower from '../components/productbannerglowtower'
import Productbannerglowlight from '../components/productbannerglowlight'
import Productbannerglowcore from '../components/productbannerglowcore'
import './products.css'

const Products = (props) => {
  return (
    <div className="products-container">
      <Helmet>
        <title>Products - LEDs by glowingkitty</title>
        <meta property="og:title" content="Products - LEDs by glowingkitty" />
      </Helmet>
      <Header></Header>
      <TopicSeparator
        text="Explore all products:"
        rootClassName="topic-separator-root-class-name2"
      ></TopicSeparator>
      <Productbannerglowtower rootClassName="productbannerglowtower-root-class-name1"></Productbannerglowtower>
      <Productbannerglowlight rootClassName="productbannerglowlight-root-class-name1"></Productbannerglowlight>
      <Productbannerglowcore rootClassName="productbannerglowcore-root-class-name1"></Productbannerglowcore>
    </div>
  )
}

export default Products
