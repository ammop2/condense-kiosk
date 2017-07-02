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
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  @keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  .item
  {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #120103;
    display: flex;

    -webkit-animation: fadeout 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadeout 2s; /* Firefox < 16 */
    -ms-animation: fadeout 2s; /* Internet Explorer */
    -o-animation: fadeout 2s; /* Opera < 12.1 */
    animation: fadeout 2s;
  }
  [id^="item"].active {
    z-index: 100;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
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
    position: absolute;
    bottom: 1em;
    left: 1em;
    right: 1em;
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
</style>
