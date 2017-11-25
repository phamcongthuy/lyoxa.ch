<template>
  <section class="container">
    <h1>Formulaire de demande</h1>
    <contact-form/>
  </section>
</template>

<script>
import ContactForm from '~/components/ContactForm'

export default {
  head () {
    return {
      title: 'Contact - Lyoxa',
      meta: [
        { hid: 'description', name: 'description', content: 'Formulaire de demande' },
        { property: 'og:url', content: 'https://lyoxa.ch/formulaire-de-demande/', hid: 'og_url' },
        { property: 'og:title', content: 'Lyoxa - Formulaire de demande', hid: 'og_title' },
        { property: 'og:description', content: 'Formulaire de demande', hid: 'og_description' }
      ]
    }
  },
  components: {
    ContactForm
  }
}
</script>
