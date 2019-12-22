<template>
  <v-app class="app">
   <v-container fluid>
 <v-card class="mx-auto" style flat>
      <v-toolbar color="primary" cards dark flat>
      
        <v-subheader class=" font-weight-regular">{{ $t('label.button.buttonsignin')}}</v-subheader >
        <v-spacer></v-spacer>
        
      </v-toolbar>
      <v-form ref="form" v-model="form" class="pa-4 pt-6 text-center">
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
                <v-btn color="primary" dark to="/homepage">{{ $t('signIn') }}</v-btn>
              </div>

              <p>{{ $t('qnNewToKopasmart') }}</p>
              <router-link to="/signup" tag="a">
                <a>{{ $t('createAccount') }}</a>
              </router-link>
            </v-col>
            <v-col cols="12" sm="6">
              <p class="font-weight-bold">{{ $t('homeDescriptionTitle') }}</p>

              <p>{{ $t('homeDescription') }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>


   </v-container>
  </v-app>
</template>
<script lang="js" src="~/static/js/signin.js">

</script>