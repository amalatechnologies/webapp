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
                src="https://cdn4.vectorstock.com/i/1000x1000/50/68/avatar-icon-of-girl-in-a-baseball-cap-vector-16225068.jpg"
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
