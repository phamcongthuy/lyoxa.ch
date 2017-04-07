<template>
  <nav class="navbar navbar-toggleable-md navbar-inverse bg-primary">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <nuxt-link to="/" class="navbar-brand">
      <img src="~assets/logo.svg" width="73" height="30" alt="Lyoxa's logo">
    </nuxt-link>

    <div class="collapse navbar-collapse" id="navbarToggler">
      <ul class="navbar-nav ml-auto mt-2 mt-md-0">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link" exact>Accueil</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/lyoxa" class="nav-link">Lyoxa</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/equipe" class="nav-link">Équipe</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/partenaires" class="nav-link">Partenaires</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/rapports-activites" class="nav-link">Rapports d'activités</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
