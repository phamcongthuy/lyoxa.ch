<template>
  <div style="margin-top: -3rem;">
    <div class="jumbotron jumbotron-fluid jumbotron__home text-white">
      <div class="container">
        <h1 class="display-4">Consulting associatif</h1>
        <p class="lead col-md-8 p-0">Lyoxa est une plateforme de soutien, d’entraide et de collaboration entre les différents acteurs liés à la vie associative dans le Canton de Genève.</p>
        <p class="lead mt-5">
          <nuxt-link class="btn btn-primary btn-lg" to="/services" role="button">Découvrir nos services</nuxt-link>
        </p>
      </div>
    </div>
    <section class="container">
      <h1>Lyoxa</h1>
      <p class="justify">LYOXA est né de multiples constats dressés par l’expérience de terrain de plusieurs de ses fondateurs.</p>
      <p class="justify">Dès lors, nous avons voulu créer une structure visant à fournir les <b>clés de compréhension</b> nécessaires au fonctionnement associatif. Par le soutien à l’organisation de manifestations ainsi qu’à la création et à la gestion d’associations, nous voulons permettre à tout à chacun de s’engager dans le monde associatif afin de collectivement contribuer à l’amélioration de notre société.</p>
      <nuxt-link class="btn btn-primary btn-lg mt-3" to="/lyoxa" role="button">En savoir plus sur Lyoxa</nuxt-link>
    </section>
    <div class="bg-faded py-5 mt-5">
      <section class="container">
        <h1>Services</h1>
        <p>Un ensemble de services sur mesure afin de vous conseiller au mieux dans vos démarches associatives.</p>
        <div class="row mt-5">
          <div class="col-lg mt-3 mt-lg-0">
            <service
              title="Aide à la rédaction de statuts"
              description="Ce service est destiné aux associations en formation. L’objectif est de guider les personnes qui ont pour volonté de se réunir en association dans la rédaction de leurs statuts. Leur indiquer les standards minimums, les points à ne pas oublier et les aider à rédiger des statuts qui correspondent à leurs besoins.">
            </service>
          </div>
          <div class="col-lg mt-3 mt-lg-0">
            <service
              title="Aide à la tenue de la trésorerie"
              description="Nous voulons proposer aux associations un accompagnement dans la tenue de leur trésorerie, être disponible pour répondre à leurs questions en la matière et prêter nos services en tant que vérificateurs de comptes pour les projets ou les exercices annuels. Nous offrirons également dans un second temps de petites formations en groupe visant à donner aux trésoriers des associations qui font appel à nos services les bases nécessaires pour la tenue d’une bonne comptabilité associative et/ou de projet.">
            </service>
          </div>
          <div class="col-lg mt-3 mt-lg-0">
            <service
              title="Coordination d’achats de matériel groupés"
              description="Par ce service, nous cherchons à coordonner l’achat de matériel usuellement nécessaire dans le cadre de manifestations. Les associations pourront ainsi bénéficier de tarifs préférentiels dus à des commandes en gros.">
            </service>
          </div>
        </div>
        <nuxt-link class="btn btn-primary btn-lg mt-5" to="/services" role="button">Voir tous nos services</nuxt-link>
      </section>
    </div>
    <section class="container mt-5">
      <h1>Besoin d'un conseil?</h1>
      <p class="justify">Nous mettons à votre service notre expérience pour toute demande.</p>
      <nuxt-link class="btn btn-primary btn-lg mt-3" to="/contact" role="button">Nous contacter</nuxt-link>
    </section>
  </div>
</template>

<script>
import Service from '~components/Service.vue'

export default {
  head () {
    return {
      title: 'Lyoxa - Consulting associatif',
      meta: [
        { hid: 'description', name: 'description', content: 'Lyoxa est une plateforme de soutien, d’entraide et de collaboration entre les différents acteurs liés à la vie associative dans le Canton de Genève.' },
        { property: 'og:url', content: 'https://lyoxa.ch/', hid: 'og_url' },
        { property: 'og:title', content: 'Lyoxa - Consulting associatif', hid: 'og_title' },
        { property: 'og:description', content: 'Lyoxa est une plateforme de soutien, d’entraide et de collaboration entre les différents acteurs liés à la vie associative dans le Canton de Genève.', hid: 'og_description' },
        { property: 'og:image', content: 'https://lyoxa.ch/img/home/hero-geneve.jpg', hid: 'og_image' }
      ]
    }
  },
  components: {
    Service
  }
}
</script>
