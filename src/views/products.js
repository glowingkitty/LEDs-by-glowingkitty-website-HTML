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
        <title>Products - LEDs by glowingkitty</title>
        <meta property="og:title" content="Products - LEDs by glowingkitty" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <TopicSeparator
        text="Explore all products:"
        rootClassName="topic-separator-root-class-name2"
      ></TopicSeparator>
      <ProductPreviewImageBackground rootClassName="product-preview-image-background-root-class-name1"></ProductPreviewImageBackground>
      <div className="products-container01">
        <div className="products-container02">
          <span className="products-text">GlowLight</span>
          <span className="products-text1">What a beautiful desk lamp!</span>
          <div className="products-container03">
            <Link to="/glow-light" className="products-navlink">
              Learn more
            </Link>
            <a
              href="https://shop.glowingkitty.com/products/glowlight"
              target="_blank"
              rel="noreferrer noopener"
              className="products-link"
            >
              Show prices
            </a>
          </div>
        </div>
      </div>
      <div className="products-container04">
        <div className="products-container05">
          <span className="products-text2">GlowTube</span>
          <span className="products-text3">
            Looks great alone, as twins even better!
          </span>
          <div className="products-container06">
            <Link to="/glow-tube" className="products-navlink1">
              Learn more
            </Link>
            <a
              href="https://shop.glowingkitty.com/products/glowtube"
              target="_blank"
              rel="noreferrer noopener"
              className="products-link1"
            >
              Show prices
            </a>
          </div>
        </div>
      </div>
      <ProductPreviewImageFront rootClassName="product-preview-image-front-root-class-name1"></ProductPreviewImageFront>
      <div className="products-container07">
        <div className="products-container08">
          <span className="products-text4">MagiqWand</span>
          <span className="products-text5">
            Spread your magiq at the next festival!
          </span>
          <div className="products-container09">
            <a
              href="https://magiqwand.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="products-link2"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
