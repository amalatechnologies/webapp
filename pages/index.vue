<template>
  <v-app dark class="app">
    <v-container fluid>
      <v-card class="mx-auto" style flat>
        <v-toolbar color="info" cards dark flat>
          <v-row align="center">
            <v-col cols="6" sm="6">
              <v-subheader>{{ $t('homePage') }}</v-subheader>
            </v-col>

            <v-col cols="6" sm="6">
              <v-select
                v-model="select"
                :hint="`${select.locale}, ${select.lang}`"
                :items="locales"
                item-text="locale"
                item-value="lang"
                label="Select"
                persistent-hint
                return-object
                single-line
                @change="changeLanguage(select.lang)"
              ></v-select>
            </v-col>
          </v-row>
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
                <v-btn
                  color="info"
                  small
                  round
                  to="/calculator"
                  router
                  exact
                  class="font-weight-light"
                >{{ $t('label.button.btncalculator') }}</v-btn>
              </div>
              <div class="my-2 pa-1">
                <v-btn
                  color="success"
                  class="font-weight-light"
                  round
                  small
                  @click="routingAction"
                  dark
                >{{label}}</v-btn>
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
    selectedLocale: null,
    select: { locale: "English", lang: "en" },
    label: "Sign In",
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
    },
    changeLabel() {
      this.label = "Go Home";
    },
    routingAction() {
      if (this.$store.getters["signin/isLoggedIn"] === true) {
        this.$router.push("/homepage");
      } else {
        this.$router.push("/signin");
      }
    }
  },
  beforeMount() {
    if (this.$store.getters["signin/isLoggedIn"] === true) {
      this.changeLabel();
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