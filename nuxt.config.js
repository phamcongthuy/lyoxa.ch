const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'fr-CH',
      prefix: 'og: http://ogp.me/ns#'
    },
    title: 'Lyoxa - Consulting associatif',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lyoxa - Consulting associatif' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:url', content: 'https://lyoxa.ch/', hid: 'og_url' },
      { property: 'og:type', content: 'website', hid: 'og_type' },
      { property: 'og:title', content: 'Lyoxa - Consulting associatif', hid: 'og_title' },
      { property: 'og:description', content: 'Lyoxa est une plateforme de soutien, d’entraide et de collaboration entre les différents acteurs liés à la vie associative dans le Canton de Genève.', hid: 'od_description' },
      { property: 'og:image', content: 'https://lyoxa.ch/img/logo.svg', hid: 'og_image' },
      { property: 'og:locale', content: 'fr-CH', hid: 'og_locale' },
      { name: 'twitter:card', content: 'summary', hid: 'twitter_card' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/vue/2.0.0-rc/vue.min.js' },
      { src: 'https://cdn.ravenjs.com/3.24.2/vue/raven.min.js', crossorigin: 'anonymous' }
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
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** CSS configuration
  */
  css: [
    '@/assets/css/main.scss'
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
    vendor: ['jquery', 'popper.js', 'bootstrap', 'vue-konami-code'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/axios'
  ],
  plugins: [
    { src: '@/plugins/raven.js', ssr: false },
    { src: '@/plugins/ga.js', ssr: false },
    '@/plugins/bootstrap.js',
    { src: '@/plugins/konami.js', ssr: false }
  ]
}
