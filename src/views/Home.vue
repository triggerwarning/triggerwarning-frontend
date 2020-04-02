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
        <h2 class="block w-full text-center text-3xl leading-none mb-8">Join A Room</h2>
        <label for="roomid" class="leading-none">Room ID:</label>
        <input name="roomid" type="text" placeholder="A1234" class="input mb-2 p-3 text-center font-bold text-3xl uppercase"> <!--TODO force uppercase output. -->
        <button class="button my-2 p-3">Join Room</button>
      </div>

      <!-- If the user is logged in, they can create a new room. -->
      <div v-if="loggedIn" class="flex flex-col mt-12 border p-8">
        <h2 class="block w-full text-center text-3xl leading-none mb-8">Create A Room</h2>
        <button class="button my-2 p-3">Create Room</button>
      </div>

      <!-- Otherwise, tell them to sign in / create an account. -->
      <div v-else class="flex flex-col mt-12 mb-40 border p-8">
        <h2 class="block w-full text-center text-3xl leading-none mb-8">
          <span v-if="showLogin">Log In</span>
          <span v-else>Register</span>
          to Create Rooms</h2>
        <login-form v-if="showLogin"></login-form>
        <register-form v-else></register-form>
        <button v-if="showLogin" @click="showLogin = !showLogin" class="text-left">Don't have an account?</button>
        <button v-else @click="showLogin = !showLogin" class="text-left">Already have an account?</button>
      </div>
    </div>
  </default>
</template>

<script>
import Default from '@/views/templates/Default'
import Login from '@/components/forms/Login'
import Register from '@/components/forms/Register'

export default {
  name: 'Home',
  data() {
    return {
      showLogin: true,
      loggedIn: false // TODO Store logged-in status in vuex.
    }
  },

  components: {
    'default': Default,
    'login-form': Login,
    'register-form': Register
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