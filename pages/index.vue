<template>
  <v-app dark class="app">
    <v-container fluid>
      <v-card class="mx-auto" style flat>
        <v-toolbar color="deep-purple accent-4" cards dark flat>
          <v-card-title class="title font-weight-regular">{{ $t('homePage') }}</v-card-title>
          <v-spacer></v-spacer>
          <v-select
            :items="locales"
            v-model="locale"
            @change="changeLanguage('sw')"
            label="Select Languages"
            dense
          ></v-select>
        </v-toolbar>
        <v-row align="center" class="pa-6">
          <v-col cols="12" sm="6">
            <div class="text-center">
              <p class="text-center font-weight-bold">
                Hello there.
                <br />
                Welcome to {{ $t('appName') }}
              </p>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-center">
              <div class="my-2 pa-1">
                <v-btn color="primary" dark to="/calculator" router exact>{{ $t('goToCalculator') }}</v-btn>
              </div>
              <div class="my-2 pa-1">
                <v-btn color="primary" to="/signin" dark>{{ $t('signin') }}</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
export default {
  layout(context) {
    return "home";
  },
  data: () => ({
    locale: "",
    locales: ["en", "sw"]
  }),
  computed: {
  
  },
  methods: {
    changeLanguage(lang) {
      // Change the i18n context object's locale
      // This makes it so the correct locale file is used
      this.$i18n.locale = lang;
      console.log(lang);
    }
  }
};
</script>
<style lang="scss" scoped>
.my-2,
p {
  padding: none;
  color: #006da3ff;
  text-align: center;
}
</style>