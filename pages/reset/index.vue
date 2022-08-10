<template>
  <v-col cols="12" xs="12" md="4">
    <v-snackbar v-model="getReset.success" timeout="2000">
      {{ getReset.message }}
    </v-snackbar>
    <v-card outlined class="elevation-1">
      <v-card-text>
        <v-form class="pa-3 pt-6">
          <v-text-field
            label="Email"
            outlined
            v-model="email"
            :rules="[rules.email]"
          ></v-text-field>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              :disabled="!email"
              :loading="getReset.loading"
              small
              block
              class="white--text"
              color="primary"
              depressed
              @click="resetPassword"
              >Reset</v-btn
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
      email: "",
      rules: {
        email: (v) => (v || "").match(/@/) || "Please enter a valid email",
      },
    };
  },
  computed: {
    ...mapGetters(["getReset"]),
  },
  layout: "signup",
  methods: {
    resetPassword() {
      this.$store.dispatch("_sendResetPasswordEmail", { email: this.email });
    },
  },
};
</script>
