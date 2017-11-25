<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="form-row">
      <div class="form-group col-sm-6">
        <label for="contactInputFirstname">Prénom *</label>
        <input class="form-control" id="contactInputFirstname" v-model="contact.firstName">
      </div>
      <div class="form-group col-sm-6">
        <label for="contactInputName">Nom</label>
        <input class="form-control" id="contactInputName" v-model="contact.name">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-sm-6">
        <label for="contactInputEmail">Adresse e-mail</label>
        <input type="email" class="form-control" id="contactInputEmail" v-model="contact.email">
      </div>
      <div class="form-group col-sm-6">
        <label for="contactInputPhone">Numéro de téléphone</label>
        <input type="tel" class="form-control" id="contactInputPhone" v-model="contact.phone">
      </div>
    </div>
    <div class="form-group">
      <label for="contactInputAssociation">Nom de l'association/du collectif représenté</label>
      <input class="form-control" id="contactInputAssociation" v-model="contact.association">
    </div>
    <div class="form-group">
      <label for="contactInputDemand">Votre demande en détails</label>
      <textarea class="form-control" id="contactInputDemand" rows="8" cols="80" v-model="contact.demand"></textarea>
    </div>
    <div class="form-group">
      <label>Le type de service dont vous avez besoin</label>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.statusLegal">
          Statuts et légal
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.budgets">
          Budgets, comptabilité et trésorerie
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.teamManagement">
          Gestion d'équipe
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.teamBuilding">
          Constitution d'équipe
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.communicationDesign">
          Communication et Webdesign
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.autorisations">
          Autorisations et services de la Ville de Genève
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.consulting">
          Conseils sur le monde associatif
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.funding">
          Aide à la recherche de partenariats et de fonds
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.eventPlanning">
          Organisation d'événements
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.travelPlanning">
          Organisation de voyages
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.partyPlanning">
          Organisation de soirées
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.ongs">
          Contacts avec les ONGs
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="contact.services.other">
          Autre
        </label>
      </div>
      <div class="form-group" v-if="contact.services.other">
        <label for="contactInputServiceOther">Autre(s) service(s)</label>
        <textarea class="form-control" id="contactInputServiceOther" rows="8" cols="80" v-model="contact.services.otherText"></textarea>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Envoyer</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      contact: {
        firstName: '',
        name: '',
        email: '',
        phone: '',
        association: '',
        demand: '',
        services: {
          statusLegal: false,
          budgets: false,
          teamManagement: false,
          teamBuilding: false,
          communicationDesign: false,
          autorisations: false,
          consulting: false,
          funding: false,
          eventPlanning: false,
          travelPlanning: false,
          partyPlanning: false,
          ongs: false,
          other: false,
          otherText: ''
        }
      }
    }
  },
  methods: {
    onSubmit () {
      let apiURL = 'https://981fr7gkfa.execute-api.eu-central-1.amazonaws.com/prod/lyoxaFormSlack'
      let xhr = new XMLHttpRequest()
      xhr.open('POST', apiURL)
      xhr.send(this.contact)
    }
  }
}
</script>
