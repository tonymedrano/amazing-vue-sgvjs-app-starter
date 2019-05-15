import * as SVG from 'svg.js'
import 'svg.filter.js'
import 'svg.easing.js'
/* import 'svg.select.js'
import 'svg.path.js' */

export default {
  install: Vue => {
    Vue.prototype.$svg = SVG;
  }
};
