<template>
  <md-card class="news-list">
    <news-list-item v-for="(item, index) in news" :key="index" v-bind:item="item" v-bind:index="index" v-bind:selected="selected"></news-list-item>
  </md-card>
</template>

<script>
  export default {
    props: ['news', 'selected']
  }
</script>

<style scoped>
  .news-list {
    max-width: 100%;
    width: 100%;
    overflow:hidden;
    position:relative;
    height: 100%;
  }
</style>
