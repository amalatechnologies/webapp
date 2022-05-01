<template>
  <v-app class="aspire">
    <v-app-bar flat fixed app color="white">
      <img width="80px" class="mt-2" src="/kopalogo.png" alt="KopaSmart" />
      <v-spacer></v-spacer>
      <v-btn
        to="/signup"
        small
        outlined
        elevation="0"
        class="px-5 mr-1"
        color="primary"
        @click="loginmenu=false"
        >Sign Up</v-btn
      >
      <v-menu
        v-model="loginmenu"
        :close-on-content-click="false"
        :close-on-click="true"
        transition="slide-y-transition"
        bottom
        content-class="notched"
      >
        <template  v-slot:activator="{ on, attrs }">
          <v-btn
            small
            elevation="1"
            class="px-5"
            color="primary"
            v-bind="attrs"
            v-on="on" 
            >Sign In</v-btn
          >
        </template>
        <v-form ref="form" class="pa-4 pt-6 text-center">
          <v-container class="px-2 py-10"  fluid>
            <v-row>
              <v-col>
                <v-text-field
                  type="text"
                  label="Username"
                  required
                  outlined
                  dense 
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-account"
                  single-line
                  v-model="payload.username"
                ></v-text-field>

                <v-text-field
                  v-model="payload.password"
                  prepend-inner-icon="mdi-lock"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  :rules="[rules.required, rules.min]"
                  @click:append="show1 = !show1"
                  label="Password"
                  placeholder="********"
                  name="input-10-1"
                  counter
                  required
                  dense
                  outlined
                  single-line
                  autocomplete
                ></v-text-field>

                <div class="my-2">
                  <v-btn
                    color="info"
                    dark
                    block
                    small
                    class="font-weight-light"
                    @click="signInWithCredential"
                    >{{ $t("label.button.buttonsignin") }}</v-btn
                  >
                </div>
                <br />
                <label class="red text-center">{{ error }}</label>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-menu>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      locales: ["English", "Kiswahili"],
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      loginmenu:false,
      payload:{
         password: "",
      username: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match",
      },
    };
  },

  methods: {
    signInWithCredential() {
      this.loginmenu = false;
      this.$store.dispatch("login", this.payload);
    },

  },
};
</script>

