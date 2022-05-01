<template>
  <v-app style="background-color: #f5f5f5">
    <v-app-bar flat dense fixed app color="primary">
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer" dark>
      </v-app-bar-nav-icon>
      <img width="120px" src="/kopalogo.ico" alt="KopaSmart" />
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
        <nuxt />
    </v-main>
  </v-app>
</template>

<script>

export default {
  async fetch({ store, params }) {
    await this.$store.dispatch("getProfile");
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
