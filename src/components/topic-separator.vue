<template>
  <div class="topic-separator-container" v-bind:class="rootClassName">
    <span class="topic-separator-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'TopicSeparator',
  props: {
    rootClassName: String,
    text: {
      type: String,
      default: 'This is a heading',
    },
  },
}
</script>

<style scoped>
.topic-separator-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 60px;
  padding-left: 34px;
  padding-right: 34px;
  flex-direction: column;
  padding-bottom: 60px;
  justify-content: center;
  background-color: var(--dl-color-gray-darkgrey);
}
.topic-separator-text {
  color: #ffffff;
  font-size: 22px;
  text-align: center;
  font-family: Lexend Deca;
}


.topic-separator-root-class-name2 {
  margin-top: 85px;
}
@media(max-width: 767px) {
  .topic-separator-root-class-name2 {
    margin-top: 60px;
  }
}
</style>
