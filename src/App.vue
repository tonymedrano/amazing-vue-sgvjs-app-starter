<template>
  <div id="app">
    <Amazing name="Amazing Application v1.0.0" author="Tony Medrano"/>
  </div>
</template>

<script>

import Amazing from './components/amazing/Amazing.vue'

export default {
  name: 'app',
  components: {
    Amazing
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
