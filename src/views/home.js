import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

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
      <div className="home-container01">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <Link to="/" className="home-navlink">
            <img
              alt="logo"
              src="/playground_assets/logo1.svg"
              className="home-logo"
            />
          </Link>
          <div
            data-role="Nav"
            data-thq="thq-navbar-nav"
            className="home-desktop-menu"
          >
            <nav
              data-role="Nav"
              data-thq="thq-navbar-nav-links"
              className="home-nav"
            >
              <Link to="/products" className="home-navlink1 headermenulink">
                Products
              </Link>
              <a
                href="https://workshops.glowingkitty.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link headermenulink"
              >
                Workshops
              </a>
              <a
                href="https://discord.glowingkitty.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1 headermenulink"
              >
                Community
              </a>
              <a
                href="https://blog.glowingkitty.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2 headermenulink"
              >
                Blog
              </a>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-role="Nav"
              data-thq="thq-mobile-menu-nav"
              className="home-nav1"
            >
              <div className="home-container02">
                <img
                  alt="image"
                  src="/playground_assets/logo1.svg"
                  className="home-image"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-role="Nav"
                data-thq="thq-mobile-menu-nav-links"
                className="home-nav2"
              >
                <span className="headermenulink mobilemenuheader">
                  Products
                </span>
                <span className="home-text1 headermenulink mobilemenuheader">
                  Workshops
                </span>
                <span className="home-text2 headermenulink mobilemenuheader">
                  Community
                </span>
                <span className="home-text3 headermenulink mobilemenuheader">
                  Blog
                </span>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="home-container03">
        <h1 className="home-text4">
          Learn industrial design the easy &amp; fun way, with LEDs!
        </h1>
        <a href="#explore" className="home-link3 button">
          Explore products
        </a>
      </div>
      <div id="explore" className="home-topic-section"></div>
      <TopicSeparator
        text="Step 1: Build an LED lamp, with a DIY kit!"
        rootClassName="topic-separator-root-class-name1"
      ></TopicSeparator>
      <ProductPreviewImageBackground rootClassName="product-preview-image-background-root-class-name"></ProductPreviewImageBackground>
      <div className="home-container04">
        <div className="home-container05">
          <span className="home-text5">GlowLight</span>
          <span className="home-text6">What a beautiful desk lamp!</span>
          <div className="home-container06">
            <Link
              to="/glow-light"
              className="home-navlink2 product_promoteblock_link"
            >
              Learn more
            </Link>
            <a
              href="https://shop.glowingkitty.com/products/glowlight"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4 product_promoteblock_link"
            >
              Show prices
            </a>
          </div>
        </div>
      </div>
      <div className="home-container07">
        <div className="home-container08">
          <span className="home-text7">GlowTube</span>
          <span className="home-text8">
            Looks great alone, as twins even better!
          </span>
          <div className="home-container09">
            <Link to="/glow-tube" className="home-navlink3">
              Learn more
            </Link>
            <a
              href="https://shop.glowingkitty.com/products/glowtube"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5"
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
