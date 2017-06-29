<template>
  <div class="news-list">
    <item v-for="item in news" v-bind:item="item"></item>
  </div>
</template>

<script>
  export default {
    props: ['news'],
    name: 'list'
  }
</script>
