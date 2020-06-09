<template>
  <v-app class="app">
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-card class="mx-auto" color="info lighten-1" dark tile flat>
        <v-list-item>
          <NuxtLink to="/profile">
            <v-list-item-avatar>
              <v-img
                src="https://cdn4.vectorstock.com/i/1000x1000/50/68/avatar-icon-of-girl-in-a-baseball-cap-vector-16225068.jpg"
                dark
              ></v-img>
            </v-list-item-avatar>
          </NuxtLink>
          <v-list-item-content>
            <v-list-item-title class="headline">@{{userdata.username}}</v-list-item-title>
            <v-list-item-subtitle>{{userdata.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-img
          height="250"
          src="https://cdn4.vectorstock.com/i/1000x1000/50/68/avatar-icon-of-girl-in-a-baseball-cap-vector-16225068.jpg"
          dark
          v-if="picture"
        ></v-img>
        <v-card-actions class="info lighten-1">
          <v-btn dark icon @click="drawer = !drawer">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn dark icon @click="changemode">
            <v-icon v-if="!dark">mdi-brightness-6</v-icon>
            <v-icon v-if="dark">mdi-brightness-5</v-icon>
          </v-btn>

          <v-menu bottom left>
            <template v-slot:activator="{ on }">
              <v-btn dark icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list dense>
              <v-list-item v-for="(item, i) in actions" :key="i" @click="selectedItemAction(i)">
                <v-list-item-avatar width="36" height="35">
                  <v-icon class="success white--text" v-text="item.icon"></v-icon>
                </v-list-item-avatar>
                <v-list-item-title class="font-weight-light">{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn dark icon @click="picture = !picture">
            <v-icon v-if="picture">mdi-eye-off</v-icon>
            <v-icon v-if="!picture">mdi-eye</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-list subheader tile>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-avatar width="36" height="35">
            <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-light">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="info lighten-1" elevation="1" flat :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />

      <v-img
        class="mx-1"
        :src="require('~/assets/images/logo_gold.png')"
        max-height="80"
        max-width="80"
        contain
      ></v-img>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <footer-component
      class="hidden-sm-and-down"
      v-bind:ChapterDetails="ChapterDetails"
      v-bind:FooterData="FooterData"
    ></footer-component>
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
      drawer: false,
      fixed: false,
      picture: false,
      dark: false,

      items: [
        /*{
          icon: "mdi-home-circle-outline",
          title: "Home",
          subtitle: "Go to Home Page",
          to: "/homepage",
          iconClass: "info lighten-1 white--text"
        },
        {
          icon: "mdi-help-circle-outline",
          title: "Help",
          subtitle: "Are you in need of help ?",
          to: "/help",
          iconClass: "info lighten-1 white--text"
        },
        {
          icon: "mdi-information-outline",
          title: "About Us",
          subtitle: "Read more about us",
          to: "/about",
          iconClass: "info lighten-1 white--text"
        },
        {
          icon: "mdi-alpha-c-circle-outline",
          title: "Contact Us",
          subtitle: "Contact kopasmart team/community",
          to: "/contacts",
          iconClass: "info lighten-1 white--text"
        },*/
        {
          icon: "mdi-format-list-text",
          title: "Repayment Schedules",
          subtitle: "Repayment Schedule list",
          to: "/schedule",
          iconClass: "info lighten-1 white--text"
        },
        {
          icon: "mdi-calculator-variant",
          title: "Calculator",
          subtitle: "Repayment Schedule generator",
          to: "/calculator",
          iconClass: "info lighten-1 white--text"
        }
      ],
      actions: [
        { title: "View profile", icon: "mdi-account-circle" },
        { title: "Logout", icon: "mdi-logout-variant" }
      ],
      miniVariant: false,
      right: true,
      shaped: true,
      collapseOnScroll: true,
      rightDrawer: false,
      year: new Date().getFullYear()
    };
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
    changemode: function() {
      this.dark = !this.dark;
      this.$vuetify.theme.dark = this.dark;
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
</style>
