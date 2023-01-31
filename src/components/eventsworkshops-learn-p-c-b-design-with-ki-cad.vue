<template>
  <div
    class="eventsworkshops-learn-p-c-b-design-with-ki-cad-container eventblockpreview"
  >
    <span class="eventblockh1">{{ text }}</span>
    <span class="eventblockh1">{{ text2 }}</span>
    <span class="eventblockh2">{{ text11 }}</span>
    <div class="eventblockgradient"></div>
  </div>
</template>

<script>
export default {
  name: 'EventsworkshopsLearnPCBDesignWithKiCad',
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
    text2: {
      type: String,
      default: 'Learn PCB design with KiCad',
    },
  },
}
</script>

<style scoped>
.eventsworkshops-learn-p-c-b-design-with-ki-cad-container {
  background-size: cover;
  background-image: url("/playground_assets/pcbdesign-600w.jpg");
}

</style>
