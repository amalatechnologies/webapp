<template>
  <v-app class="aspire">
    <v-app-bar flat fixed app color="white">
      <img width="80px" class="mt-2" src="/kopalogo.png" alt="KopaSmart" />
      <v-spacer></v-spacer>
      <v-btn
        to="/"
        small
        outlined
        elevation="0"
        class="px-5 mr-1"
        color="primary"
        @click="loginmenu=false"
        >Sign In</v-btn
      >
     
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
 
    };
  },

  methods: {
  

  },
};
</script>

