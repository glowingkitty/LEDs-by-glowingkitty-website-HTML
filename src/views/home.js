import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import StartpageHeaderImage from '../components/startpage-header-image'
import TopicSeparator from '../components/topic-separator'
import ProductPreviewImageBackground from '../components/product-preview-image-background'
import MeetupList from '../components/meetup-list'
import ProductPreviewImageFront from '../components/product-preview-image-front'
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
      <TopicSeparator rootClassName="topic-separator-root-class-name1"></TopicSeparator>
      <ProductPreviewImageBackground rootClassName="product-preview-image-background-root-class-name"></ProductPreviewImageBackground>
      <ProductPreviewImageBackground
        description="What a beautiful desk lamp!"
        productname="GlowLight"
        rootClassName="product-preview-image-background-root-class-name1"
      ></ProductPreviewImageBackground>
      <ProductPreviewImageBackground
        description="Looks great alone, as twins even better!"
        productname="GlowTube"
        rootClassName="product-preview-image-background-root-class-name2"
      ></ProductPreviewImageBackground>
      <TopicSeparator
        text="Or build your own projects!"
        rootClassName="topic-separator-root-class-name"
      ></TopicSeparator>
      <MeetupList rootClassName="meetup-list-root-class-name"></MeetupList>
      <ProductPreviewImageFront rootClassName="product-preview-image-front-root-class-name"></ProductPreviewImageFront>
    </div>
  )
}

export default Home
