<template>
  <section class="container">
    <h1>Équipe</h1>
    <div class="justify multicolumnparagraph">
      <p>
        Notre équipe est principalement composée de jeunes universitaires, étudiants en <i>Droit</i> et <i>Relations Internationales</i>. Depuis nos années au collège, nous faisons partie de plusieurs associations genevoises estudiantines. Par notre engagement, nous avons eu l'occasion de toucher à tous les domaines liés à l'activité associative. Curieux et avides d'expérience, nous nous sommes intéressés à la large scène genevoise associative et avons forgé un grand réseau de connaissances. De par les postes que nous avons occupés au sein de nos associations, nous avons acquis et maîtrisé les compétences administratives requises pour leur bon fonctionnement.
      </p>
      <p>
        De plus, grâce à cette expérience, nous avons reçu de nombreuses demandes individuelles de soutien et d’informations de notre réseau de connaissances. Nous avons dû intervenir dans plusieurs événements, conseiller des associations dans leur fonctionnement et financement, nous renseigner auprès des autorités des nouvelles attentes, négocier auprès d’entreprises et de propriétaires de salle ainsi que mettre en contact les associations avec nos précédents partenaires. Ces actions ont été faites à titre individuel et ce, de manière fréquente.
      </p>
      <p>
        Actuellement l’association est composée des trois membres fondateurs et d’un membre présentés ci-dessous. Toutefois, nous travaillons au renforcement de cette équipe en recrutant des personnes motivées et engagées.
      </p>
    </div>
    <h2 class="mt-5">Membres fondateurs</h2>
    <div class="row">
      <div class="col-md-4">
        <team
          name="Nicolas Tamayo Lopez"
          title="Président"
          photo="/img/equipe/tamayo-lopez-nicolas.jpg"
          vertical=true>
        </team>
      </div>
      <div class="col-md-4">
        <team
          name="Célia Sepe"
          title="Secrétaire Générale"
          photo="/img/equipe/sepe-celia.jpg"
          vertical=true>
        </team>
      </div>
      <div class="col-md-4">
        <team
          name="Stéphanie Catterson"
          title="Trésorière"
          photo="/img/equipe/catterson-stephanie.jpg"
          vertical=true>
        </team>
      </div>
    </div>
    <h2 class="mt-5">Membres</h2>
    <div class="row">
      <div class="col-md-4">
        <team
          name="Thibaud Mabut"
          title="Délégué à la communication"
          photo="/img/equipe/mabut-thibaud.jpg"
          vertical=true>
        </team>
      </div>
      <div class="col-md-4">
        <team
          name="Marc Delacrétaz"
          title="Délégué à la logistique"
          photo="/img/equipe/delacretaz-marc.jpg"
          vertical=true>
        </team>
      </div>
      <div class="col-md-4">
        <team
          name="Louis Mégroz"
          title="Délégué aux infrastructures"
          photo="/img/equipe/megroz-louis.jpg"
          vertical=true>
        </team>
      </div>
    </div>
  </section>
</template>

<script>
import Team from '~components/Team.vue'

export default {
  components: {
    Team
  },
  head () {
    return {
      title: 'L\'équipe - Lyoxa',
      meta: [
        { hid: 'description', name: 'description', content: 'L\'équipe de Lyoxa.' },
        { property: 'og:url', content: 'https://lyoxa.ch/equipe/', hid: 'og_url' },
        { property: 'og:title', content: 'Lyoxa - L\'équipe', hid: 'og_title' },
        { property: 'og:description', content: 'L\'équipe de Lyoxa; le comité et les membres.', hid: 'og_description' }
      ]
    }
  }
}
</script>
