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
          class="mb-5 mb-md-0"
          name="Stéphanie Catterson"
          title="Trésorière"
          photo="/img/equipe/catterson-stephanie.jpg"
          address="Route de St-Cergue 22" postal-code="CH-1273" locality="Arzier"
          email="stephanie.catterson@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Bruno Hausler"
          title="Consultant"
          photo="/img/equipe/hausler-bruno.jpg"
          address="16a chemin du Gué" postal-code="CH-1213" locality="Petit-Lancy"
          email="bruno.hausler@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Clémence Aellen"
          title="Consultante"
          photo="/img/equipe/aellen-clemence.jpg"
          address="32 chemin du Reposoir" postal-code="CH-1255" locality="Veyrier"
          email="clemence.aellen@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Guillaume Tschuy"
          title="Consultant"
          photo="/img/equipe/tschuy-guillaume.jpg"
          address="Chemin Ami-Argand 37" postal-code="CH-1290" locality="Versoix"
          email="guillaume.tschuy@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Hélène Conradin"
          title="Déléguée à la formation"
          photo="/img/equipe/conradin-helene.jpg"
          address="8 rue Bergalonne" postal-code="CH-1205" locality="Genève"
          email="helene.conradin@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Jules Lorenzi"
          title="Consultant"
          photo="/img/equipe/lorenzi-jules.jpg"
          address="Rue De L’Athénée 4" postal-code="CH-1205" locality="Genève"
          email="jules.lorenzi@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Julien Grünhagel"
          title="Délégué IT"
          photo="/img/equipe/grunhagel-julien.jpg"
          address="Avenue des Eidguenots 26" postal-code="CH-1203" locality="Genève"
          email="julien.grunhagel@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Louis Mégroz"
          title="Délégué aux infrastructures"
          photo="/img/equipe/megroz-louis.jpg"
          address="Passage Daniel Baud-Bovy 10" postal-code="CH-1205" locality="Genève"
          email="louis.megroz@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Marc Delacrétaz"
          title="Délégué à la logistique"
          photo="/img/equipe/delacretaz-marc.jpg"
          address="Chemin de la Menuiserie 31" postal-code="CH-1293" locality="Bellevue"
          email="marc.delacretaz@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Philippine Coutau"
          title="Consultante"
          photo="/img/equipe/coutau-philippine.jpg"
          address="Avenue de Miremont 13 bis" postal-code="CH-1206" locality="Genève"
          email="philippine.coutau@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Robin Staehli"
          title="Consultant"
          photo="/img/equipe/staehli-robin.jpg"
          address="Chemin de la Dîme 1" postal-code="CH-1294" locality="Genthod"
          email="robin.staehli@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Sophie Ratcliff"
          title="Déléguée à la gestion des demandes"
          photo="/img/equipe/ratcliff-sophie.jpg"
          address="Avenue Sainte-Cécile 27" postal-code="CH-1217" locality="Meyrin"
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
          address="Rampe du Pont-Rouge 7a" postal-code="CH-1213" locality="Petit-Lancy"
          email="thibaud.mabut@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Titouan Garnier"
          title="Consultant"
          photo="/img/equipe/garnier-titouan.jpg"
          address="Rue des Ecoles 41" postal-code="FR-01630" locality="Saint Genis-pouilly"
          email="titouan.garnier@lyoxa.ch">
        </team>
      </div>
      <div class="col-lg-6">
        <team
          class="mb-5 mb-md-0"
          name="Youri Bernet"
          title="Consultant"
          photo="/img/equipe/bernet-youri.jpg"
          address="Rue des Pavillons 12" postal-code="CH-1205" locality="Genève"
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
