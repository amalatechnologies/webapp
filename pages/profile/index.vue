<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <v-container py-0>
          <v-layout wrap>
            <v-flex xs12 md4>
              <v-text-field
                v-model="company"
                :label="$t('label.heading.company')"
                placeholder="e.g Singo Africa"
                disabled
              />
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="userdata.username"
                class="purple-input"
                :label="$t('label.heading.username')"
                placeholder="e.g johnDoe"
              />
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="userdata.email"
                :label="$t('label.heading.emailaddress')"
                class="purple-input"
                placeholder="e.g example@email.com"
              />
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="userdata.first_name"
                :label="$t('label.heading.firstname')"
                class="purple-input"
                placeholder="John"
              />
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="userdata.middle_name"
                :label="$t('label.heading.middlename')"
                class="purple-input"
                placeholder="Doe"
              />
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="userdata.last_name"
                :label="$t('label.heading.lastname')"
                class="purple-input"
                placeholder="Doe"
              />
            </v-flex>

            <v-flex xs12 md8>
              <v-text-field
                v-model="address"
                :label="$t('label.heading.addressline')"
                placeholder="Snow Rock PI"
                class="purple-input"
              />
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="userdata.phone"
                :label="$t('label.heading.phonenumber')"
                placeholder="e.g 0716 xxx xxx"
                class="purple-input"
              />
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="city"
                :label="$t('label.heading.city')"
                placeholder="Snow Rocky"
                class="purple-input"
              />
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="country"
                :label="$t('label.heading.country')"
                placeholder="e.g Tanzania"
                class="purple-input"
              />
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                v-model="postal"
                class="purple-input"
                :label="$t('label.heading.postalcode')"
                placeholder="0610 Snow Rocky"
                type="number"
              />
            </v-flex>
            <v-flex xs12>
              <v-textarea
                class="purple-input"
                :label="$t('label.heading.biography')"
                v-model="userdata.biography"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </v-flex>
            <v-flex xs12 text-xs-right>
              <div>
                <v-btn
                  v-if="userdata.username != null"
                  color="info lighten-1"
                  class="mx-0 font-weight-light"
                  style="text-transform: capitalize"
                  @click.stop="dialog1 = true"
                >{{ $t("label.button.btnupdateprofile") }}</v-btn>

                   <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                    
                     <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="button"
                  medium
                  elevation="2"
                >
                  <v-icon small>mdi-lock</v-icon>
                  &nbsp;&nbsp;Change Password</v-btn
                >
                
                </template>
               
                <v-card flat>
              <v-toolbar dark flat class="primary">
                <v-toolbar-title><h3>Update password</h3></v-toolbar-title>
              </v-toolbar>
              <v-card-text class="pa-4">
                  <v-form
                  @submit.prevent="updatepassword"
                  id="check-login-form"
                  class="mt-3"
                  ref="form"
                  v-model="valid"
                > 
                <v-text-field
                v-model="form_data.old_password"
                prepend-inner-icon="mdi-lock"
                :append-icon="show1 ? 'mdi-eye':'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                 @click:append="show1 = !show1"
                     error-count="8"
                    label="Old password"
                    placeholder="********"
                    name="input-10-1"
                    counter
                    dense
                    outlined
                    required
                    class="mt-2 ma-5">
                </v-text-field>

                <v-text-field
                  v-model="form_data.new_password"
                    prepend-inner-icon="mdi-lock-outline"
                    :append-icon="show2 ? 'mdi-eye':'mdi-eye-off'"
                    :type="show2 ? 'text' : 'password'"
                    :rules="[rules.required, rules.min]"
                    @click:append="show2 = !show2"
                    error-count="8"
                    label="New password"
                    placeholder="********"
                    name="input-10-1"
                    hint="At least 8 characters"
                    counter
                    dense
                    outlined
                    required
                    class="mt-2 ma-5"
                  ></v-text-field>
                   <v-text-field
                     v-model="confirmPassword"
                    prepend-inner-icon="mdi-lock-outline"
                    :append-icon="show3 ? 'mdi-eye':'mdi-eye-off'"
                    :type="show3 ? 'text' : 'password'"
                    :rules="[
                      rules.required,
                      rules.min,
                      passwordConfirmationRule
                    ]"
                    @click:append="show3 = !show3"
                    error-count="8"
                    label="Confirm password"
                    placeholder="********"
                    name="input-10-1"
                    counter
                    dense
                    outlined
                    required
                    class="mt-2 ma-5"
                  ></v-text-field>
                </v-form>
              </v-card-text>

             <v-divider></v-divider>

             <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="button cancel" small @click="dialog = false">
                  Cancel
                </v-btn>
                <v-btn
                  class="button"
                  small
                  type="submit"
                  :disabled="!valid"
                  form="check-login-form"
                >
                  Update
                </v-btn>
              </v-card-actions>
                 </v-card>
                   </v-dialog>

                
                <v-dialog v-model="dialog1" max-width="290">
                  <v-card>
                    <v-card-title class="headline error white--text">{{ $t('label.message.Do you Agree')}}?</v-card-title>

                    <v-card-text class="mt-1 pt-1">{{ $t('label.message.profileupdate')}}</v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        style="text-transform: capitalize"
                        color="green darken-1"
                        outlined
                        small
                        @click="dialog = false"
                      >{{ $t('label.button.btnDisagree')}}</v-btn>

                      <v-btn
                        color="error darken-1"
                        style="text-transform: capitalize"
                        small
                        outlined
                        @click="updateProfileWithCreadentials"
                      >{{ $t('label.button.btnAgree')}}</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 md4>
        <v-card class="v-card-profile">
          <v-row justify="space-around">
            <v-avatar slot="offset" class="mx-auto d-block" size="130">
              <img
                src="data:image/jpeg;base64,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"
              />
            </v-avatar>
          </v-row>
          <v-card-text class="text-xs-center">
            <!-- <h6 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h6> -->
            <h4 class="card-title font-weight-light">
              {{userdata.first_name}} {{userdata.last_name}}
              <strong
                style="color: blue"
              >{ @{{userdata.username}} }</strong>
            </h4>
            <p
               v-if="userdata.biography!= null"
              class="card-description font-weight-light"
            >{{userdata.biography}}</p>

            <v-btn
              color="info lighten-1"
              style="text-transform: capitalize"
              small
              depressed
              rounded
              class="font-weight-light"
            >{{ $t('label.button.btnFollow')}}</v-btn>
          </v-card-text>
          <v-divider class="ma-1 mx-4"></v-divider>
          <v-card-text>
            <v-chip
              pill
              light
              class="ma-2 font-weight-light"
              color="info lighten-1"
              text-color="white"
              v-if="userdata.is_active"
            >
              <v-avatar left>
                <v-icon>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>
              {{ $t('label.checkbox.isactive') }} ?
            </v-chip>
            <v-chip
              class="ma-2 font-weight-light"
              @click="lights"
              color="warning  lighten-1"
              text-color="white"
              v-if="userdata.is_staff"
            >
              <v-avatar left>
                <v-icon>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>Is Staff
            </v-chip>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="js" src="~/static/js/profile.js"></script>  
<style scoped>
</style>
