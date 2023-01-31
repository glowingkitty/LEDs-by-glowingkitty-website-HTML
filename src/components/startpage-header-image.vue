<template>
  <div class="startpage-header-image-container" v-bind:class="rootClassName">
    <h1 class="startpage-header-image-text">{{ header1 }}</h1>
    <button type="button" class="button">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'StartpageHeaderImage',
  props: {
    header1: {
      type: String,
      default: 'Learn industrial design the easy & fun way, with LEDs!',
    },
    rootClassName: String,
    button: {
      type: String,
      default: 'Explore products',
    },
  },
}
</script>

<style scoped>
.startpage-header-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  min-height: 380px;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0.00%,rgba(0, 0, 0, 0.3) 100.00%),url("https://play.teleporthq.io/static/svg/placeholders/no-image.svg");
  background-repeat: no-repeat;
  background-position: center;
}
.startpage-header-image-text {
  color: #ffffff;
  max-width: 370px;
  font-style: normal;
  text-align: center;
  font-family: Lexend Deca;
  font-weight: 400;
  margin-bottom: 40px;
}
</style>
