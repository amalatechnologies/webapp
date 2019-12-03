<template>
  <v-app class="app">
       <v-card
    class="mx-auto"
    style=""
    flat
  >

    <v-toolbar
      color="deep-purple accent-4"
      cards
      dark
      flat>
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-title class="title font-weight-regular" > {{ $t('signIn')}}</v-card-title>
      <v-spacer></v-spacer>
      <!--<v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>-->
    </v-toolbar>
    <v-form
      ref="form"
      v-model="form"
      class="pa-4 pt-6 text-center"
    >
   
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  type="text"
                  label="Username"
                  :rules="[rules.required]"
                  prepend-icon="mdi-account"
                  single-line
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  type="password"
                  label="Password"
                  :rules="[rules.required, rules.min]"
                  :prepend-icon=" show1 ? 'mdi-eye':'mdi-eye-off'"
                  single-line
                ></v-text-field>

                <div class="my-2">
                  <v-btn color="deep-purple" dark>{{ $t('signIn') }}</v-btn>
                </div>

                <p>{{ $t('qnNewToKopasmart') }}</p>
                <router-link to="/signup" tag="a">
                  <a>{{ $t('createAccount') }}</a>
                </router-link>
              </v-col>
              <v-col cols="12" sm="6">
                <p class> {{ $t('homeDescriptionTitle') }}</p>

                <p>{{ $t('homeDescription') }}</p>
              </v-col>
            </v-row>
          </v-container>

    </v-form>
       </v-card>
        
  </v-app>
</template>
<script>
export default {
  layout: "home",
  data: () => ({
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: "Password",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
  })
};
</script>