const routerBase = process.env.DEPLOY_ENV === 'prod' ? '/kopasmart-webapp/' : '/';
import metajs from './plugins/meta';
const meta = metajs();
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  router: {
    base: routerBase,
    routerNameSplitter: '/',
  },
  env: {
    developmentUrl: process.env.BASE_URL || 'https://api.kopasmart.app/',
    releaseUrl: process.env.LIVE_URL || 'https://api.kopasmart.app/'
  },

   // Global page headers (https://go.nuxtjs.dev/config-head)
   head: {
    titleTemplate: 'kopaSmart',
    title: 'KopaSmart',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      /**Chrome, Firefox OS and Opera **/
      { name: "theme-color", content: "#00A756" },
      /**Windows phone **/
      { name: "msapplication-navbutton-color", content: "#00A756" },
      /**iOS Safari**/
      { name: "apple-mobile-web-app-status-bar-style", content: "#00A756" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Kopasmart' },
      //Twitter meta-data
      { hid: "twitter:site", name: "twitter:site", content: "kopaSmart webapp" },
      { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
      { hid: "twitter:image:alt", name: "twitter:image:alt", content: "KopaSmart application" },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
      name: 'KopaS  mart',
      lang: 'en'
    },
    meta: {
      /* meta options */
      name: "KopaSmart",
      author: "Fintasport",
      description: "Where lender and borrowers Meet",
      lang: "en",
      ogType: "website",
      ogSiteName: "KopaSmart WebApp",
      ogTitle: "KopaSmart WebApp",
      ogDescription: "Where lender and borrowers Meet",
      ogHost: "https://kopasmart.app/",
      ogImage: "https://github.com/finspointa/kopasmart-webapp/blob/master/static/kopasmart.jpg",
      ogUrl: "",
      twitterCard: "KopaSmart",
      twitterSite: "kopaSmart",


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
