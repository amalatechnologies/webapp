const routerBase = process.env.DEPLOY_ENV === 'prod' ? '/kopasmart-webapp/' : '/';
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  router: {
    base: routerBase,
    routerNameSplitter: '/',
  },
  env: {
  developmentUrl: process.env.BASE_URL || 'https://kopasmart.herokuapp.com/api/',
    releaseUrl: process.env.LIVE_URL || 'https://kopasmart.herokuapp.com/api/'
  },

  head: {
    titleTemplate: 'Kopasmart',
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
      content: 'provides instant lending, and other personalized financial services in Tanzania and around the world. Millions of people have borrowed through Kopasmart’s smartphone app'
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

  loading: {
    color: '#333333',
    throttle: 0
  },

  //This indicator is imported from SpinKit project https://tobiasahlin.com/spinkit/
  loadingIndicator: {
    name: 'rotating-plane',
    color: ' #FFFFFF',
    background: '#021E34'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bulma',
    '@/assets/css/styles.css'
  ],

  plugins: [
    "~/plugins/i18n.js",
    '@plugins/vuetify.js',
    '~/plugins/axios',
    '~/plugins/route',
    '~/plugins/pwa.client.js',
    '~/plugins/moment.js',
    '~/mixins/mixins.js',
    '~/plugins/vuepersistence.js',
    { src: '~plugins/ga.js', mode: 'client' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
   '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  axios: {},

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {
    /*
     ** You can extend webpack config here
     */
    publicPath: process.env.NODE_ENV !== 'dev' ? '/assets/' : '',
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
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
}
