<template>
  <div v-bind:id="'item-' + id" class="item" v-bind:class="{ active: id === selectedIndex}">
    <div class="simple-template" v-bind:style="style.storyImage">
      <div class="content" v-bind:style="style.content">
        <h1 v-bind:style="style.mainTitle">{{item.contents[$defaultLanguage].title}}</h1>
        <h2 class="intro">{{item.contents[$defaultLanguage].intro}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item', 'id', 'selectedIndex'],
    name: 'item',
    data () {
      return {
        style: {}
      }
    },
    created () {
      if (this.item && this.item.hasBannerImage) {
        this.style = {
          storyImage: {
            backgroundColor: '#000',
            backgroundImage: `url(${this.$baseURL}/news/${this.item.id}/images/banner/16x9?access_token=${this.$token})`
          },
          content: {
            backgroundColor: `rgba(${parseInt(this.$primaryColor.substr(1, 2), 16)}, ${parseInt(this.$primaryColor.substr(3, 2), 16)}, ${parseInt(this.$primaryColor.substr(5, 2), 16)}, 0.9)`
          },
          mainTitle: {
            borderBottomColor: this.$secondaryColor
          }
        }
      }
    }
  }
</script>

<style scoped>
  .item
  {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 10;
    background-color: #120103;
    transition: left 0s 2s;
  }
  [id^="item"].active {
    left: 0;
    z-index: 100;
    transition: left 2s ease-out;
  }
  .simple-template {
    position: absolute;
    background-position: center center;
    background-size: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .content {
    opacity: 0;
    transform: translateY(100%);
    transition: transform .5s .5s, opacity .5s;
    position: absolute;
    bottom: 1em;
    left: 1em;
    right: 1em;
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0, 0.8);
    padding: 1em;
    align-items: center;
  }
  h1 {
    margin-bottom: 0;
    border-bottom-style: solid;
    border-bottom-width: 1.5px;
    padding: 0 1em 5px 1em;
  }
  h2 {
    padding-top: 5px;
    margin-top: 0;
  }
  [id^="item"].active .content {
    opacity: 1;
    transform: translateY(0);
    transition: all .5s .5s;
    transition-delay: 1.1s;
  }
</style>
