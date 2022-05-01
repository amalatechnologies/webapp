<template>
  <v-app class="app">
    <v-container class="fill-height " fluid>
      <v-row no-gutters>
        <v-col cols="12" class="d-flex justify-center align-center text-h1 gradient font-weight-bold primary--text">Page not found</v-col>
        <v-col cols="12" class="d-flex justify-center align-center  font-weight-bold accent--text pt-4">Sorry, then page you were looking for is not found</v-col>
        <v-col class="d-flex justify-center align-center mt-5" cols="12">
            <NuxtLink to="/"> Home page </NuxtLink>
          </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "fault",
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
