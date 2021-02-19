<template>
  <v-app class="app">
    <v-navigation-drawer
      v-model="drawer"
      mini-variant.sync="mini"
      overlay-color="primary"
      app
      expand-on-hover
      width="220"
      height="100%"
    >
      <v-list dense subheader tile>
        <v-list-item dense to="/profile" class="list-item ma-0">
          <v-list-item-avatar>
            <v-img
              src="https://cdn4.vectorstock.com/i/1000x1000/50/68/avatar-icon-of-girl-in-a-baseball-cap-vector-16225068.jpg"
              dark
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline text-h6">{{
              userdata.username
            }}</v-list-item-title>
            <v-list-item-subtitle class="font-weight-light">{{
              userdata.email
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          class="list-item ma-0"
          dense
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-icon class="ml-1 mr-1">
            <v-icon color="primary" v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-title class="font-weight-bold">{{
            $t(item.definition)
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <div cols="6" md="1">
                  <v-select
                    v-model="select"
                    :items="locales"
                    item-text="locale"
                    item-value="lang"
                    persistent-hint
                    return-object
                    single-line
                    dense
                    lass="font-weight-light"
                    @change="changeLanguage(select.lang)"
                  ></v-select>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar dense fixed flat>
      <v-app-bar-nav-icon>
        <v-avatar size="36px">
          <img
            class="mx-1"
            :src="require('~/assets/images/icon.png')"
            alt="Kopasmart"
            @click.stop="drawer = !drawer"
          />
        </v-avatar>
      </v-app-bar-nav-icon>
      <v-spacer />
      <v-btn icon @click="changemode">
        <v-icon v-if="!dark" color="primary">mdi-brightness-6</v-icon>
        <v-icon v-if="dark" color="primary">mdi-brightness-5</v-icon>
      </v-btn>

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon color="primary">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item
            v-for="(item, i) in actions"
            :key="i"
            @click="selectedItemAction(i)"
          >
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
      <v-container class="mt-6" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation
      v-show="$vuetify.breakpoint.smAndDown"
      horizontal
      fixed
      scroll-threshold="1"
      hide-on-scroll
      color="purple lighten-1"
    >
      <v-btn>
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
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
    FooterComponent
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
        { locale: "Arabic", lang: "ar" }
      ],

      items: [
        {
          icon: "mdi-home-outline",
          title: "Home",
          subtitle: "Go to Home Page",
          definition: "label.menu.homepage",
          to: "/home",
          iconClass: "info darken-1 white--text"
        },
        {
          icon: "mdi-clipboard-list",
          title: "Repayment Schedules",
          subtitle: "Repayment Schedule list",
          definition: "label.menu.repaymentchedules",
          to: "/schedule",
          iconClass: "info darken-1 white--text"
        },
        {
          icon: "mdi-calculator-variant",
          title: "Calculator",
          subtitle: "Repayment Schedule generator",
          definition: "label.menu.calculator",
          to: "/calculator",
          iconClass: "info darken-1 white--text"
        },
        {
          icon: "mdi-account-search",
          title: "Search",
          subtitle: "Searching",
          definition: "label.menu.Search",
          to: "/search",
          iconClass: "info darken-1 white--text"
        }
      ],
      actions: [
        {
          title: "View profile",
          icon: "mdi-account-circle",
          label: "label.menu.profile"
        },
        {
          title: "Logout",
          icon: "mdi-logout-variant",
          label: "label.menu.logout"
        }
      ],
      miniVariant: false,
      right: true,
      shaped: true,
      collapseOnScroll: true,
      rightDrawer: false,
      year: new Date().getFullYear()
    };
  },
  created() {
    this.syncro();
  },

  methods: {
    selectedItemAction: function(item) {
      switch (item) {
        case 0:
          this.$router.push("/profile");
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
    changemode: function() {
      this.dark = !this.dark;
      this.$vuetify.theme.dark = this.dark;
    },
    syncro: async function() {
      const vm = this;
      vm.sync = !vm.sync;
      await Promise.all([
        vm.$store.dispatch("getProfile"),
        vm.$store.dispatch("getBlogPosts", "page=1")
      ]).then(function() {
        console.log("Loading complete...");
      });
      setTimeout(() => {
        vm.sync = !vm.sync;
      }, 2000);
    }
  },
  beforeMount: function() {},

  computed: {
    userdata() {
      return this.$store.getters.userInfo;
    }
  }
};
</script>
<style>
.app {
  font-family: "Montserrat", sans-serif;
}
* {
  text-transform: none !important;
}
</style>
