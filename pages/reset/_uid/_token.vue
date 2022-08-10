<template>
  <v-col cols="12" xs="12" md="4">
    <v-snackbar v-model="getReset.success" timeout="2000">
      {{ getReset.message }}
    </v-snackbar>
    <v-card outlined class="elevation-1">
      <v-card-text>
        <v-form class="pa-3 pt-6">
          <v-text-field
            label="New Password"
            outlined
            v-model="password1"
            :rules="[rules.password]"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            outlined
            v-model="password2"
            :rules="[rules.password]"
          ></v-text-field>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              :disabled="!password1"
              :loading="getReset.loading"
              small
              block
              class="white--text"
              color="primary"
              depressed
              @click.stop.prevent="newPassword"
              >Reset Password</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      password1: "",
      password2: "",
      rules: {
        password: (v) =>
          (v || "").match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
          ) ||
          "Password must contain an upper case letter, a numeric character, and a special character",
      },
    };
  },
  layout: "signup",
  computed: {
    ...mapGetters(["getReset"]),
  },
  methods: {
    newPassword(e) {
      e.preventDefault();
      let data = {
        new_password1: this.password1,
        new_password2: this.password2,
        uid: this.$route.params.uid,
        token: this.$route.params.token,
      };

      console.log(data);

      this.$store.dispatch("_sendResetPasswordData", data);
    },
  },
};
</script>
