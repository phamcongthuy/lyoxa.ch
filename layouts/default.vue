<template>
  <div>
    <nav class="navbar navbar-light bg-white">
      <div class="container">
        <a
          href="/"
          class="navbar-brand">
          <img
            src="~/assets/img/lyoxa-logo.svg"
            alt="Logo de Lyoxa"
            height="30px"
            width="73px">
        </a>
      </div>
    </nav>
    <nuxt/>
    <footer class="bg-light mt-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-md">
            <div>
              Association Lyoxa<br>
              <a href="mailto:info@lyoxa.ch">info@lyoxa.ch</a><br>
              Rue du Vuache, 25<br>
              CH-1201 Genève<br>
              Suisse
            </div>
            <div>
              <a href="https://www.facebook.com/lyoxa.consulting.associatif/">
                <img
                  src="~/assets/img/facebook-logo.svg"
                  alt="Page Facebook de Lyoxa"
                  width="24"
                  height="24">
              </a>
            </div>
          </div>
          <div class="col-md mt-5 mt-md-0 text-md-right">
            <img
              src="~/assets/img/geneve-logo.svg"
              alt="Logo de la République et Canton de Genève"
              width="100"
              height="77">
            <p class="mt-1">Organisation reconnue d’intérêt public par la République&nbsp;et&nbsp;Canton&nbsp;de&nbsp;Genève.</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            © 2017 — 2019 Lyoxa<br>
            Site réalisé par <a href="https://laruche.io">laruche</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
