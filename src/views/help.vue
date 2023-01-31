<template>
  <div class="help-container"></div>
</template>

<script>
export default {
  name: 'Help',
  metaInfo: {
    title: 'Help - LEDs by glowingkitty',
    meta: [
      {
        property: 'og:title',
        content: 'Help - LEDs by glowingkitty',
      },
    ],
  },
}
</script>

<style scoped>
.help-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
