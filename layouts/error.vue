<template>
  <v-app dark>
    <v-container class="fill-height d-flex align-center justify-center" fluid>
      <div class="d-flex justify-center align-center">
        <v-row>
          <v-col class="d-flex justify-center align-center" cols="12" v-if="error.statusCode === 404">
            <h1>
              {{ pageNotFound }}
            </h1>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="12" v-else>
            <p class="text-h2 font-weight-bold gradient">
              {{ otherError }}
            </p>
          </v-col>
          <v-col class="d-flex justify-center align-center" cols="12">
            <NuxtLink to="/" class="font-weight-bold"> Home page </NuxtLink>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "fault",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error has occurred",
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
