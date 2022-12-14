import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import StartpageHeaderImage from '../components/startpage-header-image'
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
        <title>LEDs by glowingkitty - website</title>
        <meta property="og:title" content="LEDs by glowingkitty - website" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <StartpageHeaderImage rootClassName="startpage-header-image-root-class-name"></StartpageHeaderImage>
      <TopicSeparator
        text="Step 1: Build an LED lamp, with a DIY kit!"
        rootClassName="topic-separator-root-class-name1"
      ></TopicSeparator>
      <ProductPreviewImageBackground rootClassName="product-preview-image-background-root-class-name"></ProductPreviewImageBackground>
      <div className="home-container01">
        <div className="home-container02">
          <span className="home-text">GlowLight</span>
          <span className="home-text1">What a beautiful desk lamp!</span>
          <div className="home-container03">
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
              className="home-link product_promoteblock_link"
            >
              Show prices
            </a>
          </div>
        </div>
      </div>
      <div className="home-container04">
        <div className="home-container05">
          <span className="home-text2">GlowTube</span>
          <span className="home-text3">
            Looks great alone, as twins even better!
          </span>
          <div className="home-container06">
            <Link to="/glow-tube" className="home-navlink1">
              Learn more
            </Link>
            <a
              href="https://shop.glowingkitty.com/products/glowtube"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              Show prices
            </a>
          </div>
        </div>
      </div>
      <TopicSeparator
        text="Step 2: Build your own LED projects!"
        rootClassName="topic-separator-root-class-name"
      ></TopicSeparator>
      <div className="home-container07">
        <div className="home-container08"></div>
        <div className="home-container09">
          <MeetupList rootClassName="meetup-list-root-class-name"></MeetupList>
          <ProductPreviewImageFront rootClassName="product-preview-image-front-root-class-name"></ProductPreviewImageFront>
        </div>
      </div>
      <NeedHelpWithAProject rootClassName="need-help-with-a-project-root-class-name"></NeedHelpWithAProject>
      <ShowAllProducts rootClassName="show-all-products-root-class-name"></ShowAllProducts>
      <FooterSocial rootClassName="footer-social-root-class-name"></FooterSocial>
      <FooterWebLinks rootClassName="footer-web-links-root-class-name"></FooterWebLinks>
    </div>
  )
}

export default Home
