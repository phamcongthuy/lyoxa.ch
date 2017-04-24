const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'fr-CH'
    },
    title: 'Lyoxa - Consulting associatif',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lyoxa - Consulting associatif' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:url', content: 'https://lyoxa.ch/', hid: 'og_url' },
      { property: 'og:title', content: 'Accueil', hid: 'og_title' },
      { property: 'og:description', content: 'Lyoxa est une plateforme de soutien, d’entraide et de collaboration entre les différents acteurs liés à la vie associative dans le Canton de Genève.', hid: 'od_description' },
      { property: 'og:image', content: 'https://lyoxa.ch/img/logo.svg', hid: 'og_image' },
      { property: 'og:locale', content: 'fr-CH', hid: 'og_locale' },
      { name: 'twitter:card', content: 'summary_large_image', hid: 'twitter_card' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '32x16' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#cb0000' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** CSS configuration
  */
  css: [
    { src: '~assets/css/main.css', lang: 'scss' }
  ],
  /*
  ** Router configuration
  */
  router: {
    linkActiveClass: 'active'
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery', 'tether', 'bootstrap', 'vue-konami-code'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'Tether': 'tether'
      })
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    '~plugins/bootstrap.js',
    { src: '~plugins/konami.js', ssr: false }
  ]
}
