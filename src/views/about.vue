<template>
  <div class="about-container">
    <app-header></app-header>
    <div class="about-container1">
      <h1 class="about-text">glowingkitty</h1>
      <span class="about-text1">
        <span>
          Using our fascination for LEDs,
          <span v-html="rawf03d"></span>
        </span>
        <br />
        <span>
          to educate the next generation
          <span v-html="raw9qdp"></span>
        </span>
        <br />
        <span>of industrial designers.</span>
      </span>
      <a href="#explore" class="about-link button">Learn more</a>
    </div>
    <need-help-with-a-project
      rootClassName="need-help-with-a-project-root-class-name2"
    ></need-help-with-a-project>
    <footer-social rootClassName="footer-social-root-class-name2"></footer-social>
    <footer-web-links
      rootClassName="footer-web-links-root-class-name2"
    ></footer-web-links>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import NeedHelpWithAProject from '../components/need-help-with-a-project'
import FooterSocial from '../components/footer-social'
import FooterWebLinks from '../components/footer-web-links'

export default {
  name: 'About',
  components: {
    AppHeader,
    NeedHelpWithAProject,
    FooterSocial,
    FooterWebLinks,
  },
  data() {
    return {
      rawf03d: ' ',
      raw9qdp: ' ',
    }
  },
  metaInfo: {
    title: 'About - LEDs by glowingkitty',
    meta: [
      {
        property: 'og:title',
        content: 'About - LEDs by glowingkitty',
      },
    ],
  },
}
</script>

<style scoped>
.about-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.about-container1 {
  width: 100%;
  height: 95vh;
  display: flex;
  position: relative;
  min-height: 380px;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0.00%,rgba(0, 0, 0, 0.6) 99.00%),url("/playground_assets/kittyengineering-1500h.jpg");
  background-repeat: no-repeat;
  background-position: center;
}
.about-text {
  color: rgb(255, 255, 255);
  font-size: 50px;
  max-width: 370px;
  font-style: normal;
  text-align: center;
  font-family: Lexend Deca;
  font-weight: 400;
  margin-bottom: 40px;
}
.about-text1 {
  color: rgb(255, 255, 255);
  font-size: 18px;
  text-align: center;
  font-family: Lexend Deca;
  margin-bottom: 50px;
}
.about-link {
  text-decoration: none;
}
</style>
