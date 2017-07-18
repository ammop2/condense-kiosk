<template>
  <div>
    <md-layout>
      <md-layout md-flex="20" style="background-color: #323232">
      </md-layout>
      <md-layout md-flex-offset="5" md-flex="50">
        <news-detail v-if="news && news.length" :item="item" :progress="progress"></news-detail>
      </md-layout>
      <md-layout md-flex="20" md-flex-offset="5">
        <news-list v-if="news && news.length" v-bind:news="news"></news-list>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        news: [],
        item: {},
        progress: 0,
        selected: 0
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
            this.item = this.news[1]
            this.news = this.news.slice(0, 10)
            setInterval(() => {
              this.progress += 5
              if (this.progress > 100) {
                this.progress = 0
                this.selected += 1
              }
            }, 100)
          })
      }
    }
  }
</script>

<style scoped>
</style>
