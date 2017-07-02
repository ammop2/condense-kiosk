<template>
  <div class="news-wrapper">
    <div v-for="(item, index) in news" :key="index">
      <news-item-simple v-bind:item="item" v-bind:id="index" :key="index" v-bind:selected-index="selectedIndex" v-if="$activeTemplate === 'simple'"></news-item-simple>
      <news-item-slider v-bind:item="item" v-bind:id="index" :key="index" v-bind:selected-index="selectedIndex" v-if="$activeTemplate === 'slider'"></news-item-slider>
    </div>

    <loading-indicator v-show="selectedIndex === -1"></loading-indicator>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        selectedIndex: -1,
        news: []
      }
    },
    created () {
      this.load()
    },
    methods: {
      load () {
        this.axios.get(`/news?channels=${this.$channels}`)
          .then((response) => {
            this.news = response.data.items
            this.selectedIndex = 0
            setTimeout(() => {
              setInterval(() => {
                this.selectedIndex = this.selectedIndex + 1 === this.news.length ? 0 : this.selectedIndex += 1
              }, 8000)
            }, 200)
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
