<template>
  <section class="container">
    <h1>Partenaires</h1>

    <div class="row">
      <div class="col-lg-4 col-md-6 col-12">
        <partenaire
          title="laruche"
          description="Présence digitale, développement d'applications et de sites web."
          buttonLink="https://laruche.io"
          logo="laruche.svg">
        </partenaire>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <partenaire
          title="Hypersquad"
          description="Studio de graphisme pluridisciplinaire et nouveaux médias."
          buttonLink="https://hypersquad.ch"
          logo="hypersquad.svg">
        </partenaire>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <partenaire
          title="Bassment!"
          description="Association promouvant la culture et son accessibilité."
          buttonLink="https://bassment.ch"
          logo="bassment.svg">
        </partenaire>
      </div>
      <div class="col-lg-4 col-md-6 col-12">
        <partenaire
          title="DJ-R"
          description="Location de sonorisation et d'éclairage pour votre événement."
          buttonLink="http://www.dj-r.ch/"
          logo="dj-r.svg">
        </partenaire>
      </div>
    </div>

    <!-- <div class="card-deck">
      <partenaire
        title="laruche"
        description="Présence digitale, développement d'applications et de sites web."
        buttonLink="https://laruche.io"
        logo="laruche.svg">
      </partenaire>
      <partenaire
        title="Hypersquad"
        description="Studio de graphisme pluridisciplinaire et nouveaux médias."
        buttonLink="https://hypersquad.ch"
        logo="hypersquad.svg">
      </partenaire>
      <partenaire
        title="Bassment!"
        description="Association promouvant la culture et son accessibilité."
        buttonLink="https://bassment.ch"
        logo="bassment.svg">
      </partenaire>
    </div>
    <div class="card-deck">
      <partenaire
        title="DJ-R"
        description="Location de sonorisation et d'éclairage pour votre événement."
        buttonLink="http://www.dj-r.ch/"
        logo="dj-r.jpg">
      </partenaire>
    </div> -->
  </section>
</template>

<script>
import Partenaire from '~/components/Partenaire.vue'

export default {
  components: {
    Partenaire
  },
  head () {
    return {
      title: 'Partenaires - Lyoxa',
      meta: [
        { hid: 'description', name: 'description', content: 'Partenaires' },
        { property: 'og:url', content: 'https://lyoxa.ch/partenaire/', hid: 'og_url' },
        { property: 'og:title', content: 'Lyoxa - Les partenaires', hid: 'og_title' },
        { property: 'og:description', content: 'Les partenaires de Lyoxa.', hid: 'og_description' }
      ]
    }
  }
}
</script>
