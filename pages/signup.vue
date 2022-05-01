<template>
  <v-app class="app">
    <v-container fluid>
      <v-row class="justify-end">
        <v-col>
          <img width="400px" src="/kopalogo.ico" alt="AmalaSoko" />
        </v-col>

        <v-col>
          <v-card class="elevation-20" max-width="540">
            <v-toolbar color="primary" dark flat>
              <v-subheader class="font-weight-regular">{{
                $t("label.button.buttonsignup")
              }}</v-subheader>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-form ref="form" v-model="form" class="pa-4 pt-6">
              <v-row>
                <v-col cols="12" sm="12">
                  <v-text-field
                    ref="username"
                    v-model="username"
                    label="Username"
                    :rules="[rules.length(5)]"
                    placeholder="Username"
                  ></v-text-field>

                  <v-text-field
                    ref="email"
                    v-model="email"
                    :rules="[rules.email]"
                    label="Email address"
                    placeholder="email@example.com"
                    type="email"
                  ></v-text-field>

                  <v-text-field
                    prepend-inner-icon="mdi-lock"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    :rules="[rules.password, rules.length(8)]"
                    color="deep-purple"
                    counter="8"
                    label="Password"
                    placeholder="********"
                  ></v-text-field>

                  <v-text-field
                    prepend-inner-icon="mdi-lock"
                    v-model="rePassword"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show2 = !show2"
                    auto-grow
                    :rules="[rules.password, rules.length(8)]"
                    placeholder="********"
                    color="deep-purple"
                    label="Confirm Password"
                    type="password"
                  ></v-text-field>

                  <v-select
                    v-model="role"
                    item-text="name"
                    item-value="value"
                    :items="items"
                    label="Role"
                  ></v-select>
                </v-col>
              </v-row>
              <v-checkbox
                v-model="agreement"
                :rules="[rules.required]"
                color="deep-purple"
              >
                <template v-slot:label>
                  I agree to the&nbsp;
                  <a href="#" @click.stop.prevent="dialog = true"
                    >Terms of Service</a
                  >
                  &nbsp;and&nbsp;
                  <a href="#" @click.stop.prevent="dialog = true"
                    >Privacy Policy</a
                  >*
                </template>
              </v-checkbox>
            </v-form>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="info" to="/">{{
                $t("label.button.buttonsignin")
              }}</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!form"
                :loading="isLoading"
                class="white--text"
                color="deep-purple accent-4"
                depressed
                @click="signUpWithCredentials"
                >{{ $t("label.button.buttonsignup") }}</v-btn
              >
            </v-card-actions>
            <v-dialog v-model="dialog" absolute max-width="400" persistent>
              <v-card>
                <v-card-title class="headline grey lighten-3"
                  >Legal</v-card-title
                >
                <v-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</v-card-text
                >
                <v-divider></v-divider>
                <v-card-actions>
                  <v-btn text @click="(agreement = false), (dialog = false)"
                    >No</v-btn
                  >
                  <v-spacer></v-spacer>
                  <v-btn
                    class="white--text"
                    color="deep-purple accent-4"
                    @click="(agreement = true), (dialog = false)"
                    >Yes</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="js" src="~/static/js/signup.js">

</script>