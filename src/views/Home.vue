<template>
  <no-masthead>
    <div class="w-full" style="z-index:-10; margin-top:-1vh; margin-left:-1vw;">
      <img alt="Trigger Warning Gun" src="/gun-corner.svg" class="w-1/2" >
    </div>
    <div class="px-2 w-full md:w-1/2 mx-auto mt-20" style=" z-index: 10;">
      <div class="flex flex-col">
        <button class="m-1 flex-auto px-8 py-3 rounded-lg bg-white">Create a Room</button>
        <button class="m-1 flex-auto px-8 py-3 rounded-lg bg-white">Join a Room</button>
      </div>
    </div>
  </no-masthead>
</template>

<script>
import NoMasthead from '@/views/templates/NoMasthead'

export default {
  name: 'Home',
  components: {
    'no-masthead': NoMasthead
  }
}
</script>
