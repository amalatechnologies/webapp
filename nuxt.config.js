const routerBase = process.env.DEPLOY_ENV === 'prod' ? '/kopasmart-webapp/' : '/';
import metajs from './plugins/meta';
const meta = metajs();
export default {
  target: 'static',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  
  router: {
    base: routerBase,
    routerNameSplitter: '/',
  },
  env: {
    developmentUrl: process.env.BASE_URL ||'https://api.kopasmart.app/',
    releaseUrl: process.env.LIVE_URL || 'https://api.kopasmart.app/'
  },


   // Global page headers (https://go.nuxtjs.dev/config-head)
   head: {
    titleTemplate: 'AmalaSoko',
    title: 'AmalaSoko',
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
      { hid: 'description', name: 'description', content: 'AmalaSoko' },
      //Twitter meta-data
      { hid: "twitter:site", name: "twitter:site", content: "AmalaSoko webapp" },
      { hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
      { hid: "twitter:image:alt", name: "twitter:image:alt", content: "AmalaSoko application" },

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
    '@nuxtjs/axios',
   
  
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
    babel: {
      presets({isServer}) {
        const targets = isServer ? { node: 'current' } : { ie: 11 }
        return [
          [ require.resolve("@babel/preset-env"), { targets }  ]
        ]
      },
      plugins: [
        "@babel/syntax-dynamic-import",
        "@babel/transform-runtime",
        "@babel/transform-async-to-generator"
      ]
    },
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
      name: 'AmalaSoko',
      lang: 'en'
    },
    meta: {
      /* meta options */
      name: "AmalaSoko",
      author: "Fintasport",
      motto:"Where lender and borrowers Meet",
      description: "Different financial institutions meet their borrowers in AmalaSoko and borrowers are empowered by enough information and option when making decision of borrowing.The most informative application in financial inclusion",
      lang: "en",
      ogType: "website",
      ogSiteName: "AmalaSoko WebApp",
      ogTitle: "AmalaSoko WebApp",
      ogDescription: "Different financial institutions meet their borrowers in AmalaSoko and borrowers are empowered by enough information and option when making decision of borrowing.The most informative application in financial inclusion",
      ogHost: "https://kopasmart.app/",
      ogImage: 'https://api.kopasmart.app/media/posts_media/kopalogo.png',
      ogUrl: "",
      twitterCard: "AmalaSoko",
      twitterSite: "AmalaSoko",


    }
   
  },
  server: {
    port: 8000, // default: 3000
    host: '127.0.0.1', // default: localhost
  },
}
