<template>
  <div class="news-list">
    <news-list-item v-for="(item, index) in news" :key="index" v-bind:item="item" v-bind:index="index" v-bind:selected="0"></news-list-item>
  </div>
</template>

<script>
  export default {
    props: ['news'],
    data () {
      return {
        selectedIndex: -1,
        items: []
      }
    },
    created () {
      setInterval(() => {

      }, 200)
    }
  }
</script>

<style scoped>
  .news-list {
    max-width: 100%;
    width: 100%;
    overflow:hidden;
    position:relative;
  }
</style>
