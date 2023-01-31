<template>
  <div class="productbannerglowlight-container" v-bind:class="rootClassName">
    <div class="productbannerglowlight-container1">
      <span class="productbannerglowlight-text">{{ productname }}</span>
      <span class="productbannerglowlight-text1">{{ description }}</span>
      <div class="productbannerglowlight-container2">
        <a
          href="https://shop.glowingkitty.com/products/glowlight"
          target="_blank"
          rel="noreferrer noopener"
          class="productbannerglowlight-link product_promoteblock_link"
        >
          {{ cta1 }}
        </a>
        <a
          href="https://shop.glowingkitty.com/products/glowtower"
          target="_blank"
          rel="noreferrer noopener"
          class="productbannerglowlight-link1 product_promoteblock_link"
        >
          {{ cta2 }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Productbannerglowlight',
  props: {
    productname: {
      type: String,
      default: 'GlowLight',
    },
    description: {
      type: String,
      default: 'What a beautiful desk lamp!',
    },
    rootClassName: String,
    cta1: {
      type: String,
      default: 'Learn more',
    },
    cta2: {
      type: String,
      default: 'Show prices',
    },
  },
}
</script>

<style scoped>
.productbannerglowlight-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  min-height: 633px;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0.00%,rgba(0, 0, 0, 0.68) 99.00%),url("/playground_assets/glowlight-1500h.jpg");
  background-repeat: repeat,no-repeat;
  background-position: top left,center;
}
.productbannerglowlight-container1 {
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
.productbannerglowlight-text {
  color: #ffffff;
  font-size: 30px;
  font-family: Lexend Deca;
}
.productbannerglowlight-text1 {
  color: #ffffff;
  font-size: 14px;
  margin-top: 21px;
  font-family: Lexend Deca;
}
.productbannerglowlight-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
}
.productbannerglowlight-link {
  color: #ffffff;
  font-family: Lexend Deca;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  text-decoration: none;
}
.productbannerglowlight-link1 {
  color: #ffffff;
  display: none;
  font-family: Lexend Deca;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  text-decoration: none;
}
.productbannerglowlight-root-class-name {
  height: 80vh;
}
.productbannerglowlight-root-class-name1 {
  height: 80vh;
}
@media(max-width: 479px) {
  .productbannerglowlight-container {
    height: 558px;
  }
}
</style>
