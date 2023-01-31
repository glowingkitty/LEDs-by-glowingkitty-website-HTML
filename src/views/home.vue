<template>
  <div class="home-container">
    <app-header></app-header>
    <div class="home-container1">
      <h1 class="home-text">
        Learn industrial design the easy &amp; fun way, with LEDs!
      </h1>
      <a href="#explore" class="home-link button">Explore products</a>
    </div>
    <div id="explore" class="home-topic-section"></div>
    <topic-separator
      text="Step 1: Build an LED lamp, with a DIY kit!"
      rootClassName="topic-separator-root-class-name1"
    ></topic-separator>
    <app-productbannerglowtower
      rootClassName="productbannerglowtower-root-class-name"
    ></app-productbannerglowtower>
    <app-productbannerglowlight
      rootClassName="productbannerglowlight-root-class-name"
    ></app-productbannerglowlight>
    <div class="home-container2">
      <div class="home-container3">
        <span class="home-text1">GlowTube</span>
        <span class="home-text2">Looks great alone, as twins even better!</span>
        <div class="home-container4">
          <router-link to="/glow-tube" class="home-navlink">
            Learn more
          </router-link>
          <a
            href="https://shop.glowingkitty.com/products/glowtube"
            target="_blank"
            rel="noreferrer noopener"
            class="home-link1"
          >
            Show prices
          </a>
        </div>
      </div>
    </div>
    <div id="diy" class="home-topic-section1"></div>
    <topic-separator
      text="Step 2: Build your own LED projects!"
      rootClassName="topic-separator-root-class-name"
    ></topic-separator>
    <meetup-list rootClassName="meetup-list-root-class-name"></meetup-list>
    <app-productbannerglowcore
      rootClassName="productbannerglowcore-root-class-name"
    ></app-productbannerglowcore>
    <need-help-with-a-project
      rootClassName="need-help-with-a-project-root-class-name"
    ></need-help-with-a-project>
    <show-all-products
      rootClassName="show-all-products-root-class-name"
    ></show-all-products>
    <footer-social rootClassName="footer-social-root-class-name"></footer-social>
    <footer-web-links
      rootClassName="footer-web-links-root-class-name"
    ></footer-web-links>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import TopicSeparator from '../components/topic-separator'
import AppProductbannerglowtower from '../components/productbannerglowtower'
import AppProductbannerglowlight from '../components/productbannerglowlight'
import MeetupList from '../components/meetup-list'
import AppProductbannerglowcore from '../components/productbannerglowcore'
import NeedHelpWithAProject from '../components/need-help-with-a-project'
import ShowAllProducts from '../components/show-all-products'
import FooterSocial from '../components/footer-social'
import FooterWebLinks from '../components/footer-web-links'

export default {
  name: 'Home',
  components: {
    AppHeader,
    TopicSeparator,
    AppProductbannerglowtower,
    AppProductbannerglowlight,
    MeetupList,
    AppProductbannerglowcore,
    NeedHelpWithAProject,
    ShowAllProducts,
    FooterSocial,
    FooterWebLinks,
  },
  metaInfo: {
    title: 'LEDs by glowingkitty',
    meta: [
      {
        property: 'og:title',
        content: 'LEDs by glowingkitty',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #202020;
}
.home-container1 {
  width: 100%;
  height: 95vh;
  display: flex;
  position: relative;
  min-height: 380px;
  align-items: center;
  padding-top: 80px;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0.00%,rgba(0, 0, 0, 0.6) 99.00%),url("/playground_assets/header-1500h.jpeg");
  background-repeat: no-repeat;
  background-position: center;
}
.home-text {
  color: rgb(255, 255, 255);
  max-width: 370px;
  font-style: normal;
  text-align: center;
  font-family: Lexend Deca;
  font-weight: 400;
  margin-bottom: 40px;
}
.home-link {
  text-decoration: none;
}
.home-topic-section {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: -80px;
  align-items: flex-start;
  margin-bottom: 80px;
}
.home-container2 {
  width: 100%;
  height: 80vh;
  display: none;
  position: relative;
  min-height: 633px;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0.00%,rgba(0, 0, 0, 0.68) 99.00%),url("/playground_assets/glowtube.jpeg");
  background-repeat: repeat,no-repeat;
  background-position: top left,center;
}
.home-container3 {
  flex: 0 0 auto;
  width: 330px;
  height: auto;
  display: flex;
  margin-top: 69px;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
}
.home-text1 {
  color: #ffffff;
  font-size: 30px;
  font-family: Lexend Deca;
}
.home-text2 {
  color: #ffffff;
  font-size: 14px;
  margin-top: 21px;
  font-family: Lexend Deca;
}
.home-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
}
.home-navlink {
  color: #ffffff;
  font-family: Lexend Deca;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  text-decoration: none;
}
.home-link1 {
  color: rgb(255, 255, 255);
  font-family: Lexend Deca;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  text-decoration: none;
}
.home-topic-section1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: -80px;
  align-items: flex-start;
  margin-bottom: 80px;
}
@media(max-width: 767px) {
  .home-container1 {
    padding-top: 65px;
  }
  .home-topic-section {
    margin-top: -65px;
    margin-bottom: 65px;
  }
}
@media(max-width: 479px) {
  .home-container2 {
    height: 558px;
  }
}
</style>
