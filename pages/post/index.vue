<template>
  <v-app class="app">
    <v-container fluid pa-0 ma-0>
      <v-card class="mx-auto pa-0 ma-0" flat>
        <v-form ref="form" v-model="form" class="pa-4 pt-6">
          <v-textarea
            v-model="text_content"
            auto-grow
            outlined
            color="deep-purple"
            label="New Post"
            rows="1"
            :rules="[rules.name, rules.length(20)]"
          ></v-textarea>
        <v-file-input
    v-model="src"
     label="Upload Image"
      :rules="[rules.required]"
    accept="image/png, image/jpeg, image/bmp"
    filled
    prepend-icon="mdi-camera"
  

  ></v-file-input>
 

            
        </v-form>
        <v-card-actions>
          <v-btn
            outlined
            class="accent white--text"
            @click="$refs.form.reset()"
          >{{ $t('label.button.btnclear')}}</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!form"
            :loading="isLoading"
            class="white--text"
            color="deep-purple accent-4"
            depressed
            @click.stop="createNewPost()"
          >{{ $t('label.button.btnsubmit')}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      src:null,
      form: false,
      dialog: false,
      isLoading: false,
      text_content: null,
      src:null,
      rules: {
        email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
        length: (len) => (v) =>
          (v || "").length >= len ||
          `Invalid character length, required ${len}`,
        password: (v) =>
          !!(v || "").match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
          ) ||
          "Password must contain an upper case letter, a numeric character, and a special character",
        required: (v) => !!v || "This field is required",



      },




    };
  },
  methods: {


    createNewPost() {
     
              this.$store.dispatch("new_post", {
       text_content: this.text_content,
        src:this.src
     })
     
     .then(()=>{
       this.$router.push("/home");
     })
      
    },
  },
};
</script>
