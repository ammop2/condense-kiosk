<template>
  <div>
    <md-layout class="news">
      <md-layout md-flex="50">
        <news-detail v-if="news && news.length" v-for="(item, index) in news" :key="index" v-bind:item="item" v-show="selected === index"></news-detail>
      </md-layout>
      <md-layout md-flex="50">
        <news-list v-if="news && news.length" v-bind:news="news" v-bind:selected="selected"></news-list>
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
            this.news = response.data.items.slice(0, 9)
            this.item = this.news[this.selected]
            setInterval(() => {
              this.selected = this.selected + 1 >= this.news.length ? 0 : this.selected + 1
              this.item = this.news[this.selected]
            }, 20000)
          })
      }
    }
  }
</script>

<style scoped lang="scss">
  .news {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;

    > div:first-child {
      padding-right: 4px;
    }
    > div:last-child {
      padding-left: 4px;
    }
  }
</style>
