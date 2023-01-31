<template>
  <div class="eventblockpreview">
    <span class="eventblockh1">{{ text }}</span>
    <span
      class="eventsworkshops-how-to-plan-build-your-own-l-e-d-project-text1 eventblockh1"
    >
      {{ text1 }}
    </span>
    <span class="eventblockh2">{{ text11 }}</span>
    <div class="eventblockgradient"></div>
  </div>
</template>

<script>
export default {
  name: 'EventsworkshopsHowToPlanBuildYourOwnLEDProject',
  props: {
    text1: {
      type: String,
      default: 'How to plan & build your own LED project',
    },
    rootClassName: String,
    text: {
      type: String,
      default: 'Beginner workshop -',
    },
    text11: {
      type: String,
      default: 'at xHain hack & makespace',
    },
  },
}
</script>

<style scoped>
.eventsworkshops-how-to-plan-build-your-own-l-e-d-project-text1 {
  color: #ffffff;
  font-family: Lexend Deca;
}

@media(max-width: 991px) {
  .eventsworkshops-how-to-plan-build-your-own-l-e-d-project-text1 {
    font-size: 17px;
  }
}
</style>
