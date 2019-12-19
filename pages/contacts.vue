<template>
  <v-app class="app">
    <v-container fluid>
      <v-card 
      class="mx-auto">
        <v-card-title>Contact Us</v-card-title>
        <v-card-subtitle>Tell us your views </v-card-subtitle>
        <div class="padding">
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-text-field
            v-model="message"
            :rules="emailRules"
            label="What is your Mesage ?"
            required
            outlined
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn color="secondary" class="mr-4" outlined small @click="validate">Send Message</v-btn>
        </v-form>
        </div>
      </v-card>
    </v-container>
  </v-app>
</template>
Name
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    messageRules: [
      v => !!v || "Message is required",
      v =>
        (v && v.length < 30) ||
        "Message must be greater than 30 texts to be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    lazy: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
