<template>
  <v-app dark class="app">
    <v-container fluid>
      <v-card class="mx-auto" style flat>
        <v-toolbar color="primary" cards dark flat>
          <v-card-title class="title font-weight-regular">{{ $t('homePage') }}</v-card-title>
          <v-spacer></v-spacer>
          <v-menu bottom left :offset-x="offset">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">{{ $t('label.button.btnchangelanguages') }}</v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in locales" :key="i" @click="changeLanguage(item.lang)">
                <v-list-item-title>{{ item.locale }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-row align="center" class="pa-6">
          <v-col cols="12" sm="6">
            <div class="text-center">
              <p class="text-center font-weight-bold">
                {{$t('label.tooltip.tooltiphello')}}
                <br />
                {{$t('label.tooltip.tooltipwelcometo')}} {{ $t('appName') }}
              </p>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-center">
              <div class="my-2 pa-1">
                <v-btn color="primary" dark to="/calculator" router exact>{{ $t('label.button.btncalculator') }}</v-btn>
              </div>
              <div class="my-2 pa-1">
                <v-btn color="primary" to="/signin" dark>{{ $t('label.button.btnsignin') }}</v-btn>
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
    locales: [
      { locale: "English", lang: "en" },
      { locale: "Swahili", lang: "sw" },
      { locale: "French", lang: "fr" },
      { locale: "Arabic", lang: "ar" }
    ]
  }),
  computed: {},
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