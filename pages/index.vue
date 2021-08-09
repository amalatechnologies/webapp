<template>
    <v-container class="fill-height" fluid>
   
      <v-row justify="center" align="center" align-content="center">
        <v-col cols="12">
          <div class="home_tool_lg">
       {{ $t('label.message.motto') }}
            </div>
       <div class="white--text text-center font-weight-bold">
        {{ $t('label.message.aboutusmessage') }}<br>
        {{ $t('label.message.aboutusmessage2') }}
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
