<template>
  <v-container class="fill-height" fluid>
    <v-row class=" align-center" >
      <v-col  cols="12" sm="6"  class="justify-center justify-start align-center">
        <p class="
              text-center text-h3 text-sm-h2 text-md-h1
              font-weight-black
              gradient
            ">AmalaSoko</p>
        <div class="text-center text-h4 text-sm-h3 secondary--text gradient">
          {{ $t("label.message.motto") }}
        </div>
        <div class="text-center ">
          <p class="mt-2 black--text">{{ $t("label.message.aboutusmessage") }}</p>

          <p class="mt-2 black--text text-h5">{{ $t("label.message.aboutusmessage2") }}</p>
        </div>
      </v-col>
      <v-col class="d-flex justify-center justify-md-end align-center" cols="12" sm="6">
        <img height="300" width="510" src="../assets/images/logo.png" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  meta: {
    auth: { requiresAuth: false },
  },
  layout(context) {
    return "signin";
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
      { locale: "Arabic", lang: "ar" },
    ],
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
    },
  },
  beforeMount() {
    if (!(localStorage.getItem("qAccessToken") == null)) {
      this.changeLabel();
      //this.$router.push("/homepage");
    }
  },
};
</script>
