<template>
  <div>
    <form @submit.prevent="submit()" class="flex flex-col">
      <div class="my-1">
        <label for="username" class="leading-none">Username:</label>
        <input required v-model="formData.username" name="username" type="text" class="input block w-full p-2">
      </div>
      <div class="my-1">
        <label for="password" class="leading-none">Password:</label>
        <input required v-model="formData.password" name="password" type="password" class="input block w-full p-2">
      </div>
      <button @click="submit()" class="button my-2 p-3">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: '',
      }
    }
  },

  methods: {
    submit() {
      console.log("Login form submitted." + JSON.stringify(this.formData))
      this.$store.state.dispatch('logIn', this.formData.username, this.formData.username, undefined)
    }
  }
}
</script>

<style>
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