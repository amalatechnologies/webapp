<template>
  <v-app class="app"
  
  >
    <v-container  class="fill-height" fluid>
       <v-row align="center" class="justify-center" justify="center" >
       
      <v-card width="400" class="elevation-12">

        <v-toolbar prominent :src="image" flat
         
      
        >
            <v-toolbar-title  dense>
              <img
                
                class="mt-6"
                src="/kopalogo.png"
                alt="KopaSmart"
              />
            </v-toolbar-title>
            <v-spacer ></v-spacer>
          </v-toolbar>
             <v-card-text>   
        <v-form ref="form" class="pa-4 pt-6 text-center">
        
          <v-container fluid>
            <v-row>
  
              <v-col >
                 
                <v-text-field
                  type="text"
                  label="Username"
                   required
                  :rules="[rules.required]"
                  prepend-icon="mdi-account"
                  single-line
                  v-model="username"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  type="password"
                  label="Password"
                   required
                  :rules="[rules.required, rules.min]"
                  :prepend-icon=" show1 ? 'mdi-eye':'mdi-eye-off'"
                  single-line
                  autocomplete
                ></v-text-field>

                <div class="my-2">
                  <v-btn
                    color="info"
                    dark
                    rounded
                    small
                    class="font-weight-light"
                    @click="signInWithCredential"
                  >{{ $t('label.button.buttonsignin') }}</v-btn>
                </div>

                <p class="font-weight-light">{{ $t('qnNewToKopasmart') }}</p>
                <router-link to="/signup" tag="a">
                  <a>{{ $t('createAccount') }}</a>
                    
                </router-link>
                <br>
               <label  class="  red text-center">{{error}}</label>
              </v-col>
           
            </v-row>
          </v-container>
        </v-form>
        </v-card-text>   
      </v-card>
    
    
    
    
    
    
    
    
    
    
    
    
    </v-row>
    
    </v-container>
  </v-app>
</template>
<script lang="js" src="~/static/js/signin.js">

</script>
