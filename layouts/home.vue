<template>
  <v-app
    class="aspire"
    style='background-image: url("/kopalogo.png"); background-repeat: no-repeat; background-position: center top;  margin-top: 10px;'>
     <v-app-bar flat dense fixed app color="white">
      
      <img width="80px" class="mt-2" src="/kopalogo.png" alt="KopaSmart" />
      <v-spacer></v-spacer>
      <v-btn small text elevation="0" class="px-5 mr-1" color="primary">Sign Up</v-btn>
      <v-btn small elevation="1" class="px-5" color="primary">Sign In</v-btn>
    </v-app-bar>
    <v-main>
      <nuxt/>
    </v-main>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      locales: ["English", "Kiswahili"]
    };
  },
  head() {
    return {
      title: 'Home Page'
    }
  },
};
</script>
<style scoped>

body{
    background: #3A1C71;
    background: -webkit-linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
    background: linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
  zoom:100%;
}
</style>
