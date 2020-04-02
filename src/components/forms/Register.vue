<template>
  <div>
    <form @submit.prevent="submit()" class="flex flex-col">
      <div class="my-1">
        <label for="username" class="leading-none">Username:</label>
        <input required v-model="formData.username" name="username" type="text" class="input block w-full p-2">
      </div>
      <div class="my-1">
        <label for="email" class="leading-none">Email Address:</label>
        <input required v-model="formData.email" name="email" type="email" class="input block w-full p-2">
      </div>
      <div class="my-1">
        <label for="password" class="leading-none">Password:</label>
        <input required v-model="formData.password" name="password" type="password" class="input block w-full p-2">
      </div>
      <div><input v-model="formData.ownsCAH" type="checkbox"><label> I own a copy of Cards Against Humanity</label></div>
      <button class="button my-2 p-3">Register</button>
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
        email: '',
        ownsCAH: false
      },
    }
  },

  methods: {
    submit() {
      console.log("TODO: register form submit." + JSON.stringify(this.formData) + " " + this.passwordCheck)
      //TODO Axios call to register. This doesn't affect application state, so it isn't handled in vuex.
    },
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