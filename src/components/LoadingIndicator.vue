<template>
  <div class="loader">
    <img src="./../assets/logo.svg" class="icon">
    <h1>Condense Kiosk</h1>
    <h2>developed by pascal</h2>
    <h4 class="source-code">source-code available: https://github.com/ammop2/condense-kiosk</h4>
  </div>
</template>

<script>
  export default {
    name: 'loader'
  }
</script>

<style scoped>
  .loader
  {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #2C3E50;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .loader h1, .loader h2 {
    color: #85c1e9;
  }
  .source-code {
    position: absolute;
    bottom: 2em;
    right: 2em;
    color: #d6eaf7;
  }
</style>
