<template>
  <div class="glow-tube-container"></div>
</template>

<script>
export default {
  name: 'GlowTube',
  metaInfo: {
    title: 'GlowTube - LEDs by glowingkitty',
    meta: [
      {
        property: 'og:title',
        content: 'GlowTube - LEDs by glowingkitty',
      },
    ],
  },
}
</script>

<style scoped>
.glow-tube-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
