<template>
  <div class="amazing-app">
   <div class="header">
   <h1>{{ name }}</h1>
    <p>created by {{ author }}</p>
   </div>
    <svg id="amazing"></svg>
  </div>
</template>

<script>

export default {
  name: 'Shapes',
  props: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.amazing-app .header {
  width: 100%;
  position: fixed;
  top: 0;
  text-align: center;
}

</style>