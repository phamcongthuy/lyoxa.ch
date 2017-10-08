import Vue from 'vue'
import KonamiCode from 'vue-konami-code'

Vue.use(KonamiCode, {callback: function () {
  window.location.assign('discotime')
}})
