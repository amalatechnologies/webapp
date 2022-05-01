<template>
  <v-app style="background-color: #f5f5f5">
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
              src="data:image/jpeg;base64,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"
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
          <v-list-item-title>
            <v-icon color="primary" v-text="item.icon" small></v-icon
            >&nbsp;&nbsp;{{ $t(item.definition) }}</v-list-item-title
          >
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

    <v-app-bar dense fixed app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" dark>
      </v-app-bar-nav-icon>
      <img width="120px" src="/kopalogo.png" alt="Amala Soko" />
      <v-spacer />

      <v-btn icon @click="changemode">
        <v-icon v-if="!dark" color="white">mdi-brightness-6</v-icon>
        <v-icon v-if="dark" color="white">mdi-brightness-5</v-icon>
      </v-btn>

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon color="white">mdi-dots-vertical</v-icon>
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
      <v-container style="background-color: #f5f5f5">
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
    changemode: function () {
      this.dark = !this.dark;
      this.$vuetify.theme.dark = this.dark;
    },
    syncro: async function () {
      const vm = this;
      vm.sync = !vm.sync;
      await Promise.all([
        vm.$store.dispatch("getProfile"),
        vm.$store.dispatch("getBlogPosts", "page=1"),
      ]).then(function () {
        console.log("Loading complete...");
      });
      setTimeout(() => {
        vm.sync = !vm.sync;
      }, 2000);
    },
  },
  beforeMount: function () {},

  computed: {
    userdata() {
      return this.$store.getters.userInfo;
    },
  },
};
</script>
