<template>
  <div v-bind:id="'item-' + id" class="item" v-bind:class="{ active: id === selectedIndex}"
       v-bind:style="style">
    <div class="content-wrapper" v-if="item">
      <div v-for="(content, index) in item.contents">
        <h1 class="title">{{content.title}}</h1>
        <span class="intro">{{content.intro}}</span>
        <span v-html="content.body"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['itemId', 'id', 'selectedIndex'],
    name: 'item',
    data () {
      return {
        item: null,
        style: {
          backgroundColor: '#532'
        }
      }
    },
    created () {
      this.loadContents()
    },
    methods: {
      loadContents () {
        this.axios.get(`/news/${this.itemId}`)
          .then((response) => {
            this.item = response.data
            if (this.item.hasBannerImage) {
              this.style = {
                backgroundColor: '#000',
                backgroundImage: `url(${this.$baseURL}/news/${this.item.id}/images/banner/16x9?access_token=${this.$token})`
              }
            }
            this.$emit('bodyloaded', this.id)
          })
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
    background-position: center center;
    background-size: cover;
    transition: left 0s 3s;
  }
  h1 {
    margin: 0;
  }
  [id^="item"].active {
    left: 0;
    z-index: 100;
    transition: left 3s ease-out;
  }
  .content-wrapper {
    opacity: 0;
    color: black;
    transform: translateY(100%);
    transition: transform .5s .5s, opacity .5s;
  }
  [id^="item"].active .content-wrapper {
    opacity: 1;
    transform: translateY(0);
    transition: all 1s .5s;
    transition-delay: 1.1s;
  }
  .content-wrapper {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 2em;
    background: rgba(255,255,255,0.9);
    padding: 1em;
  }
  .intro {
    font-style: italic;
  }
</style>
