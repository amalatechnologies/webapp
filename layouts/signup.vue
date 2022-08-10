<template>
  <v-app class="aspire">
    <v-app-bar flat fixed app color="white">
      <img
        width="80px"
        class="mt-2"
        src="../assets/images/logo.png"
        alt="Amala Soko"
      />
      <v-spacer></v-spacer>
      <v-btn
        to="/"
        small
        outlined
        elevation="0"
        class="px-5 mr-1"
        color="primary"
        @click="loginmenu = false"
        >Sign In</v-btn
      >
    </v-app-bar>
    <v-main>
      <v-container class="fill-height">
        <v-row
          no-gutters
          justify="center"
          align="center"
          align-content="center"
        >
          <v-col cols="12" xs="12" sm="6" md="6" class="pa-5">
            <p
              class="text-center text-h3 text-sm-h2 text-md-h1 font-weight-black gradient"
            >
              AmalaSoko
            </p>
            <div
              class="text-center text-h4 text-sm-h3 secondary--text gradient"
            >
              {{ $t("label.message.motto") }}
            </div>
            <div class="text-center">
              <p class="mt-2 black--text">
                {{ $t("label.message.aboutusmessage") }}
              </p>

              <p class="mt-2 black--text">
                {{ $t("label.message.aboutusmessage2") }}
              </p>
            </div>
          </v-col>
          <v-spacer></v-spacer>

          <nuxt />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>
