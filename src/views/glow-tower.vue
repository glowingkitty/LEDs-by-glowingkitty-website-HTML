<template>
  <div class="glow-tower-container"></div>
</template>

<script>
export default {
  name: 'GlowTower',
  metaInfo: {
    title: 'GlowTower - LEDs by glowingkitty',
    meta: [
      {
        property: 'og:title',
        content: 'GlowTower - LEDs by glowingkitty',
      },
    ],
  },
}
</script>

<style scoped>
.glow-tower-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
