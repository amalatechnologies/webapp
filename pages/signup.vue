<template>
  <!-- This commented block is using the shared layout of signup -->

  <!-- <v-container class="fill-height" >
      <v-row no-gutters justify="center" align="center" align-content="center">
        <v-col cols="12" xs="12" sm="6" md="6" class="pa-5">
          <p
            class="
              text-center text-h3 text-sm-h2 text-md-h1
              font-weight-black
              gradient
            "
          >
            AmalaSoko
          </p>
          <div class="text-center text-h4 text-sm-h3 secondary--text gradient">
            {{ $t("label.message.motto") }}
          </div>
          <div class="text-center">
            <p class="mt-2 black--text">
              {{ $t("label.message.aboutusmessage") }}
            </p>

            <p class="mt-2 black--text">
              {{ $t("label.message.aboutusmessage2") }}
            </p>
          </div>
        </v-col>
        <v-spacer></v-spacer> -->

  <v-col cols="12" xs="12" md="4" class="d-flex justify-end align-center">
    <v-card outlined class="elevation-1" max-width="540">
      <v-card-text>
        <v-form ref="form" v-model="form" class="pa-4 pt-6">
          <v-row no-gutters>
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                v-model="username"
                label="Username"
                outlined
                dense
                :rules="[rules.length(5)]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                v-model="email"
                outlined
                dense
                :rules="[rules.email]"
                label="Email address"
                type="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                prepend-inner-icon="mdi-lock"
                v-model="password"
                outlined
                dense
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                :rules="[rules.password, rules.length(8)]"
                color="deep-purple"
                counter="8"
                label="Password"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                prepend-inner-icon="mdi-lock"
                v-model="rePassword"
                outlined
                dense
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show2 = !show2"
                auto-grow
                :rules="[rules.password, rules.length(8)]"
                color="deep-purple"
                label="Confirm Password"
                type="password"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-select
                v-model="role"
                item-text="name"
                item-value="value"
                :items="items"
                label="Select role"
              ></v-select>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          :disabled="!form"
          :loading="isLoading"
          small
          block
          class="white--text"
          color="primary"
          depressed
          @click="signUpWithCredentials"
          >{{ $t("label.button.buttonsignup") }}</v-btn
        >
      </v-card-actions>
      <v-dialog v-model="dialog" absolute max-width="400" persistent>
        <v-card>
          <v-card-title class="headline grey lighten-3">Legal</v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</v-card-text
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
  <!-- </v-row>
    </v-container> -->
</template>

<script lang="js" src="~/static/js/signup.js"></script>
