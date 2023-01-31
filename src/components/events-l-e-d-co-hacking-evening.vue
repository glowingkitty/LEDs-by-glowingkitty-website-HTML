<template>
  <div
    class="events-l-e-d-co-hacking-evening-container eventblockpreview"
    v-bind:class="rootClassName"
  >
    <span class="events-l-e-d-co-hacking-evening-text eventblockh1">
      {{ text1 }}
    </span>
    <span class="events-l-e-d-co-hacking-evening-text1 eventblockh2">
      {{ text11 }}
    </span>
    <div class="eventblockgradient"></div>
  </div>
</template>

<script>
export default {
  name: 'EventsLEDCoHackingEvening',
  props: {
    rootClassName: String,
    text1: {
      type: String,
      default: 'LED co-hacking evening',
    },
    text11: {
      type: String,
      default: 'at xHain hack & makespace',
    },
  },
}
</script>

<style scoped>
.events-l-e-d-co-hacking-evening-container {
  display: flex;
  position: relative;
  align-items: flex-start;
  border-radius: 10px;
  flex-direction: column;
  background-size: cover;
  justify-content: flex-end;
  background-image: url("/playground_assets/xhain%201-600w.jpg");
  background-repeat: no-repeat;
  background-position: center;
}
.events-l-e-d-co-hacking-evening-text {
  color: #ffffff;
  font-family: Lexend Deca;
}
.events-l-e-d-co-hacking-evening-text1 {
  color: #9a9a9a;
  font-family: Lexend Deca;
}

</style>
