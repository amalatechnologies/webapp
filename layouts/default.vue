<template>
  <v-app dark class="app">
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-card max-width="375" class="mx-auto" flat>
        <v-img src="https://answersafrica.com/wp-content/uploads/2015/01/somalia.jpg" dark>
          <v-row class="fill-height">
            <v-card-title>
              <v-btn dark icon @click="drawer = !drawer">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn dark icon class="mr-4" to="/profile">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              <v-btn dark icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-card-title>

            <v-spacer></v-spacer>

            <v-card-title class="white--text pl-12 pt-12">
              <span class="font-weight-light display-1" color="primary">{{userdata.username}}</span>
            </v-card-title>
            <v-card-subtitle class="white--text">
              <span class="font-weight-light">{{userdata.email}}</span>
            </v-card-subtitle>
          </v-row>
        </v-img>
      </v-card>
      <v-list subheader tile dense>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-avatar width="36" height="36">
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
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer color="white" height="auto" class="hidden-sm-and-down">
      <v-container fluid>
        <v-layout wrap align-center justify-center row fill-height class="my-0 py-0">
          <v-flex xs12 md10 sm10 lg10 class="py-0 my-0">
            <p class="google-font" style="font-size:130%">
              Follow Us:
              <span v-for="(item,i) in ChapterDetails.socialLinks" :key="i">
                <v-tooltip top>
                  <v-btn flat icon :href="item.link" target="_blank" slot="activator">
                    <v-icon>{{item.icon}}</v-icon>
                  </v-btn>
                  <span>{{item.name}}</span>
                </v-tooltip>
              </span>
            </p>
            <v-divider></v-divider>
          </v-flex>
        </v-layout>

        <v-layout wrap justify-center row>
          <v-flex xs12 md10 lg10>
            <v-layout wrap align-start justify-start row class="my-2">
              <v-flex xs12 md3 sm4 lg3 class="py-2">
                <p class="google-font mb-0" style="font-size: 100%;font-weight: 300;">
                  <b>About</b>
                </p>
                <div v-for="(item,i) in FooterData.AboutSession" :key="i" class="mt-1">
                  <a
                    :href="item.Link"
                    class="google-font"
                    target="_blank"
                    style="color: #3E4551;text-decoration: none;font-size:100%"
                  >{{item.LinkName}}</a>
                  <br />
                </div>
              </v-flex>

              <v-flex xs12 md3 sm4 lg3 class="py-2">
                <p class="google-font mb-0" style="font-size: 100%;font-weight: 300;">
                  <b>Resources</b>
                </p>
                <div v-for="(item,i) in FooterData.ChapterResourcesSession" :key="i" class="mt-1">
                  <a
                    :href="item.Link"
                    class="google-font"
                    target="_blank"
                    style="color: #3E4551;text-decoration: none;font-size:100%"
                  >{{item.LinkName}}</a>
                  <br />
                </div>
              </v-flex>

              <v-flex xs12 md3 sm4 lg3 class="py-2">
                <p class="google-font mb-0" style="font-size: 100%;font-weight: 300;">
                  <b>Developer Console</b>
                </p>
                <div v-for="(item,i) in FooterData.DevConsole" :key="i" class="mt-1">
                  <a
                    :href="item.Link"
                    target="_blank"
                    class="google-font"
                    style="color: #3E4551;text-decoration: none;font-size:100%"
                  >{{item.LinkName}}</a>
                  <br />
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-layout wrap justify-center row class="mb-0">
          <v-flex xs12 md10 lg10>
            <v-divider></v-divider>
            <v-toolbar flat color="white" class="pa-0 mx-0" style="padding:0 !important">
              <v-toolbar-title
                class="google-font pl-0 ml-0 mr-3"
                style="font-size:140%"
              >{{ChapterDetails.ChapterName}}</v-toolbar-title>

              <v-btn
                v-for="(item,i) in FooterData.FooterEndSession"
                :key="i"
                :to="item.Link"
                target="_blank"
                class="ml-0 google-font primary hidden-sm-and-down"
                style="text-transform: capitalize;font-size:100%"
                flat
              >{{ item.LinkName }}</v-btn>
            </v-toolbar>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
import FooterData from "@/assets/data/footer.json";
export default {
  data() {
    return {
      ChapterDetails: ChapterDetails,
      FooterData: FooterData,
      clipped: false,
      drawer: false,
      fixed: false,
      userdata: {},
      items: [
        {
          icon: "mdi-view-dashboard",
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
          icon: "mdi-information-variant",
          title: "About Us",
          subtitle: "Read more about us",
          to: "/about",
          iconClass: "success white--text"
        },
        {
          icon: "mdi-deskphone",
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
          icon: "mdi-calculator",
          title: "Calculator",
          subtitle: "Repayment Schedule generator",
          to: "/calculator",
          iconClass: "success white--text"
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
  created: function() {
    let vm = this;
    vm.$store.dispatch("profile/getProfile");
    vm.userdata = vm.$store.getters["profile/userInfo"];
  }
};
</script>
<style>
.app {
  font-family: "Montserrat", sans-serif;
}
</style>
