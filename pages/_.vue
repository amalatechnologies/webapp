<template>
  <v-app class="app">
    <v-container fluid>
      <v-card class="mx-auto center">
        <v-img :src="require('~/assets/images/404.png')">
          <v-btn class="center info" to="/">Take me back Home</v-btn>
        </v-img>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "home",
  data() {
    return {};
  },
  head() {
    return {
      title: "Page Not Found"
    };
  }
};
</script>
<style scoped>
.center {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
