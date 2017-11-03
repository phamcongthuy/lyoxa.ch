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
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="row">
            <div class="col-md-4">
              <img class="card-img-top" src="/img/partenaires/collectif-nocturne.jpg" alt="Collectif nocturne pour une ville riche, vivante et diversifiée.">
            </div>
            <div class="col">
              <div class="d-md-none border border-bottom-0 border-right-0 border-left-0"></div>
              <div class="card-body">
                <h4 class="card-title">Collectif nocturne pour une ville riche, vivante et diversifiée.</h4>
                <p class="card-text">
                  Le Collectif pour une vie nocturne riche, vivante et diversifiée est une association qui défend une vie nocturne de qualité pour les jeunes à Genève. Elle rassemble plus de 90 associations membres ainsi qu’une quarantaine de membres individuels. Créé le 17 février 2015 par 17 associations constituantes en tant que rassemblement associatif autour d’une prise de position commune, le Collectif nocturne lançait un mois plus tard une pétition « pour une vie nocturne riche, vivante et diversifiée » qui dénonçait le manque d’offre nocturne adéquat et la tendance répressive de l’action politique qui met à mal le cadre approprié à l’apprentissage de la culture de la nuit par les jeunes. En février 2017, la publication d’un « Plaidoyer pour une vie nocturne riche, vivante et diversifiée » a permis de développer la vision et le discours politique de l’association sur la vie nocturne genevoise. Parallèlement à son action politique, le Collectif nocturne conduit une action événementielle allant dans le sens de ses buts et revendications comme le projet Terreau.
                </p>
              </div>
              <div class="card-footer bg-white border-0">
                <a href="http://collectif-nocturne.ch/" class="btn btn-primary">Toutes les infos ici</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
