import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import TopicSeparator from '../components/topic-separator'
import ProductPreviewImageBackground from '../components/product-preview-image-background'
import ProductPreviewImageFront from '../components/product-preview-image-front'
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
      <TopicSeparator
        text="Explore all products:"
        rootClassName="topic-separator-root-class-name2"
      ></TopicSeparator>
      <ProductPreviewImageBackground rootClassName="product-preview-image-background-root-class-name1"></ProductPreviewImageBackground>
      <div className="products-container1">
        <div className="products-container2">
          <span className="products-text">GlowLight</span>
          <span className="products-text1">What a beautiful desk lamp!</span>
          <div className="products-container3">
            <Link to="/glow-light" className="products-navlink">
              Learn more
            </Link>
            <a
              href="https://shop.glowingkitty.com/products/glowlight"
              target="_blank"
              rel="noreferrer noopener"
              className="products-link"
            >
              Buy
            </a>
          </div>
        </div>
      </div>
      <div className="products-container4">
        <div className="products-container5">
          <span className="products-text2">GlowTube</span>
          <span className="products-text3">
            Looks great alone, as twins even better!
          </span>
          <div className="products-container6">
            <Link to="/glow-tube" className="products-navlink1">
              Learn more
            </Link>
            <a
              href="https://shop.glowingkitty.com/products/glowtube"
              target="_blank"
              rel="noreferrer noopener"
              className="products-link1"
            >
              Buy
            </a>
          </div>
        </div>
      </div>
      <ProductPreviewImageFront rootClassName="product-preview-image-front-root-class-name1"></ProductPreviewImageFront>
    </div>
  )
}

export default Products
