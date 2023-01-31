<template>
  <div class="show-all-products-container" v-bind:class="rootClassName">
    <span class="show-all-products-text">{{ heading }}</span>
    <span class="show-all-products-text1">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'ShowAllProducts',
  props: {
    rootClassName: String,
    text: {
      type: String,
      default: 'Explore all the LED products by glowingkitty.',
    },
    heading: {
      type: String,
      default: 'There is more!',
    },
  },
}
</script>

<style scoped>
.show-all-products-container {
  width: 100%;
  height: auto;
  display: flex;
  padding: 69px;
  position: relative;
  align-items: center;
  padding-top: 69px;
  flex-direction: column;
  background-size: cover;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0.00%,rgba(0, 0, 0, 0.65) 100.00%),url("/playground_assets/magiqwand-1500w.jpeg");
  background-position: center;
}
.show-all-products-text {
  color: #ffffff;
  font-size: 22px;
  font-family: Lexend Deca;
}
.show-all-products-text1 {
  color: #ffffff;
  margin-top: 39px;
  text-align: center;
  font-family: Lexend Deca;
  margin-bottom: 200px;
}
.show-all-products-root-class-name {
  display: none;
}
</style>
