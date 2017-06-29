<template>
  <div class="news-wrapper">
    <h1>test</h1>
    <news-item v-for="(item, index) in news" v-bind:item="item" v-bind:id="index" v-bind:selected-index="selectedIndex"></news-item>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        selectedIndex: 0,
        news: []
      }
    },
    created () {
      this.load()
    },
    methods: {
      load () {
        this.axios.get('/news')
          .then((response) => {
            this.news = response.data.items
            setInterval(() => {
              this.selectedIndex = this.news.length <= this.selectedIndex ? 0 : this.selectedIndex += 1
            }, 4000)
          })
      }
    }
  }
</script>

<style scoped>
  .news-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #fdfdfd;
    color: #fff;
    text-align: center;
  }
</style>
