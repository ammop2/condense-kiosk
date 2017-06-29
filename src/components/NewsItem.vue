<template>
  <div v-bind:id="'item-' + id" class="item" v-bind:class="{ active: id === selectedIndex}"
       v-bind:style="style">
    <span class="language-code">{{content.language}}</span>
    <h1>{{content.title}}</h1>
    <span class="language-code">{{content.intro}}</span>
  </div>
</template>

<script>
  export default {
    props: ['item', 'id', 'selectedIndex'],
    name: 'item',
    computed: {
      style () {
        console.log(this.$token)
        if (this.item && this.item.hasBannerImage) {
          return {
            backgroundColor: '#000',
            backgroundImage: `url(${this.$baseURL}/news/${this.item.id}/images/banner/16x9?access_token=${this.$token})`
          }
        } else {
          return {
            backgroundColor: '#532'
          }
        }
      },
      content () {
        let languageCodes = Object.keys(this.item.contents)
        return this.item.contents[languageCodes[0]]
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
    padding:  8em 1em 0;
    background-color: #120103;
    background-position: center center;
    background-size: cover;
    transition: left 0s .75s;
  }
  h1 {
    opacity: 0;
    transform: translateY(100%);
    transition: transform .5s .5s, opacity .5s;
  }
  [id^="item"].active {
    left: 0;
    z-index: 100;
    transition: left .65s ease-out;
  }
  [id^="item"].active h1 {
    opacity: 1;
    transform: translateY(0);
    transition: all .5s .5s;
  }
  .language-code {
    color: #abc;
  }
</style>
