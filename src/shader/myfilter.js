PIXI.filters.MyFilter = class extends PIXI.Filter {
    constructor() {
      const fragmentSrc = `
        precision mediump float;
        uniform float time;
        uniform vec2 resolution;
    
        void main() {
            vec2 uv = gl_FragCoord.xy / resolution.xy;
            gl_FragColor = vec4(uv,0.5+0.5*sin(time),1.0);
        }
      `;
  
      super(
        null, // vertex shader
        fragmentSrc, // fragment shader
        {} // uniforms
      );
    }
  };