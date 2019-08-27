<template lang="pug">
</template>

<script>
import * as PIXI from 'pixi.js'

export default {
  data() {
    return {
    }
  },
  mounted() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const app = new PIXI.Application(width, height);
    document.body.appendChild(app.view);

    const shaderFrag = `
      precision mediump float;
      uniform float iTime;
      uniform vec2 iResolution;
    
      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        gl_FragColor = vec4(uv, 0.5 + 0.5 * sin(iTime), 1.0);
      }
    `;

    const container = new PIXI.Container();
    container.filterArea = app.screen;
    app.stage.addChild(container);

    const filter = new PIXI.Filter(null, shaderFrag);
    filter.uniforms.iResolution = [width, height, 1.0];
    filter.uniforms.iTime = 1.0;
    container.filters = [filter];

    app.ticker.add(function() {
      filter.uniforms.iTime += app.ticker.elapsedMS * 0.001;
    });

    
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>

</style>

