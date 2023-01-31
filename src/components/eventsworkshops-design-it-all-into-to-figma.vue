<template>
  <div
    class="eventsworkshops-design-it-all-into-to-figma-container eventblockpreview"
    v-bind:class="rootClassName"
  >
    <span class="eventsworkshops-design-it-all-into-to-figma-text eventblockh1">
      {{ text }}
    </span>
    <span class="eventsworkshops-design-it-all-into-to-figma-text1 eventblockh1">
      {{ text1 }}
    </span>
    <span class="eventsworkshops-design-it-all-into-to-figma-text2 eventblockh2">
      {{ text11 }}
    </span>
    <div class="eventblockgradient"></div>
  </div>
</template>

<script>
export default {
  name: 'EventsworkshopsDesignItAllIntoToFigma',
  props: {
    rootClassName: String,
    text11: {
      type: String,
      default: 'at xHain hack & makespace',
    },
    text: {
      type: String,
      default: 'Beginner workshop -',
    },
    text1: {
      type: String,
      default: 'Design it all. Intro to Figma',
    },
  },
}
</script>

<style scoped>
.eventsworkshops-design-it-all-into-to-figma-container {
  display: flex;
  position: relative;
  align-items: flex-start;
  border-radius: 10px;
  flex-direction: column;
  background-size: cover;
  justify-content: flex-end;
  background-image: url("/playground_assets/figma-600w.jpg");
  background-repeat: no-repeat;
  background-position: center;
}
.eventsworkshops-design-it-all-into-to-figma-text {
  color: #ffffff;
  font-family: Lexend Deca;
}
.eventsworkshops-design-it-all-into-to-figma-text1 {
  color: #ffffff;
  font-family: Lexend Deca;
}
.eventsworkshops-design-it-all-into-to-figma-text2 {
  color: #9a9a9a;
  font-family: Lexend Deca;
}

</style>
