<template>
  <md-card class="news-detail">
    <md-card-media md-ratio="16:9" v-bind:style="style" class="bg-image">
    </md-card-media>
    <md-card-header>
      <div class="md-title">
        <md-progress :md-progress="progress"></md-progress>
        {{content.title}}
      </div>
      <div class="md-subhead">{{content.intro}}</div>
    </md-card-header>
  </md-card>
</template>

<script>
  export default {
    props: ['item', 'progress'],
    data () {
      return {
        style: {},
        loading: true,
        content: {}
      }
    },
    created () {
      this.content = this.item.contents.en
      if (this.item.hasBannerImage) {
        this.style = {
          backgroundImage: `url(${this.$baseURL}/news/${this.item.id}/images/banner/16x9?access_token=${this.$token})`
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .news-detail {
    width: 100%;
    .bg-image {
      background-color: #2c3e50;
      background-image: url('./../assets/no-background-image.jpg');
      background-position: center center;
      background-size: cover;
    }
  }
</style>
