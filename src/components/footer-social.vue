<template>
  <div class="footer-social-container" v-bind:class="rootClassName">
    <span class="footer-social-text">{{ text }}</span>
    <div class="footer-social-container1">
      <a
        href="https://patreon.glowingkitty.com"
        target="_blank"
        rel="noreferrer noopener"
        class="footer-social-link"
      >
        <img
          :alt="image_alt"
          :src="image_src"
          class="footer-social-image socialmedia_icon"
        />
      </a>
      <a
        href="https://discord.glowingkitty.com"
        target="_blank"
        rel="noreferrer noopener"
        class="footer-social-link1"
      >
        <img
          :alt="image_alt1"
          :src="image_src1"
          class="footer-social-image1 socialmedia_icon"
        />
      </a>
      <a
        href="https://instagram.glowingkitty.com"
        target="_blank"
        rel="noreferrer noopener"
        class="footer-social-link2"
      >
        <img
          :alt="image_alt2"
          :src="image_src2"
          class="footer-social-image2 socialmedia_icon"
        />
      </a>
      <a
        href="https://blog.glowingkitty.com"
        target="_blank"
        rel="noreferrer noopener"
        class="footer-social-link3"
      >
        <img
          :alt="image_alt3"
          :src="image_src3"
          class="footer-social-image3 socialmedia_icon"
        />
      </a>
      <a
        href="https://git.glowingkitty.com"
        target="_blank"
        rel="noreferrer noopener"
        class="footer-social-link4"
      >
        <img
          :alt="image_alt4"
          :src="image_src4"
          class="footer-social-image4 socialmedia_icon"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSocial',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    text: {
      type: String,
      default: 'Stay updated',
    },
    rootClassName: String,
    image_alt4: {
      type: String,
      default: 'image',
    },
    image_src3: {
      type: String,
      default: '/playground_assets/social_medium.svg',
    },
    image_src2: {
      type: String,
      default: '/playground_assets/social_instagram.svg',
    },
    image_src1: {
      type: String,
      default: '/playground_assets/social_discord.svg',
    },
    image_alt3: {
      type: String,
      default: 'image',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_src4: {
      type: String,
      default: '/playground_assets/social_github.svg',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: '/playground_assets/social_patreon.svg',
    },
  },
}
</script>

<style scoped>
.footer-social-container {
  width: 100%;
  height: auto;
  display: flex;
  padding: 49px;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-darkgrey);
}
.footer-social-text {
  color: var(--dl-color-gray-white);
  font-size: 22px;
  font-family: Lexend Deca;
}
.footer-social-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
  justify-content: center;
}
.footer-social-link {
  display: contents;
}
.footer-social-image {
  transition: 0.3s;
}

.footer-social-link1 {
  display: contents;
}
.footer-social-image1 {
  object-fit: cover;
  text-decoration: none;
}
.footer-social-link2 {
  display: contents;
}
.footer-social-image2 {
  object-fit: cover;
  text-decoration: none;
}
.footer-social-link3 {
  display: contents;
}
.footer-social-image3 {
  object-fit: cover;
  text-decoration: none;
}
.footer-social-link4 {
  display: contents;
}
.footer-social-image4 {
  object-fit: cover;
  text-decoration: none;
}





</style>
