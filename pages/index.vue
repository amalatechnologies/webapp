<template>
    <v-container class="fill-height" fluid>
     <!-- <v-row align="center" class="justify-center" justify="center">
        <v-col cols="12" sm="4" md="4">
      <v-card class="elevation-12" max-width="400">
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
                  rounded
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
                  rounded
                  small
                  @click="routingAction"
                  dark
                >{{label}}</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
        </v-col>
      </v-row>-->
      <v-row justify="center" align="center" align-content="center">
        <v-col cols="12">
          <div class="typewriter">
            <h1 class="home_tool_lg">
              {{$t('label.tooltip.tooltiphello')}} 	&#128521;
              {{$t('label.tooltip.tooltipwelcometo')}} {{ $t('appName') }} !!!
            </h1>
          </div>

        </v-col>
        <v-col cols="12" class="my-2 mt-12 pa-1" sm="12">
          <v-row justify="center" align="center">
            <v-col cols="12" md="4" sm12>
              <v-btn
                color="white"
                large
                depressed
                outlined
                to="/calculator"
                router
                exact
                class="font-weight-bold"
              >{{ $t('label.button.btncalculator') }}</v-btn>
            </v-col>
            <v-col cols="12"  md="4" sm12></v-col>
            <v-col cols="12"  md="4" sm12>
              <v-btn
                color="success"
                class="font-weight-bold"
                large
                depressed
                @click="routingAction"
                dark
              >{{label}}</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
     <!-- <v-row align="center" class="pa-6">
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
                small
                @click="routingAction"
                dark
              >{{label}}</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>-->
    </v-container>

</template>
<script>
export default {
  meta: {
    auth: { requiresAuth: false }
  },
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
    },
    changeLabel() {
      this.label = "Go Home";
    },
    routingAction() {
      if (!(localStorage.getItem("qAccessToken") === null)) {
        this.$router.push("/home");
      } else {
        this.$router.push("/signin");
      }
    }
  },
  beforeMount() {
    if (!(localStorage.getItem("qAccessToken") == null)) {
      this.changeLabel();
      //this.$router.push("/homepage");
    }
  }
};
</script>
<style lang="scss" scoped>
.my-2,
.home_tool {
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  font-family: 'Inconsolata', Consolas, monospace;
  font-size: 1em;
}
.home_tool_lg{
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  font-family: 'Inconsolata', Consolas, monospace;
  font-size: 3em;
}
</style>
