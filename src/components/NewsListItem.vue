<template>
  <div v-bind:style="styles.wrapper" class="wrapper news-list-item" v-bind:class="selected === index ? 'active' : ''">
    <h2 class="title">{{content.title}}</h2>
    <div>
      <md-chip v-for="(con, index) in item.contents" v-model="index" :key="index">
        {{index}}
      </md-chip>
      <md-chip v-for="(channel, index) in item.channels" :key="index">
        {{channel.name}}
      </md-chip>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item', 'selected', 'index'],
    data () {
      return {
        content: {},
        styles: {
          wrapper: {
            height: '10%'
          }
        }
      }
    },
    created () {
      this.content = this.item.contents.en
    }
  }
</script>

<style scoped lang="scss">

  .news-list-item:first-child {
    border-top: 0px solid black;
  }

  .news-list-item {

    &.active {
      background-color: lightgray;
    }

    margin: 9px 0;
    padding: 0 9px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid black;

    .title {
      overflow: hidden;
    }
  }
</style>
