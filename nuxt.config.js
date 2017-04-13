const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'fr-CH'
    },
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'theme-color', content: '#ffffff' }
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
