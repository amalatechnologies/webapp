<template>
  <v-app dark class="app">
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">{{title}}</v-list-item-title>
          <v-list-item-subtitle>{{motto}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list nav dense shaped='true'>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
              <v-list-item-subtitle v-text="item.subtitle" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item></v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app collapse-on-scroll="true">
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
      <v-appbar-items v-if="$vuetify.breakpoint.smAndUp">
        <v-btn
          flat
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          text
        >{{item.title}}</v-btn>
      </v-appbar-items>
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
    <v-footer :fixed="fixed" app>
      <span>&copy; {{year}}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-view-dashboard",
          title: "Home",
          subtitle: "Lorem ipsum dolor sit de amet",
          to: "/"
        },
        {
          icon: "mdi-help-circle",
          title: "Help",
          subtitle: "Lorem ipsum dolor sit de amet",
          to: "/help"
        },
        {
          icon: "mdi-information-variant",
          title: "About Us",
          subtitle: "Lorem ipsum dolor sit de amet",
          to: "/about"
        },
        {
          icon: "mdi-phone-classic",
          title: "Contact Us",
          subtitle: "Lorem ipsum dolor sit de amet",
          to: "/contacts"
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "Kopasmart",
      motto: "Making awesome stuffs",
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
.app {
  font-family: "Montserrat", sans-serif;
}
</style>
