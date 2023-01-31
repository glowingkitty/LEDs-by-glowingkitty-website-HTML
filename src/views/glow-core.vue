<template>
  <div class="glow-core-container"></div>
</template>

<script>
export default {
  name: 'GlowCore',
  metaInfo: {
    title: 'GlowCore - LEDs by glowingkitty',
    meta: [
      {
        property: 'og:title',
        content: 'GlowCore - LEDs by glowingkitty',
      },
    ],
  },
}
</script>

<style scoped>
.glow-core-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
