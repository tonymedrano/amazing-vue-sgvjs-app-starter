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
  name: 'Amazing',
  props: {
    name: String,
    author: String
  },
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  mounted() {
    const draw = this.$svg('amazing').size(this.width, this.height) //. that's the holy grail for svg components.
    this.$nextTick(() => {
      this.run(draw)
    });
  },
  methods: {
    run(draw) {

      const gradient = draw.gradient('linear', (stop) => {
        stop.at(0, '#799abc')
        stop.at(0.5, '#ccc')
        stop.at(1, '#e88081')
      })
    const circle = draw.circle(100)
    circle.attr({
        cx: '50%',
        cy: '50%',
        r: 0,

    }).fill(gradient).animate({ ease: '<', delay: 250, duration: 6000 })
        .attr({ r: 1220 })

    circle.filter((filter) => {
        filter.blend(
            filter.source,
            filter.offset(10, 5).in(filter.sourceAlpha).gaussianBlur(3)

        );

        filter.size('200%', '200%').move('-50%', '-50%');
        filter.colorMatrix('matrix', [.343, .669, .119, 0, 0
            , .249, .626, .130, 0, 0
            , .172, .334, .111, 0, 0
            , .000, .000, .000, 1, 0])
    })
    },
  }
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