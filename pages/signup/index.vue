<template>
  <v-app class="app">
    <v-container fluid>
      <v-card class="mx-auto" style="max-width=540">
      <v-toolbar color="primary" dark flat>
    
        <v-subheader  class=" font-weight-regular">{{ $t('label.button.buttonsignup') }}</v-subheader>
        <v-spacer></v-spacer>
        
      </v-toolbar>
      <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-row>
        <v-col cols="12" sm="6">
           <v-text-field
           ref="email"
          v-model="email"
          :rules="[rules.email]"
          label="Email address"
          placeholder="email@example.com"
          type="email">
          </v-text-field>

        <v-text-field
        ref="phone"
         v-model="phone"
           label="Phone number"
           placeholder="e.g. +255716 000 000"
           >
        </v-text-field>
       

        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
          v-model="password"
          :rules="[rules.password, rules.length(8)]"
          color="deep-purple"
          counter="8"
          label="Password"
          placeholder="........"
          type="password">
          </v-text-field>
          
        <v-textarea
         v-model="biography" 
         auto-grow  
         placeholder="Who are you ?"
         color="deep-purple"
        label="Bio" rows="1">
          </v-textarea>
        </v-col>
      </v-row>
        <v-checkbox v-model="agreement" :rules="[rules.required]" color="deep-purple">
          <template v-slot:label>
            I agree to the&nbsp;
            <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
            &nbsp;and&nbsp;
            <a
              href="#"
              @click.stop.prevent="dialog = true"
            >Privacy Policy</a>*
          </template>
        </v-checkbox>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text @click="$refs.form.reset()">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!form"
          :loading="isLoading"
          class="white--text"
          color="deep-purple accent-4"
          depressed
        >Submit</v-btn>
      </v-card-actions>
      <v-dialog v-model="dialog" absolute max-width="400" persistent>
        <v-card>
          <v-card-title class="headline grey lighten-3">Legal</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text @click="agreement = false, dialog = false">No</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              class="white--text"
              color="deep-purple accent-4"
              @click="agreement = true, dialog = false"
            >Yes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
    </v-container>
    
  </v-app>
</template>

<script lang="js" src="./signup.js">

</script>