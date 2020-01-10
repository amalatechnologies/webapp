<template>
  <v-app dark class="app">
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-card class="mx-auto" flat>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://answersafrica.com/wp-content/uploads/2015/01/somalia.jpg" dark></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">@{{userdata.username}}</v-list-item-title>
            <v-list-item-subtitle>{{userdata.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-img
          height="250"
          src="https://answersafrica.com/wp-content/uploads/2015/01/somalia.jpg"
          dark
          v-if="picture"
        ></v-img>
        <v-card-actions class="success lighten-0">
          <v-btn dark icon @click="drawer = !drawer">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn dark icon class="mr-4" color="transparent" to="/profile">
            <v-icon color="white">mdi-pencil</v-icon>
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
    <v-app-bar
      elevation="1"
      :clipped-left="clipped"
      fixed
      app
      :collapse-on-scroll="collapseOnScroll"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!--<v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />-->
      <v-img
        class="mx-1"
        :src="require('~/assets/images/logo_gold.png')"
        max-height="80"
        max-width="80"
        contain
      ></v-img>
      <v-spacer />
      <!-- <v-list v-if="$vuetify.breakpoint.smAndUp">
        <v-list-item>
          <v-btn
          small
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          text
        >{{item.title}}</v-btn>
        </v-list-item>
      </v-list>-->
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <footer-component v-bind:ChapterDetails="ChapterDetails" v-bind:FooterData="FooterData"></footer-component>
  </v-app>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
import FooterData from "@/assets/data/footer.json";
import FooterComponent from "~/components/footer/FooterComponent.vue";
export default {
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
      picture: true,

      items: [
        {
          icon: "mdi-home-circle-outline",
          title: "Home",
          subtitle: "Go to Home Page",
          to: "/homepage",
          iconClass: "success white--text"
        },
        {
          icon: "mdi-help-circle-outline",
          title: "Help",
          subtitle: "Are you in need of help ?",
          to: "/help",
          iconClass: "success white--text"
        },
        {
          icon: "mdi-information-outline",
          title: "About Us",
          subtitle: "Read more about us",
          to: "/about",
          iconClass: "success white--text"
        },
        {
          icon: "mdi-alpha-c-circle-outline",
          title: "Contact Us",
          subtitle: "Contact kopasmart team/community",
          to: "/contacts",
          iconClass: "success white--text"
        },
        {
          icon: "mdi-format-list-text",
          title: "Repayment Schedules",
          subtitle: "Repayment Schedule list",
          to: "/schedule",
          iconClass: "success white--text"
        },
        {
          icon: "mdi-calculator-variant",
          title: "Calculator",
          subtitle: "Repayment Schedule generator",
          to: "/calculator",
          iconClass: "success white--text"
        }
      ],
      actions: [
        { title: "Update profile", icon: "mdi-update" },
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
  created: function() {},
  methods: {
    selectedItemAction: function(item) {
      switch (item) {
        case 0:
          break;
        case 1:
          localStorage.removeItem("qAccessToken");
          localStorage.removeItem("uuId");
          this.$router.push("/");
          break;
      }
    }
  },
  beforeMount: function() {
    let vm = this;
    vm.$store.dispatch("getProfile");
  },
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
