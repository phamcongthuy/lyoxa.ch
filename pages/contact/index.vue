<template>
  <section class="container">
    <h1>Contact</h1>

    <h2>Nouvelle demande</h2>
    <div class="row">
      <div class="col">
        <p class="lead">Merci de nous faire parvenir toutes vos demandes via le <nuxt-link to="/formulaire-de-demande/">formulaire de demande</nuxt-link>.</p>
        <nuxt-link class="btn btn-primary btn-lg" to="/formulaire-de-demande/" role="button">Formulaire de demande</nuxt-link>
      </div>
    </div>

    <h2 class="mt-5">Association Lyoxa</h2>
    <div class="row">
      <div class="col-lg-6">
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
          email="celia.sepe@lyoxa.ch"
          phone="+41 79 226 37 78">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Stéphanie Catterson"
          title="Trésorière"
          photo="/img/equipe/catterson-stephanie.jpg"
          email="stephanie.catterson@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Bruno Hausler"
          title="Consultant"
          photo="/img/equipe/hausler-bruno.jpg"
          email="bruno.hausler@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Clémence Aellen"
          title="Consultante"
          photo="/img/equipe/aellen-clemence.jpg"
          email="clemence.aellen@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Guillaume Tschuy"
          title="Consultant"
          photo="/img/equipe/tschuy-guillaume.jpg"
          email="guillaume.tschuy@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Hélène Conradin"
          title="Déléguée à la formation"
          photo="/img/equipe/conradin-helene.jpg"
          email="helene.conradin@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Jules Lorenzi"
          title="Consultant"
          photo="/img/equipe/lorenzi-jules.jpg"
          email="jules.lorenzi@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Julien Grünhagel"
          title="Délégué IT"
          photo="/img/equipe/grunhagel-julien.jpg"
          email="julien.grunhagel@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Louis Mégroz"
          title="Délégué aux infrastructures"
          photo="/img/equipe/megroz-louis.jpg"
          email="louis.megroz@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Marc Delacrétaz"
          title="Délégué à la logistique"
          photo="/img/equipe/delacretaz-marc.jpg"
          email="marc.delacretaz@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Philippine Coutau"
          title="Consultante"
          photo="/img/equipe/coutau-philippine.jpg"
          email="philippine.coutau@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Robin Staehli"
          title="Consultant"
          photo="/img/equipe/staehli-robin.jpg"
          email="robin.staehli@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Sophie Ratcliff"
          title="Déléguée à la gestion des demandes"
          photo="/img/equipe/ratcliff-sophie.jpg"
          email="sophie.ratcliff@lyoxa.ch"
          phone="+41 76 615 87 33">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Thibaud Mabut"
          title="Délégué à la communication"
          photo="/img/equipe/mabut-thibaud.jpg"
          email="thibaud.mabut@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Titouan Garnier"
          title="Consultant"
          photo="/img/equipe/garnier-titouan.jpg"
          email="titouan.garnier@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Youri Bernet"
          title="Consultant"
          photo="/img/equipe/bernet-youri.jpg"
          email="youri.bernet@lyoxa.ch">
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
