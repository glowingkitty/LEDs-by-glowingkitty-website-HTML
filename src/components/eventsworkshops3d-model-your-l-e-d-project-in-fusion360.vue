<template>
  <div
    class="eventsworkshops3d-model-your-l-e-d-project-in-fusion360-container eventblockpreview"
    v-bind:class="rootClassName"
  >
    <span
      class="eventsworkshops3d-model-your-l-e-d-project-in-fusion360-text eventblockh1"
    >
      {{ text }}
    </span>
    <span
      class="eventsworkshops3d-model-your-l-e-d-project-in-fusion360-text1 eventblockh1"
    >
      {{ text1 }}
    </span>
    <span
      class="eventsworkshops3d-model-your-l-e-d-project-in-fusion360-text2 eventblockh2"
    >
      {{ text11 }}
    </span>
    <div class="eventblockgradient"></div>
  </div>
</template>

<script>
export default {
  name: 'Eventsworkshops3DModelYourLEDProjectInFusion360',
  props: {
    text: {
      type: String,
      default: 'Beginner workshop -',
    },
    text1: {
      type: String,
      default: '3D model your LED project in Fusion360',
    },
    rootClassName: String,
    text11: {
      type: String,
      default: 'at xHain hack & makespace',
    },
  },
}
</script>

<style scoped>
.eventsworkshops3d-model-your-l-e-d-project-in-fusion360-container {
  display: flex;
  position: relative;
  align-items: flex-start;
  border-radius: 10px;
  flex-direction: column;
  background-size: cover;
  justify-content: flex-end;
  background-image: url("/playground_assets/fusion360-600w.jpg");
  background-repeat: no-repeat;
  background-position: center;
}
.eventsworkshops3d-model-your-l-e-d-project-in-fusion360-text {
  color: #ffffff;
  font-family: Lexend Deca;
}
.eventsworkshops3d-model-your-l-e-d-project-in-fusion360-text1 {
  color: #ffffff;
  font-family: Lexend Deca;
}
.eventsworkshops3d-model-your-l-e-d-project-in-fusion360-text2 {
  color: #9a9a9a;
  font-family: Lexend Deca;
}


</style>
