<template>
  <section class="container">
    <h1>Équipe</h1>
    <div class="multicolumnparagraph">
      <p>
        Notre équipe est principalement composée de jeunes universitaires, étudiants en <i>Droit et Relations Internationales</i>. Depuis nos années au collège, nous faisons partie de plusieurs associations genevoises estudiantines. Par notre engagement, nous avons eu l'occasion de toucher à tous les domaines liés à l'activité associative. Curieux et avides d'expérience, nous nous sommes intéressés à la large scène genevoise associative et avons forgé un grand réseau de connaissances. De par les postes que nous avons occupés au sein de nos associations, nous avons acquis et maîtrisé les compétences administratives requises pour leur bon fonctionnement.
      </p>
      <p>
        De plus, grâce à cette expérience, nous avons reçu de nombreuses demandes individuelles de soutien et d’informations de notre réseau de connaissances. Nous avons dû intervenir dans plusieurs événements, conseiller des associations dans leur fonctionnement et financement, nous renseigner auprès des autorités des nouvelles attentes, négocier auprès d’entreprises et de propriétaires de salle ainsi que de mettre en contact les associations avec nos précédents partenaires. Ces actions ont été faites à titre individuel et ce, de manière fréquente.
      </p>
      <p>
        Actuellement l’association est composée des trois membres fondateurs présentés ci-dessous. Nous travaillons toutefois dur pour agrandir cette équipe en recrutant parmi les personnes les plus motivées et engagées possibles.
      </p>
    </div>
    <h2 class="mt-5">Membres fondateurs</h2>
    <div class="row">
      <div class="col-md-4">
        <team
          name="Célia Sepe"
          title="Secrétaire Générale"
          photo="/img/equipe/sepe-celia.png">
        </team>
      </div>
      <div class="col-md-4">
        <team
          name="Stéphanie Catterson"
          title="Trésorière"
          photo="https://unsplash.it/200/300?image=1027">
        </team>
      </div>
      <div class="col-md-4">
        <team
          name="Nicolas Tamayo Lopez"
          title="Président"
          photo="/img/equipe/tamayo-lopez-nicolas.png">
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
        { hid: 'description', name: 'description', content: 'L\'équipe de Lyoxa.' }
      ]
    }
  }
}
</script>
