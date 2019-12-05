
<template>
  <v-app dark class="app">
    <v-container fluid>
      <v-row class="hidden-md-and-up">
        <v-col cols="4" sm="4" class="d-flex child-flex"></v-col>
        <v-col cols="4" sm="4" class="d-flex child-flex">
          <img :src="require('~/assets/images/logo_gold.png')" alt="Kopasmat" />
        </v-col>
        <v-col cols="4" sm="4" class="d-flex child-flex">
        </v-col>
      </v-row>

      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
    </v-container>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      locales: ["English", "Kiswahili"]
    };
  }
};
</script>

