<template>
    <md-card class="news-list-item">
        <md-card-header v-bind:class="selected === index ? 'active' : ''">
            <div class="md-title">{{content.title}}</div>
            <div class="md-subhead">{{content.intro}}</div>
        </md-card-header>
    </md-card>
</template>

<script>
  export default {
    props: ['item', 'selected', 'index'],
    data () {
      return {
        content: {}
      }
    },
    created () {
      this.content = this.item.contents.en
    }
  }
</script>

<style scoped lang="scss">
  .news-list-item {
    padding: 5px 0;
    .active {
      border-left-color: #2c3e50;
      border-left-style: solid;
      border-left-width: 2px;
    }
  }
</style>
