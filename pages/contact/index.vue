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
          address="1 Chemin des Marettes" postal-code="CH-1293" locality="Bellevue"
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
          address="31 Rue Louis-Favre" postal-code="CH-1201" locality="Genève"
          email="celia.sepe@lyoxa.ch"
          phone="+41 79 226 37 78">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          name="Stéphanie Catterson"
          title="Trésorière"
          photo="/img/equipe/catterson-stephanie.jpg"
          address="22 Route de St-Cergue" postal-code="CH-1273" locality="Arzier"
          email="stephanie.catterson@lyoxa.ch"
          phone="+41 79 710 05 27">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          name="Thibaud Mabut"
          title="Délégué à la communication"
          photo="https://unsplash.it/200/300?image=883"
          address="7a Rampe du Pont-Rouge" postal-code="CH-1213" locality="Petit-Lancy"
          email="thibaud.mabut@lyoxa.ch"
          phone="+41 76 375 81 56">
        </team>
      </div>
    </div>
  </section>
</template>

<script>
import Team from '~components/Team'
export default {
  head () {
    return {
      title: 'Contact - Lyoxa',
      meta: [
        { hid: 'description', name: 'description', content: 'Contacter Lyoxa' }
      ]
    }
  },
  components: {
    Team
  }
}
</script>
