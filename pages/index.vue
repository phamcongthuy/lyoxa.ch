<template>
  <main>
    <section class="jumbotron jumbotron-fluid text-white mb-0">
      <div class="container">
        <h1 class="display-4">Consulting associatif</h1>
        <p class="lead col-md-8 p-0">
          Lyoxa est une plateforme de conseils gratuits, de soutien et de collaboration entre les différents acteurs liés à la vie associative dans le Canton de Genève.
        </p>
        <p class="mt-5">
          <a
            href="/services/"
            class="btn btn-primary btn-lg">
            Découvrir nos services
          </a>
        </p>
      </div>
    </section>

    <section class="bg-light py-5">
      <div class="container">
        <video
          width="100%"
          controls="controls"
          poster="/videos/lyoxa-presentation.png">
          <source
            src="/videos/lyoxa-presentation.mp4"
            type="video/mp4">
          Votre navigateur ne supporte pas les vidéos natives.
        </video>

        <p class="mt-3 justify">
          Lyoxa est née de multiples constats dressés par l’expérience de terrain de plusieurs de ses fondat·rices·eurs.
        </p>
        <p class="justify">
          Dès lors, nous avons voulu créer une structure visant à fournir les clés de compréhension nécessaires au fonctionnement associatif. Par l’aide à la création, la gestion d’associations et la réalisation de projets, nous voulons permettre à tout un chacun de s’engager dans le monde associatif afin de contribuer collectivement à l’amélioration de notre société.
        </p>
        <a
          href="/lyoxa/"
          class="btn btn-primary btn-lg mt-3 mr-3">
          En savoir plus sur Lyoxa
        </a>
        <a
          href="/documents/ra/Lyoxa%20-%20Rapport%20d'activité%202017.pdf"
          class="btn btn-outline-primary btn-lg mt-3">
          Rapport d'activité 2017
        </a>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <h1>Services</h1>
        <p class="justify">
          Un ensemble de services sur mesure afin de vous conseiller au mieux dans vos démarches associatives.
        </p>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-lg border-lg-right">
            <p class="font-weight-bold mb-1">Aide à la constitution d’une association</p>
            <p class="justify">
              Ce service est destiné aux individus voulant se constituer en association. Administratif, formulaires, démarches, sont tant d’étapes laborieuses à franchir pour créer une association. Elles sont pourtant cruciales. Il est essentiel de les respecter et effectuer correctement afin de se garantir un bon fonctionnement et une structure reconnue par les entités publiques et privées.
            </p>
          </div>
          <div class="col-lg border-lg-right mt-3 mt-lg-0">
            <p class="font-weight-bold mb-1">Aide à la rédaction de statuts</p>
            <p class="justify">
              Ce service est destiné aux associations qui se constituent. L’objectif est de guider les personnes qui ont pour volonté de se réunir en association dans la rédaction de leurs statuts, véritable base juridique d’une telle structure. Il s’agit notamment de leur indiquer les standards minimums, les points à ne pas oublier et les aider à rédiger des statuts qui correspondent à leurs besoins.
            </p>
          </div>
          <div class="col-lg mt-3 mt-lg-0">
            <p class="font-weight-bold mb-1">Gouvernance associative</p>
            <p class="justify">
              Il n’est pas toujours facile de communiquer à l’interne d’une association. De nombreux·ses membres, un comité, des bénévoles : une association peut être une entité sociale complexe. Plusieurs problèmes de communication, compétence, cahier des charges ou rôle peuvent survenir et donner parfois lieu à des tensions perturbant le fonctionnement interne de l’association. En réfléchissant sur la gouvernance avec notre aide, l’association peut mieux adapter sa structure à son fonctionnement interne et à la dynamique de ses membres. Avec un tel système, le travail de l’association s’en trouve facilité et plus efficient.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <a
          href="/services/"
          class="btn btn-primary btn-lg mt-5">
          Découvrir nos services
        </a>
      </div>
    </section>

    <section class="bg-light py-5">
      <div class="container">
        <h1>Besoin d'un conseil?</h1>
        <p>Nous mettons gratuitement notre expérience à votre service pour toute demande.</p>
        <a
          href="/formulaire-de-demande/"
          class="btn btn-primary btn-lg mt-3">
          Formulaire de demande
        </a>
      </div>
    </section>

    <section class="container py-5">
      <h1>Nous soutenir</h1>
      <p>C’est grâce à vous que nous pouvons agir. Voici quelques moyens de nous soutenir…</p>
      <a
        href="/nous-soutenir/"
        class="btn btn-primary btn-lg mt-3">
        Nous soutenir
      </a>
    </section>
  </main>
</template>

<script>
export default {
}
</script>

<style scoped>
  .jumbotron {
    background-image: url('~assets/img/hero-geneve.jpg');
    background:linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url('~assets/img/hero-geneve.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
</style>
