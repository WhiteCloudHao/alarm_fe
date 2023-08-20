<template>
  <div id="app" class="font-sans">
    <!-- Default Style -->
    <div class="font-sans text-textColor">
      <router-view />
    </div>
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite';

export default {
  name: 'App',
  mounted() {
    initFlowbite();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
</style>
