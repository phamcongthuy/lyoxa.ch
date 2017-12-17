<template>
  <section class="container">
    <h1>Services</h1>

    <p class="lead">Tous nos services sont gratuits, excepté la location de matériel.</p>

    <div class="row services-grid">
      <div class="col-md-6">
        <service
          title="Aide à la rédaction de statuts"
          description="Ce service est destiné aux associations en formation. L’objectif est de guider les personnes qui ont pour volonté de se réunir en association dans la rédaction de leurs statuts. Leur indiquer les standards minimums, les points à ne pas oublier et les aider à rédiger des statuts qui correspondent à leurs besoins.">
        </service>
      </div>
      <div class="col-md-6">
        <service
          title="Aide à la tenue de la trésorerie"
          description="Nous voulons proposer aux associations un accompagnement dans la tenue de leur trésorerie, être disponible pour répondre à leurs questions en la matière et prêter nos services en tant que vérificateurs de comptes pour les projets ou les exercices annuels. Nous offrirons également dans un second temps de petites formations en groupe visant à donner aux trésoriers des associations qui font appel à nos services les bases nécessaires pour la tenue d’une bonne comptabilité associative et/ou de projet.">
        </service>
      </div>
      <div class="col-md-6">
        <service
          title="Coordination d’achats de matériel groupés"
          description="Par ce service, nous cherchons à coordonner l’achat de matériel usuellement nécessaire dans le cadre de manifestations. Les associations pourront ainsi bénéficier de tarifs préférentiels dus à des commandes en gros.">
        </service>
      </div>
      <div class="col-md-6">
        <service
          title="Canevas organisationnels"
          description="Nous voulons développer une série de canevas organisationnels qui serviront de guide dans la réalisation de projet. Ceux-ci seront ensuite offerts aux associations afin qu’elles les utilisent pour optimiser la mise en place de leurs projets sans oublier les points les plus importants. Un suivi sera ensuite fait sur l’utilisation de ces canevas pour permettre une meilleure personnalisation.">
        </service>
      </div>
      <div class="col-md-6">
        <service
          title="Support technique"
          description="Le support technique que nous souhaitons offrir peut prendre une multitude de formes. Principalement, ce service vise à offrir aux organisateurs d’événements une ligne d’aide en cas de problème de dernière minute lors de leurs événements. Un souci technique ? Une crise à gérer ? Nous voulons nous tenir à disposition des associations pour les soutenir en cas d’imprévu.">
        </service>
      </div>
      <div class="col-md-6">
        <service
          title="Partenariats visant à la réduction de coûts"
          description="Par des partenariats avec certaines entreprises prêtant des services couramment utiles aux associations nous voulons négocier des prix réduits pour celles faisant appel à nos services. Ces collaborations garantissent aux entreprises une sécurité de fonctionnement en contrepartie d’une réduction sur les tarifs faits à nos associations partenaires. Ce service a pour finalité la baisse des frais liés à la mise en place de projets afin que les ceux-ci soient économiquement plus accessibles au public.">
        </service>
      </div>
      <div class="col-md-6">
        <service
          title="Banque de matériel (non disponbible)"
          description="Cette prestation est l’un de nos services principaux. Constatant un manque d’offre de location de matériel de première nécessité logistique pour les événements comme par exemple des portants à vestiaire. Nous souhaitons mettre en place une banque de matériel pour les associations du canton. Celles-ci pourront réserver le matériel par le biais de notre site internet dans une partie réservée aux associations, puis elles pourront venir le chercher dans nos futurs locaux. Nous avons pour projet de louer ce matériel à un prix qui ne représenterait que son coût d’entretien.">
        </service>
      </div>
      <div class="col-md-6">
        <service
          title="Conseil dans la réalisation de projets"
          description="Une association souhaitant mettre en place un projet pourra faire appel à nos services pour la soutenir dans son initiative. Cette prestation consistera principalement en une orientation dans les démarches à effectuer, un rappel des standards minimaux de sécurité, une évaluation de la difficulté de réalisation du projet et de l’investissement nécessaire, une aide à la recherche de subventions ainsi que tout autre conseil utile.">
        </service>
      </div>
      <div class="col-md-6">
        <service
          title="Observateurs du monde associatif"
          description="De par notre travail de terrain avec les associations, nous aurons l’avantage de pouvoir déceler les problèmes récurrents rencontrés par celles-ci dans leurs démarches. Sur cette base, nous serons à même de témoigner de l’état de la vie associative du canton et de fournir des informations de terrain aux autorités pour permettre une meilleure symbiose entre tous les acteurs.">
        </service>
      </div>
      <div class="col-md-6">
        <service
          title="Votre demande ne correspond à aucun des services présentés ci-dessus?"
          description="Contactez-nous pour plus d’informations."
          button-link="/formulaire-de-demande/"
          button-text="Contactez-nous">
        </service>
      </div>
    </div>
  </section>
</template>

<script>
import Service from '~/components/Service.vue'

export default {
  components: {
    Service
  },
  head () {
    return {
      title: 'Services - Lyoxa',
      meta: [
        { hid: 'description', name: 'description', content: 'Liste des services proposés par Lyoxa' },
        { property: 'og:url', content: 'https://lyoxa.ch/services/', hid: 'og_url' },
        { property: 'og:title', content: 'Lyoxa - Services', hid: 'og_title' },
        { property: 'og:description', content: 'Liste des services proposés par Lyoxa: conseils, statuts, trésorerie, banque de matériel et plus!', hid: 'og_description' }
      ]
    }
  }
}
</script>

<style>
</style>
