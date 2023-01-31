<template>
  <div class="need-help-with-a-project-container" v-bind:class="rootClassName">
    <div id="help" class="need-help-with-a-project-topic-section"></div>
    <div class="need-help-with-a-project-container1">
      <span class="need-help-with-a-project-text">{{ heading }}</span>
      <div class="need-help-with-a-project-container2">
        <div class="need-help-with-a-project-container3">
          <span class="need-help-with-a-project-text1">{{ option1 }}</span>
          <span class="need-help-with-a-project-text2">
            {{ option1_details }}
          </span>
          <img
            :alt="image_alt"
            :src="image_src"
            class="need-help-with-a-project-image"
          />
          <a
            href="https://shop.glowingkitty.com/products/ask-a-mentor"
            target="_blank"
            rel="noreferrer noopener"
            class="need-help-with-a-project-link button"
          >
            {{ button_option_1 }}
          </a>
        </div>
        <div class="need-help-with-a-project-container4">
          <span class="need-help-with-a-project-text3">{{ option2 }}</span>
          <span class="need-help-with-a-project-text4">
            {{ option2_details }}
          </span>
          <img
            :alt="image_alt1"
            :src="image_src1"
            class="need-help-with-a-project-image1"
          />
          <a
            href="https://discord.glowingkitty.com"
            target="_blank"
            rel="noreferrer noopener"
            class="need-help-with-a-project-link1 button"
          >
            {{ button_option_2 }}
          </a>
        </div>
      </div>
      <span class="need-help-with-a-project-text5">{{ text }}</span>
      <router-link to="/products" class="need-help-with-a-project-navlink">
        {{ text2 }}
      </router-link>
      <span class="need-help-with-a-project-text6">{{ text3 }}</span>
      <span class="need-help-with-a-project-text7">{{ text4 }}</span>
      <div class="need-help-with-a-project-container5">
        <a
          href="https://whatsapp.glowingkitty.com"
          target="_blank"
          rel="noreferrer noopener"
          class="need-help-with-a-project-link2"
        >
          {{ whatsapp }}
        </a>
        <a
          href="mailto:support@glowingkitty.com?subject="
          class="need-help-with-a-project-link3"
        >
          {{ email }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NeedHelpWithAProject',
  props: {
    heading: {
      type: String,
      default: 'Need help with an LED project?',
    },
    option2_details: {
      type: String,
      default: 'Join our community & ask around!',
    },
    text: {
      type: String,
      default: 'Need help with an LED lamp or dev board by glowingkitty?',
    },
    rootClassName: String,
    image_src1: {
      type: String,
      default: '/playground_assets/discord.svg',
    },
    button_option_2: {
      type: String,
      default: 'Join community',
    },
    whatsapp: {
      type: String,
      default: 'WhatsApp',
    },
    option2: {
      type: String,
      default: 'Option 2:',
    },
    email: {
      type: String,
      default: 'Email',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: '/playground_assets/twopeople.svg',
    },
    text4: {
      type: String,
      default: 'Chat with us via WhatsApp, or email us:',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    option1_details: {
      type: String,
      default: 'Get 1 to 1 help from glowingkitty!',
    },
    text2: {
      type: String,
      default: 'Check out the product pages for FAQ, documentation and more.',
    },
    option1: {
      type: String,
      default: 'Option 1:',
    },
    link_text: {
      type: String,
      default: 'https://example.com',
    },
    text3: {
      type: String,
      default: 'Still have open questions?',
    },
    button_option_1: {
      type: String,
      default: 'Book appointment',
    },
  },
}
</script>

<style scoped>
.need-help-with-a-project-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 65px;
  padding-left: 65px;
  padding-right: 65px;
  flex-direction: column;
  padding-bottom: 65px;
  background-color: var(--dl-color-gray-brightgray);
}
.need-help-with-a-project-topic-section {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: -150px;
  align-items: flex-start;
  margin-bottom: 150px;
}
.need-help-with-a-project-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.need-help-with-a-project-text {
  color: #ffffff;
  font-size: 22px;
  text-align: center;
  font-family: Lexend Deca;
  margin-bottom: 50px;
}
.need-help-with-a-project-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  max-width: 675px;
  align-items: center;
  justify-content: flex-start;
}
.need-help-with-a-project-container3 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.need-help-with-a-project-text1 {
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  text-align: center;
  font-family: Lexend Deca;
  font-weight: 700;
}
.need-help-with-a-project-text2 {
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  font-family: Lexend Deca;
}
.need-help-with-a-project-image {
  width: 100px;
  height: 100px;
  margin-top: 31px;
  object-fit: cover;
  margin-bottom: 31px;
}
.need-help-with-a-project-link {
  text-decoration: none;
}
.need-help-with-a-project-container4 {
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.need-help-with-a-project-text3 {
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  text-align: center;
  font-family: Lexend Deca;
  font-weight: 700;
}
.need-help-with-a-project-text4 {
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  font-family: Lexend Deca;
}
.need-help-with-a-project-image1 {
  width: 100px;
  margin-top: 31px;
  object-fit: cover;
  margin-bottom: 31px;
}
.need-help-with-a-project-link1 {
  text-decoration: none;
}
.need-help-with-a-project-text5 {
  color: #ffffff;
  display: none;
  font-size: 14px;
  max-width: 675px;
  margin-top: 20px;
  text-align: center;
  font-family: Lexend Deca;
  line-height: 1.3;
}
.need-help-with-a-project-navlink {
  color: var(--dl-color-gray-700);
  display: none;
  font-size: 14px;
  max-width: 675px;
  text-align: center;
  font-family: Lexend Deca;
  line-height: 1.3;
  text-decoration: none;
}
.need-help-with-a-project-text6 {
  color: #ffffff;
  font-size: 14px;
  max-width: 675px;
  margin-top: 20px;
  text-align: center;
  font-family: Lexend Deca;
  line-height: 1.3;
}
.need-help-with-a-project-text7 {
  color: #ffffff;
  font-size: 14px;
  max-width: 675px;
  text-align: center;
  font-family: Lexend Deca;
  line-height: 1.3;
}
.need-help-with-a-project-container5 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 15px;
  align-items: flex-start;
  justify-content: center;
}
.need-help-with-a-project-link2 {
  color: transparent;
  width: 50px;
  height: 50px;
  opacity: 0.7;
  transition: 0.3s;
  font-family: Lexend Deca;
  margin-left: 15px;
  margin-right: 15px;
  background-size: cover;
  background-image: url("/playground_assets/whatsapp.svg");
}
.need-help-with-a-project-link2:hover {
  opacity: 1;
}
.need-help-with-a-project-link3 {
  color: transparent;
  width: 50px;
  height: 50px;
  opacity: 0.7;
  transition: 0.3s;
  font-family: Lexend Deca;
  margin-left: 15px;
  margin-right: 15px;
  background-size: cover;
  text-decoration: none;
  background-image: url("/playground_assets/email.svg");
}
.need-help-with-a-project-link3:hover {
  opacity: 1;
}





@media(max-width: 767px) {
  .need-help-with-a-project-container {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media(max-width: 479px) {
  .need-help-with-a-project-container {
    width: 100%;
  }
  .need-help-with-a-project-container2 {
    flex-direction: column;
  }
  .need-help-with-a-project-container3 {
    padding-bottom: 45px;
  }
}
</style>
