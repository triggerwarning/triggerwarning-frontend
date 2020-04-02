<template>
  <div>
    <nav class="masthead great-western">
      <div class="container mx-auto flex">
        <div class="px-3 py-3 flex-1 ">
          <router-link to="/" class="hidden md:block">Trigger Warning</router-link>
          <router-link to="/" class="md:hidden">TW</router-link>
        </div>
        <div class="px-3 py-3 flex-0">
          <router-link to="/about">About</router-link>
        </div>
        <div v-if="loggedIn" class="px-3 py-3 flex-0">
          <router-link to="/about">Account</router-link>
        </div>
        <div v-if="loggedIn" class="px-3 py-3 flex-0">
          <button @click="logOut()">Log Out</button>
        </div>
      </div>
    </nav>
    <div v-if="displayGun" class="masthead-decoration">
      <img src="/gun-masthead.svg" style="width: 160px; transform: translate(-24px, -2px);">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: true, // TODO store logged-in state in vuex.
      displayGun: false
    }
  },

  methods: {
    logOut() {
      this.$store.dispatch('logOut')
    }
  }
}
</script>

<style lang="scss">
.masthead {
  z-index: 10;
  //max-height: 48px;
  background-color: #2b2e4a;
  color: #ffffff;
}

.masthead-decoration {
  position: relative;
  height: 0px;
  overflow-y: visible;
  user-select: none;
}
</style>