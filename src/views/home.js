import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import TopicSeparator from '../components/topic-separator'
import ProductPreviewImageBackground from '../components/product-preview-image-background'
import MeetupList from '../components/meetup-list'
import ProductPreviewImageFront from '../components/product-preview-image-front'
import NeedHelpWithAProject from '../components/need-help-with-a-project'
import ShowAllProducts from '../components/show-all-products'
import FooterSocial from '../components/footer-social'
import FooterWebLinks from '../components/footer-web-links'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>LEDs by glowingkitty</title>
        <meta property="og:title" content="LEDs by glowingkitty" />
      </Helmet>
      <Header></Header>
      <div className="home-container1">
        <h1 className="home-text">
          Learn industrial design the easy &amp; fun way, with LEDs!
        </h1>
        <a href="#explore" className="home-link button">
          Explore products
        </a>
      </div>
      <div id="explore" className="home-topic-section"></div>
      <TopicSeparator
        text="Step 1: Build an LED lamp, with a DIY kit!"
        rootClassName="topic-separator-root-class-name1"
      ></TopicSeparator>
      <ProductPreviewImageBackground rootClassName="product-preview-image-background-root-class-name"></ProductPreviewImageBackground>
      <div className="home-container2">
        <div className="home-container3">
          <span className="home-text1">GlowLight</span>
          <span className="home-text2">What a beautiful desk lamp!</span>
          <div className="home-container4">
            <Link
              to="/glow-light"
              className="home-navlink product_promoteblock_link"
            >
              Learn more
            </Link>
            <a
              href="https://shop.glowingkitty.com/products/glowlight"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1 product_promoteblock_link"
            >
              Show prices
            </a>
          </div>
        </div>
      </div>
      <div className="home-container5">
        <div className="home-container6">
          <span className="home-text3">GlowTube</span>
          <span className="home-text4">
            Looks great alone, as twins even better!
          </span>
          <div className="home-container7">
            <Link to="/glow-tube" className="home-navlink1">
              Learn more
            </Link>
            <a
              href="https://shop.glowingkitty.com/products/glowtube"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              Show prices
            </a>
          </div>
        </div>
      </div>
      <div id="diy" className="home-topic-section1"></div>
      <TopicSeparator
        text="Step 2: Build your own LED projects!"
        rootClassName="topic-separator-root-class-name"
      ></TopicSeparator>
      <MeetupList rootClassName="meetup-list-root-class-name"></MeetupList>
      <ProductPreviewImageFront rootClassName="product-preview-image-front-root-class-name"></ProductPreviewImageFront>
      <div id="help" className="home-topic-section2"></div>
      <NeedHelpWithAProject rootClassName="need-help-with-a-project-root-class-name"></NeedHelpWithAProject>
      <ShowAllProducts rootClassName="show-all-products-root-class-name"></ShowAllProducts>
      <FooterSocial rootClassName="footer-social-root-class-name"></FooterSocial>
      <FooterWebLinks rootClassName="footer-web-links-root-class-name"></FooterWebLinks>
    </div>
  )
}

export default Home
