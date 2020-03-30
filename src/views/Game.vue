<template>
  <default>
    <div class="fullscreen border border-green-500 w-full">
      <p5-sketch></p5-sketch>
    </div>
  </default>
</template>

<script>
import P5Sketch from '@/components/utilities/P5Sketch'
import Default from '@/views/templates/Default'

export default {

  components: {
    'default': Default,
    'p5-sketch': P5Sketch
  }

}
</script>

<style>
  .fullscreen {
    height: calc(100vh - 48px);
  }
</style>