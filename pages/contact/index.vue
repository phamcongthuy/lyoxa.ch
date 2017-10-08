<template>
  <section class="container">
    <h1>Contact</h1>
    <div class="row justify-content-center">
      <div class="col-8 col-lg-6">
        <team
          name="Association Lyoxa"
          photo="/img/logo.svg"
          postal-code="CH-1200" locality="Genève"
          email="info@lyoxa.ch">
        </team>
      </div>
    </div>

    <h2 class="mt-5">Équipe</h2>
    <div class="row">
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Nicolas Tamayo Lopez"
          title="Président"
          photo="/img/equipe/tamayo-lopez-nicolas.jpg"
          address="Chemin des Marettes 1" postal-code="CH-1293" locality="Bellevue"
          email="nicolas.tamayo.lopez@lyoxa.ch"
          phone="+41 76 200 64 26">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Célia Sepe"
          title="Secrétaire Générale"
          photo="/img/equipe/sepe-celia.jpg"
          address="Rue Louis-Favre 31" postal-code="CH-1201" locality="Genève"
          email="celia.sepe@lyoxa.ch"
          phone="+41 79 226 37 78">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          name="Stéphanie Catterson"
          title="Trésorière"
          photo="/img/equipe/catterson-stephanie.jpg"
          address="Route de St-Cergue 22" postal-code="CH-1273" locality="Arzier"
          email="stephanie.catterson@lyoxa.ch"
          phone="+41 79 710 05 27">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          name="Thibaud Mabut"
          title="Délégué à la communication"
          photo="/img/equipe/mabut-thibaud.jpg"
          address="Rampe du Pont-Rouge 7a" postal-code="CH-1213" locality="Petit-Lancy"
          email="thibaud.mabut@lyoxa.ch"
          phone="+41 76 375 81 56">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          name="Marc Delacrétaz"
          title="Délégué à la logistique"
          photo="/img/equipe/delacretaz-marc.jpg"
          address="Chemin de la Menuiserie 31" postal-code="CH-1293" locality="Bellevue"
          email="marc.delacretaz@lyoxa.ch"
          phone="+41 79 580 32 42">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          name="Louis Mégroz"
          title="Délégué aux infrastructures"
          photo="/img/equipe/megroz-louis.jpg"
          address="Passage Daniel Baud-Bovy 10" postal-code="CH-1205" locality="Genève"
          email="louis.megroz@lyoxa.ch"
          phone="+41 76 343 60 74">
        </team>
      </div>
    </div>
  </section>
</template>

<script>
import Team from '~/components/Team'
export default {
  head () {
    return {
      title: 'Contact - Lyoxa',
      meta: [
        { hid: 'description', name: 'description', content: 'Contacter Lyoxa' },
        { property: 'og:url', content: 'https://lyoxa.ch/contact/', hid: 'og_url' },
        { property: 'og:title', content: 'Lyoxa - Contact', hid: 'og_title' },
        { property: 'og:description', content: 'Contacter Lyoxa', hid: 'og_description' }
      ]
    }
  },
  components: {
    Team
  }
}
</script>
