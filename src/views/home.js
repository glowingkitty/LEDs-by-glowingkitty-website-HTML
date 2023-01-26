import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import TopicSeparator from '../components/topic-separator'
import Productbannerglowtower from '../components/productbannerglowtower'
import Productbannerglowlight from '../components/productbannerglowlight'
import MeetupList from '../components/meetup-list'
import Productbannerglowcore from '../components/productbannerglowcore'
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
      <Productbannerglowtower rootClassName="productbannerglowtower-root-class-name"></Productbannerglowtower>
      <Productbannerglowlight rootClassName="productbannerglowlight-root-class-name"></Productbannerglowlight>
      <div className="home-container2">
        <div className="home-container3">
          <span className="home-text1">GlowTube</span>
          <span className="home-text2">
            Looks great alone, as twins even better!
          </span>
          <div className="home-container4">
            <Link to="/glow-tube" className="home-navlink">
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
      <div id="diy" className="home-topic-section1"></div>
      <TopicSeparator
        text="Step 2: Build your own LED projects!"
        rootClassName="topic-separator-root-class-name"
      ></TopicSeparator>
      <MeetupList rootClassName="meetup-list-root-class-name"></MeetupList>
      <Productbannerglowcore rootClassName="productbannerglowcore-root-class-name"></Productbannerglowcore>
      <div id="help" className="home-topic-section2"></div>
      <NeedHelpWithAProject rootClassName="need-help-with-a-project-root-class-name"></NeedHelpWithAProject>
      <ShowAllProducts rootClassName="show-all-products-root-class-name"></ShowAllProducts>
      <FooterSocial rootClassName="footer-social-root-class-name"></FooterSocial>
      <FooterWebLinks rootClassName="footer-web-links-root-class-name"></FooterWebLinks>
    </div>
  )
}

export default Home
