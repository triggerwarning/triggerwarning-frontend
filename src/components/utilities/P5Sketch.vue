<!-- Each instance of the P5Sketch component is a separate P5 Instance. -->
<!-- Pass a p5 sketch instance to this component ( :sketch="mySketch" ) and it will render. -->
<!-- For more on P5 Instances: https://github.com/processing/p5.js/wiki/Global-and-instance-mode -->
<template>
  <figure ref="sketch" :id="containerId" class="w-full h-full"></figure>
</template>

<script>
export default {

  data() {
    return {
      instance: undefined,
    }
  },

  computed: {
    sketchWidth() {
      return this.$refs.sketch.offsetWidth
    },
    sketchHeight() {
      return this.$refs.sketch.offsetHeight
    }
  },

  props: {
    containerId: {
      type: String,
      default: "defaultP5"
    },
    sketch: {
      type: Function,
      default: (sketch) => { // Use this sketch as an example for your other sketches.
        sketch.setup = ()=>{ 
          sketch.createCanvas(200,200) 
          fillContainer()
        }
        sketch.draw = ()=>{
          let h = 2 // Define wave height.
          let message = 'No sketch was found!'
          sketch.clear()
          sketch.translate((sketch.width / 2) - 100, (sketch.height / 2) - 100)
          sketch.noStroke()
          sketch.fill(104, 211, 145) // Draw the sun.
          sketch.circle(100, 100, 64)
          sketch.rect(0, 114-h, 200, h)
          sketch.fill(255,255,255) // Cut out space for the water.
          sketch.rect(50, 114, 100, 50)
          sketch.fill(104, 211, 145)
          sketch.rect(110 + getNoise(1, 5), 120, 30 - getNoise(1, 5), h) // Top waves.
          sketch.rect(155, 120, 6 + getNoise(1.2, 3), h)
          sketch.rect(180 + getNoise(1.1, 5), 120, 6 + sketch.abs(getNoise(1.1, 3)), h)
          sketch.rect(65, 134, 38 + getNoise(2, 8), h) // Middle waves.
          sketch.rect(50 + getNoise(2.1, 3), 134, 6 + sketch.abs(getNoise(2.2, 3)), h)
          sketch.rect(36 + getNoise(2.4, 7), 134, 6 + sketch.abs(getNoise(2.3, 3)), h)
          sketch.rect(100 + getNoise(2.6, 4), 150, 24 - getNoise(2.6, 4), h) // Bottom waves.
          sketch.rect(136 + getNoise(2.7, 4), 150, 6, h)
          sketch.textAlign(sketch.CENTER) // Error Text
          sketch.textStyle(sketch.BOLD) // Error Text
          sketch.textSize(16)
          sketch.text(message, 100, 40)
        }
        sketch.windowResized = () => { 
          fillContainer()
        }

        // Function to generate a pseudo-random sine-like sequence of numbers from -m to +m.
        // Meant to simulate the height of a single point in the middle of the ocean at a given point in time.
        function getNoise(b, m) {
          b = b?b:0 // Time offset from 0
          m = m?m:1 // Magnitude
          return ((sketch.sin(((sketch.frameCount/50) + b) % sketch.TWO_PI) + ((sketch.noise((sketch.frameCount/100) + b/2) - 0.5) * 2))/2)*m
        }

        // Keeps the sketch the same size as its parent div. You should provide a containerId matching the element id here.
        function fillContainer() {
          sketch.resizeCanvas(document.getElementById("defaultP5").offsetWidth, document.getElementById("defaultP5").offsetHeight)
        }
      }
    }
  },

  mounted() {
    // See main.js, where $p5 is defined.
    // Should Look like: import p5 from 'p5'  \n  Object.defineProperty(Vue.prototype, '$p5', { value: p5 })
    this.instance = new this.$p5(this.sketch, this.$refs.sketch)
  }

}
</script>

<style lang="scss">
</style>