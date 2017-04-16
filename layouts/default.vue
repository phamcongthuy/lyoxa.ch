<template>
  <div>
    <lyoxa-navbar/>
    <nuxt/>
    <lyoxa-footer/>
  </div>
</template>

<script>
import LyoxaFooter from '~components/Footer.vue'
import LyoxaNavbar from '~components/Navbar.vue'

export default {
  components: {
    LyoxaNavbar,
    LyoxaFooter
  }
}
</script>
