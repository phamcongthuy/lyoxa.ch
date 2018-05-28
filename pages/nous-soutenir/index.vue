<template>
  <section class="container">
    <h1>Nous soutenir</h1>
    <div class="row">
      <div class="col-12 col-lg-8">

        <p>Comme la grande majorité des associations, nous dépendons de votre soutien pour offrir nos services. Qu’il prenne la forme de prestations fournies à titre gratuit, de dons ou de subventions, c’est en grande partie grâce à vous que nous pouvons agir. Voici donc quelques moyens de nous soutenir...</p>

        <p class="font-weight-bold lead mt-5">…en tant que particulier…</p>

        <p>…vous pouvez nous soutenir simplement en devenant membre de soutien de l’association. Les membres de soutien s’engagent à verser une cotisation annuelle de CHF 80.- pour contribuer à nos activités. Pour cela, nous vous donnons rendez-vous sur notre site internet. Vous pouvez également nous faire un don directement sur notre compte postal aux coordonnées indiquées en bas de page. Lorsqu’il atteint un montant de CHF 300.- ou plus, nous sommes à même de vous fournir une attestation de don afin que celui-ci puisse être déduit de votre déclaration fiscale.</p>

        <p class="font-weight-bold lead mt-5">…en tant que personne morale…</p>

        <p>…vous pouvez nous soutenir, comme les particuliers, par un don mais aussi par un engagement de mécénat ou par des prestations à titre gratuit. Ces formes de soutien, lorsqu’elles dépassent une valeur pécuniaire de CHF 300.-, pourront être déduites de votre déclaration fiscale moyennant une attestation que nous vous fournirons.</p>

        <p class="font-weight-bold lead mt-5">oú ira votre contribution?</p>

        <ol>
          <li>Financement des locaux et de l’aménagement de ceux-ci - Nous pourrons ainsi offrir un espace de travail adéquat à nos membres et serons à même de recevoir les personnes ou associations sollicitantes.</li>
          <li>Acquisition du matériel nécessaire à mettre en place notre future Banque de Matériel - Ceci est un service indispensable pour les associations de petite taille souhaitant organiser des événements d’auto-financement.</li>
          <li>Financement du développement de notre web-application. - Celle-ci nous permettra de faciliter le contact entre nos membres et la mise en commun de leurs compétences pour satisfaire au mieux les besoins des personnes et associations sollicitantes.</li>
          <li>Couverture des frais de fonctionnement - Eau, électricité, connexion internet, papeterie, l’ensemble des petits éléments quotidiens nécessaires à fournir un service optimal.</li>
        </ol>

        <p class="font-weight-bold lead mt-5">Formulaire de soutien</p>
        <soutien-form/>
      </div>
      <div class="col-12 col-lg mt-5 mt-lg-0">
        <div class="card text-white bg-primary">
          <div class="card-body">
            <h5 class="card-title">Association Lyoxa</h5>
            <p>
              1200 Genève<br>
              CCP : 14-940357-4</br>
              IBAN : CH78 0900 0000 1494 0357 4
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Team from '~/components/Team'
import SoutienForm from '~/components/SoutienForm'

export default {
  head () {
    return {
      title: 'Nous soutenir - Lyoxa',
      meta: [
        { hid: 'description', name: 'description', content: 'Soutenir Lyoxa' },
        { property: 'og:url', content: 'https://lyoxa.ch/nous-soutenir/', hid: 'og_url' },
        { property: 'og:title', content: 'Lyoxa - Nous soutenir', hid: 'og_title' },
        { property: 'og:description', content: 'Soutenir Lyoxa', hid: 'og_description' }
      ]
    }
  },
  components: {
    Team,
    SoutienForm
  }
}
</script>
