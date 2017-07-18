<template>
  <div id="app" v-bind:style="style">
    <router-view v-if="ready"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'news',
      style: {},
      language: '',
      primaryColor: '',
      ready: false
    }
  },
  created () {
    this.load()
  },
  methods: {
    load () {
      this.axios.get('/subscriptions/current')
      .then((response) => {
        let subscription = response.data
        this.primaryColor = subscription.theme.primaryColor
        this.defaultLanguage = subscription.defaultLanguage
        this.ready = true
      })
    }
  }
}
</script>

<style>
  body {
    overflow: hidden;
  }
</style>
