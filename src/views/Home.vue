<template>
  <default>
    <div class="px-2 w-full md:w-1/2 lg:w-1/3 mx-auto mt-16" style=" z-index: 10;">
      <!-- Site Heading -->
      <img src="gun-full.svg" class="w-1/4 mx-auto">
      <h1 class="block w-full">
        <span class="block w-full text-center text-6xl leading-none">Trigger</span>
        <span class="block w-full text-center text-4xl leading-none">Warning</span>
      </h1>

      <!-- Anyone can join a room. -->
      <div class="flex flex-col mt-20 border p-8">
        <h2 class="block w-full text-center text-3xl leading-none">Join A Room</h2>
        <label for="roomid" class="leading-none">Room ID:</label>
        <input name="roomid" type="text" placeholder="A1234" class="input mb-2 p-3 text-center font-bold text-3xl uppercase"> <!--TODO force uppercase output. -->
        <button class="button my-2 p-3">Join Room</button>
      </div>

      <!-- If the user is logged in, they can create a new room. -->
      <div v-if="loggedIn" class="flex flex-col mt-12 border p-8">
        <h2 class="block w-full text-center text-3xl leading-none">Create A Room</h2>
        <button class="button my-2 p-3">Create Room</button>
      </div>

      <!-- Otherwise, tell them to sign in / create an account. -->
      <div v-else class="flex flex-col mt-12 border p-8">
        <h2 class="block w-full text-center text-3xl leading-none">Log In to Create Rooms</h2>
        <button class="button my-2 p-3">Log In</button>
        <button class="button my-2 p-3">Create Account</button>
      </div>
    </div>
  </default>
</template>

<script>
import Default from '@/views/templates/Default'

export default {
  name: 'Home',
  data() {
    return {
      loggedIn: false // TODO Store logged-in status in vuex.
    }
  },

  components: {
    'default': Default
  }
}
</script>

<style scoped>
  .button {
    background-color: #2b2e4a;
    color: #ffffff;
    transition: background-color 0.25s ease;
  }

  .button:hover {
    background-color: #576c7d;
  }

  .input {
    border: 1px solid #2b2e4a;
  }

  .input:focus {
    border: 1px solid #576c7d;
  }

  .border {
    border-color: #2b2e4a;
  }
</style>