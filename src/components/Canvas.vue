<template lang="pug">
  .div
</template>

<script>
import * as PIXI from 'pixi.js'

export default {
  data() {
    return {
    }
  },
  mounted() {
    this.app = new PIXI.Application({
      transparent: true,
      antialias: true
    });
    this.$el.appendChild(this.app.view);
    this.app.renderer.view.style.display = "block";
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(window.innerWidth, window.innerHeight);
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>

</style>

