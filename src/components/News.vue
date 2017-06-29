<template>
  <div class="news">
    <list v-bind:news="news"></list>
    <h3>testw</h3>
  </div>
</template>

<script>
  export default {
    name: 'news',
    data () {
      return {
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
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #fffaaa;
  }
</style>

