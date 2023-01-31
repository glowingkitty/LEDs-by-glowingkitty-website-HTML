<template>
  <div class="productbannerglowcore-container" v-bind:class="rootClassName">
    <div class="productbannerglowcore-container1">
      <span class="productbannerglowcore-text">{{ productname }}</span>
      <span class="productbannerglowcore-text1">{{ description }}</span>
      <div class="productbannerglowcore-container2">
        <a
          href="https://shop.glowingkitty.com/products/glowcore"
          target="_blank"
          rel="noreferrer noopener"
          class="productbannerglowcore-link product_promoteblock_link"
        >
          {{ cta1 }}
        </a>
        <a
          href="http://shop.glowingkitty.com/products/glowcore"
          target="_blank"
          rel="noreferrer noopener"
          class="productbannerglowcore-link1 product_promoteblock_link"
        >
          {{ cta2 }}
        </a>
      </div>
    </div>
    <img :alt="image_alt" :src="image_src" class="productbannerglowcore-image" />
  </div>
</template>

<script>
export default {
  name: 'Productbannerglowcore',
  props: {
    productname: {
      type: String,
      default: 'GlowCore',
    },
    rootClassName: String,
    description: {
      type: String,
      default: 'The easiest way to control LED strips!',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    cta2: {
      type: String,
      default: 'Show prices',
    },
    image_src: {
      type: String,
      default: '/playground_assets/glowcore-1100h.png',
    },
    cta1: {
      type: String,
      default: 'Learn more',
    },
  },
}
</script>

<style scoped>
.productbannerglowcore-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  min-height: 633px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-darkgrey);
}
.productbannerglowcore-container1 {
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
.productbannerglowcore-text {
  color: #ffffff;
  font-size: 30px;
  font-family: Lexend Deca;
}
.productbannerglowcore-text1 {
  color: #ffffff;
  font-size: 14px;
  margin-top: 21px;
  font-family: Lexend Deca;
}
.productbannerglowcore-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
}
.productbannerglowcore-link {
  color: #ffffff;
  font-family: Lexend Deca;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  text-decoration: none;
}
.productbannerglowcore-link1 {
  display: none;
}
.productbannerglowcore-image {
  bottom: 0px;
  height: 70%;
  position: absolute;
  min-width: auto;
  object-fit: cover;
  transition: 10s;
}
.productbannerglowcore-image:hover {
  transform: scale(1.1);
}
.productbannerglowcore-root-class-name {
  width: 100%;
  height: 80vh;
  min-height: 633px;
}
.productbannerglowcore-root-class-name1 {
  height: 80vh;
}
@media(max-width: 479px) {
  .productbannerglowcore-container {
    height: 558px;
  }
  .productbannerglowcore-image {
    height: 65%;
  }
}
</style>
