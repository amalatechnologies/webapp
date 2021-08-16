const routerBase = process.env.DEPLOY_ENV === 'prod' ? '/kopasmart-webapp/' : '/';
import metajs from './plugins/meta';
const meta = metajs();
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  router: {
    base: routerBase,
    routerNameSplitter: '/',
  },
  env: {
    developmentUrl: process.env.BASE_URL || 'http://127.0.0.1:8081/',
    releaseUrl: process.env.LIVE_URL || 'http://127.0.0.1:8081/'
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
      name: 'KopaSmart',
      lang: 'en'
    },
    meta: {
      /* meta options */
      name: "KopaSmart",
      author: "Fintasport",
      motto:"Where lender and borrowers Meet",
      description: "Different financial institutions meet their borrowers in Kopasmart and borrowers are empowered by enough information and option when making decision of borrowing.The most informative application in financial inclusion",
      lang: "en",
      ogType: "website",
      ogSiteName: "KopaSmart WebApp",
      ogTitle: "KopaSmart WebApp",
      ogDescription: "Different financial institutions meet their borrowers in Kopasmart and borrowers are empowered by enough information and option when making decision of borrowing.The most informative application in financial inclusion",
      ogHost: "https://kopasmart.app/",
      ogImage: '~/static/kopalogo.png',
      ogUrl: "",
      twitterCard: "KopaSmart",
      twitterSite: "kopaSmart",


    }
   
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
}
