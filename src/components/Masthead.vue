<template>
  <div>
    <nav class="masthead">
      <div class="container mx-auto flex">
        <div class="px-3 py-3 flex-1">
          <router-link to="/">Trigger Warning</router-link>
        </div>
        <div class="px-3 py-3 flex-0">
          <router-link to="/about">About</router-link>
        </div>
        <div class="px-3 py-3 flex-0">
          <router-link to="/about">Options</router-link>
        </div>
        <div class="px-3 py-3 flex-0">
          <router-link to="/about">Log Out</router-link>
        </div>
      </div>
    </nav>
    <div class="masthead-decoration">
      <img src="/gun-masthead.svg" style="width: 160px; transform: translate(-24px, -2px);">
    </div>
  
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.masthead {
  z-index: 10;
  max-height: 48px;
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