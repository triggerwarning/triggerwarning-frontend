<template>
  <div>
    <masthead></masthead>
    <slot></slot>
  </div>
</template>

<script>
import Masthead from '@/components/Masthead'

export default {

  components: {
    'masthead': Masthead
  }

}
</script>

<style>

</style>