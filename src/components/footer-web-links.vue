<template>
  <div class="footer-web-links-container" v-bind:class="rootClassName">
    <a
      href="https://shop.glowingkitty.com/pages/imprint"
      target="_blank"
      rel="noreferrer noopener"
      class="footer-web-links-link"
    >
      {{ text }}
    </a>
    <a
      href="https://shop.glowingkitty.com/policies/privacy-policy"
      target="_blank"
      rel="noreferrer noopener"
      class="footer-web-links-link1"
    >
      {{ text1 }}
    </a>
    <router-link to="/about" class="footer-web-links-navlink">
      {{ text11 }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FooterWebLinks',
  props: {
    text1: {
      type: String,
      default: 'Privacy',
    },
    rootClassName: String,
    link_text11: {
      type: String,
      default: 'https://example.com',
    },
    link_text1: {
      type: String,
      default: 'https://example.com',
    },
    link_text: {
      type: String,
      default: 'https://example.com',
    },
    text: {
      type: String,
      default: 'Imprint',
    },
    text11: {
      type: String,
      default: 'About',
    },
  },
}
</script>

<style scoped>
.footer-web-links-container {
  width: 100%;
  height: auto;
  display: flex;
  padding: 49px;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: var(--dl-color-gray-brightgray);
}
.footer-web-links-link {
  color: #ffffff;
  font-family: Lexend Deca;
  text-decoration: none;
}
.footer-web-links-link1 {
  color: #ffffff;
  font-family: Lexend Deca;
  margin-left: 30px;
  margin-right: 30px;
  text-decoration: none;
}
.footer-web-links-navlink {
  color: #ffffff;
  display: none;
  font-family: Lexend Deca;
  text-decoration: none;
}





</style>
