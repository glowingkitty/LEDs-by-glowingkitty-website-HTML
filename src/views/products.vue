<template>
  <div class="products-container">
    <app-header></app-header>
    <topic-separator
      text="Explore all products:"
      rootClassName="topic-separator-root-class-name2"
    ></topic-separator>
    <app-productbannerglowtower
      rootClassName="productbannerglowtower-root-class-name1"
    ></app-productbannerglowtower>
    <app-productbannerglowlight
      rootClassName="productbannerglowlight-root-class-name1"
    ></app-productbannerglowlight>
    <app-productbannerglowcore
      rootClassName="productbannerglowcore-root-class-name1"
    ></app-productbannerglowcore>
    <need-help-with-a-project
      rootClassName="need-help-with-a-project-root-class-name1"
    ></need-help-with-a-project>
    <footer-social rootClassName="footer-social-root-class-name1"></footer-social>
    <footer-web-links
      rootClassName="footer-web-links-root-class-name1"
    ></footer-web-links>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import TopicSeparator from '../components/topic-separator'
import AppProductbannerglowtower from '../components/productbannerglowtower'
import AppProductbannerglowlight from '../components/productbannerglowlight'
import AppProductbannerglowcore from '../components/productbannerglowcore'
import NeedHelpWithAProject from '../components/need-help-with-a-project'
import FooterSocial from '../components/footer-social'
import FooterWebLinks from '../components/footer-web-links'

export default {
  name: 'Products',
  components: {
    AppHeader,
    TopicSeparator,
    AppProductbannerglowtower,
    AppProductbannerglowlight,
    AppProductbannerglowcore,
    NeedHelpWithAProject,
    FooterSocial,
    FooterWebLinks,
  },
  metaInfo: {
    title: 'Products - LEDs by glowingkitty',
    meta: [
      {
        property: 'og:title',
        content: 'Products - LEDs by glowingkitty',
      },
    ],
  },
}
</script>

<style scoped>
.products-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
