import colors from 'vuetify/es5/util/colors';

export default {
  mode: 'spa',
  router: {
    base: process.env.NODE_ENV === 'production' ? '/kopasmart-webapp/' : '/',
    routerNameSplitter: '/',
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap"'
    }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#333333',
    throttle: 0
  },
  /*
   ** Global CSS
   */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // CSS file in the project
    '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/css/main.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   ** Added Vuetify as plugin
   */
  plugins: [
    "~/plugins/i18n.js",
    '@plugins/vuetify.js',
    '~/plugins/axios',
    '~/plugins/route',
    '~/plugins/pwa.client.js',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    publicPath: process.env.NODE_ENV === 'production' ? '/assets/' : '',
    extend(config, ctx) { },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: 'Kopasmart',
      lang: 'en'
    },
    meta: {
      /* meta options */
    },
    icon: {
      iconSrc: '/static/icon.png'
    }
  },
  axios: {
    //proxyHeaders: false
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
};
