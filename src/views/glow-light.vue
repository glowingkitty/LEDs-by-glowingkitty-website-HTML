<template>
  <div class="glow-light-container"></div>
</template>

<script>
export default {
  name: 'GlowLight',
  metaInfo: {
    title: 'GlowLight - LEDs by glowingkitty',
    meta: [
      {
        property: 'og:title',
        content: 'GlowLight - LEDs by glowingkitty',
      },
    ],
  },
}
</script>

<style scoped>
.glow-light-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
