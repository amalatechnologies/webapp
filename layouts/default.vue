<template>
  <v-app style="background-color: #f5f5f5">
    <v-navigation-drawer v-if="$vuetify.breakpoint.smAndUp" v-model="drawer" mini-variant.sync="mini"
      overlay-color="primary" app absolute clipped width="220" height="100%">
      <v-list dense subheader tile>
        <!--<v-list-item dense to="/me" class="list-item ma-0">
          <v-list-item-avatar>
            <v-img :src="placeholder" dark></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="headline text-h6">{{
                userdata.username
            }}</v-list-item-title>
            <v-list-item-subtitle class="font-weight-light">{{
                userdata.email
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>-->

        <v-list-item class="list-item ma-0" dense v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-title>
            <v-icon color="primary" v-text="item.icon" small></v-icon>&nbsp;&nbsp;{{ $t(item.definition) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <div cols="6" md="1">
                  <v-select v-model="select" :items="locales" item-text="locale" item-value="lang" persistent-hint
                    return-object single-line dense lass="font-weight-light" @change="changeLanguage(select.lang)">
                  </v-select>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar clipped-left flat fixed app :color="$vuetify.breakpoint.smAndUp ? 'white' : 'accent'">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" >
      </v-app-bar-nav-icon>-->
      <v-avatar tile>
        <img src="../assets/images/logo.png" alt="Amala Soko" />

      </v-avatar>
      <v-spacer></v-spacer>

        <div>
          <v-list-item active-class="primary" dense  class="list-item ma-0">
          <v-list-item-avatar>
            <v-img :src="placeholder" dark></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="headline text-h6">{{
                userdata.username
            }}</v-list-item-title>
           
          </v-list-item-content>
        </v-list-item>
        </div>
      
      <!--<v-btn icon @click="changemode">
        <v-icon v-if="!dark" color="primary">mdi-brightness-6</v-icon>
        <v-icon v-if="dark" color="primary">mdi-brightness-5</v-icon>
      </v-btn>-->

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon color="primary">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item v-for="(item, i) in actions" :key="i" @click="selectedItemAction(i)">
            <v-list-item-avatar width="36" height="35">
              <v-icon class="success white--text" v-text="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title class="font-weight-light">{{
                $t(item.label)
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
      
      
    </v-app-bar>
    <v-main>
      <v-container class="ma-0 pa-0" style="background-color: #f5f5f5">
        <nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation v-show="$vuetify.breakpoint.smAndDown" fixed shift scroll-threshold="2" hide-on-scroll
      color="white" active-class="secondary" background-color="accent">
      <v-btn to="/home">
        <span class="font-weight-bold">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/calculator">
        <span class="font-weight-bold">Calculator</span>
        <v-icon>mdi-calculator</v-icon>
      </v-btn>
      <v-btn to="/schedule">
        <span class="font-weight-bold">Repayments</span>
        <v-icon>mdi-file</v-icon>
      </v-btn>

      <v-btn to="/search">
        <span class="font-weight-bold">Search</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn to="/profile">
        <span class="font-weight-bold">Account</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-app>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
import FooterData from "@/assets/data/footer.json";
import FooterComponent from "~/components/footer/FooterComponent.vue";

export default {
  async fetch({ store, params }) {
    await this.$store.dispatch("getProfile");
  },
  components: {
    FooterComponent,
  },
  data() {
    return {
      ChapterDetails: ChapterDetails,
      FooterData: FooterData,
      clipped: false,
      drawer: true,
      fixed: false,
      picture: false,
      dark: false,
      locale: "",
      selectedLocale: null,
      select: { locale: "English", lang: "en" },
      label: "Sign In",
      locales: [
        { locale: "English", lang: "en" },
        { locale: "Swahili", lang: "sw" },
        { locale: "French", lang: "fr" },
        { locale: "Arabic", lang: "ar" },
      ],

      items: [
        {
          icon: "mdi-home-outline",
          title: "Home",
          subtitle: "Go to Home Page",
          definition: "label.menu.homepage",
          to: "/home",
          iconClass: "info darken-1 white--text",
        },
        {
          icon: "mdi-clipboard-list",
          title: "Repayment Schedules",
          subtitle: "Repayment Schedule list",
          definition: "label.menu.repaymentchedules",
          to: "/schedule",
          iconClass: "info darken-1 white--text",
        },
        {
          icon: "mdi-calculator-variant",
          title: "Calculator",
          subtitle: "Repayment Schedule generator",
          definition: "label.menu.calculator",
          to: "/calculator",
          iconClass: "info darken-1 white--text",
        },
        {
          icon: "mdi-account-search",
          title: "Search",
          subtitle: "Searching",
          definition: "label.menu.Search",
          to: "/search",
          iconClass: "info darken-1 white--text",
        },
      ],
      actions: [
        {
          title: "View profile",
          icon: "mdi-account-circle",
          label: "label.menu.profile",
        },
        {
          title: "Logout",
          icon: "mdi-logout-variant",
          label: "label.menu.logout",
        },
      ],
      miniVariant: false,
      right: true,
      shaped: true,
      collapseOnScroll: true,
      rightDrawer: false,
      year: new Date().getFullYear(),
    };
  },
  created() {
    this.syncro();
  },

  methods: {
    selectedItemAction: function (item) {
      switch (item) {
        case 0:
          this.$router.push("/me");
          break;
        case 1:
          localStorage.removeItem("qAccessToken");
          localStorage.removeItem("uuId");
          this.$router.push("/");
          break;
      }
    },
    changeLanguage(lang) {
      // Change the i18n context object's locale
      // This makes it so the correct locale file is used
      this.$i18n.locale = lang;
    },
    changemode: function () {
      this.dark = !this.dark;
      this.$vuetify.theme.dark = this.dark;
    },
    syncro: async function () {
      const vm = this;
      vm.sync = !vm.sync;
      await Promise.all([
        vm.$store.dispatch("getProfile"),
        vm.$store.dispatch("_getallblogposts", "page=1"),
      ]).then(function () {
        console.log("Loading complete...");
      });
      setTimeout(() => {
        vm.sync = !vm.sync;
      }, 2000);
    },
  },
  beforeMount: function () { },

  computed: {
    userdata() {
      return this.$store.getters.userInfo;
    },
  },
};
</script>
