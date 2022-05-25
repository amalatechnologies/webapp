<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-start wrap>
      <v-flex xs12 md4 sm12 class="mt-0 ml-0">
        <v-container py-0>
          <v-layout wrap>
            <v-flex xs12 md12 class="pa-0 ma-0">
              <v-card class="mx-auto" raised height="480">
                <v-img :src="placeholder" :lazy-src="placeholder" aspect-ratio="1" class="grey lighten-2" height="400"
                  max-height="400">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-card-title>
                  {{ userdata.username }}
                  <v-icon color="primary" size="20" v-show="userdata.is_active">mdi-check-decagram</v-icon>
                </v-card-title>
                <v-card-subtitle>{{ userdata.role }}</v-card-subtitle>
              </v-card>
            </v-flex>

            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-type-divider type="Info"></v-type-divider>
            </v-flex>
            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-address-card :address="address"></v-address-card>
            </v-flex>

            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-type-divider type="Work"></v-type-divider>
              <div v-if="userdata.id == this.lid">
                <v-row no-gutters>

                  <v-col sm="12" md="3" class="ma-1">

                    <v-btn v-if="userdata.username != null" color="info lighten-1" class="mx-0 font-weight-light"
                      style="text-transform: capitalize" @click.stop="dialog4 = true">{{
                          $t("label.button.btnupdateprofile")
                      }}</v-btn>


                  </v-col>

                </v-row>
              </div>
              <div v-if="userdata.id == this.lid">
                <v-row no-gutters>

                  <v-col sm="12" md="3" class="ma-1">

                    <v-btn v-if="userdata.username != null" color="info lighten-1" class="mx-0 font-weight-light"
                      style="text-transform: capitalize" @click.stop="dialog = true">Change Password</v-btn>


                  </v-col>

                </v-row>
              </div>
            </v-flex>

            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-address-card :address="address1"></v-address-card>
            </v-flex>
            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-address-card :address="address2"></v-address-card>
            </v-flex>
         
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 md8 sm12 class="mt-0 ml-0 primary lighten-2">
        <v-card flat class="pa-1" tile>
          <v-container py-0>
            <v-layout wrap>
              <v-flex xs12 md12>
                <v-list>
                  <v-list-item-group color="primary">
                    <v-list-item two-line inactive :ripple="false">
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-row>
                            <v-col>
                              <span class="font-weight-bold text-h5">
                                {{
                                    userdata.first_name
                                }}&nbsp; {{ userdata.last_name }}
                              </span>
                            </v-col>
                            <v-col>
                              <span class="font-weight-light text-caption">
                                <v-icon>mdi-map-marker</v-icon>New York, NY
                              </span>
                            </v-col>
                          </v-row>
                        </v-list-item-title>
                        <v-list-item-subtitle class="primary--text text-caption font-weight-medium">{{ userdata.role }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-if="userdata !== undefined" two-line inactive :ripple="false" class="mt-8">
                      <v-list-item-content>
                        <v-list-item-subtitle class="text-overline">{{ $t('label.text.Rankings') }}
                        </v-list-item-subtitle>
                        <v-list-item-title v-if="userdata.lender_profile">
                          <v-row align="center" justify="start">
                            <v-col cols="2" v-if="userdata.lender_profile">
                              <span class="font-weight-bold text-h5">{{ userdata.lender_profile.raters_count }}</span>
                            </v-col>
                            <v-col cols="4">
                              <v-rating half-increments :full-icon="fullIcon" :half-icon="halfIcon"
                                :empty-icon="emptyIcon" background-color="primary" v-model="rating" @input="rate = true"
                                :value="parseInt(userdata.lender_profile.rtotal_rating_score)"></v-rating>
                            </v-col>
                            <v-col sm="1" v-show="userdata.is_lender">
                              <v-btn x-small color="primary" v-show="rate" @click.stop="rateThisPersonLanderProfile()">
                                Rate</v-btn>
                            </v-col>
                          </v-row>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item inactive :ripple="false">
                      <v-container fluid>
                        <v-row no-gutters>
                          <v-col class="font-weight-bold text-overline primary--text">{{ userdata.follows_count }} {{
                              $t('label.text.Followers')
                          }}</v-col>
                          <v-col class="font-weight-bold text-overline primary--text">{{ userdata.following_count }} {{
                              $t('label.text.Follows')
                          }} </v-col>
                        </v-row>
                      </v-container>
                    </v-list-item>
                    <v-list-item inactive :ripple="false">
                      <v-list-item-content>
                        <v-container fluid>
                          <v-row no-gutters>
                            <v-col xs="12" md="3" class="ma-1">
                              <v-btn v-if="userdata.is_following_me" @click.stop="unfollowThisPerson" small rounded
                                cols="auto" color="primary" block>Following</v-btn>
                              <v-btn v-else small rounded outlined cols="auto" @click.stop="followThisPerson"
                                color="primary" block> {{ $t('label.button.btnFollow') }}</v-btn>
                            </v-col>
                            <v-col sm="12" md="3" class="ma-1">
                              <v-btn small cols="auto" block>
                                <v-icon small>mdi-check</v-icon>&nbsp; {{ $t('label.button.btncontacts') }}
                              </v-btn>
                            </v-col>
                            <v-col sm="12" md="3" class="ma-1">
                              <v-btn small text outlined color="primary" class="font-weight-normal" cols="auto" block>
                                <v-icon small>mdi-bug</v-icon>&nbsp;{{ $t('label.button.btnReportUser') }}
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item inactive class="ma-0 pa-0" :ripple="false">
                      <v-list-item-content class="ma-0 pa-0">
                        <v-tabs right grow center-active class="elevation-2">
                          <v-tab class="font-weight-light">
                            <span>
                              <v-icon small left>mdi-eye</v-icon>Documents
                            </span>
                          </v-tab>
                          <v-tab class="font-weight-light">
                            <span>
                              <v-icon small left>mdi-account</v-icon>{{ $t('label.vtab.About') }}
                            </span>
                          </v-tab>
                          <v-tab class="font-weight-light" @click.stop="getThisUserPosts()">
                            <v-icon small left>mdi-format-list-bulleted-triangle</v-icon>{{ $t('label.vtab.Posts') }}
                          </v-tab>
                          <v-tab class="font-weight-light" @click.stop="getThisUserComments()">
                            <v-icon small left>mdi-chat</v-icon>{{ $t('label.vtab.Comments') }}
                          </v-tab>
                          <v-tab class="font-weight-light" @click.stop="getThisPersonFollowers">
                            <v-icon small left>mdi-format-list-bulleted-triangle</v-icon>{{ $t('label.vtab.Followers')
                            }}
                          </v-tab>
                          <v-tab class="font-weight-light" @click.stop="getThisPersonFollowings()">
                            <v-icon small left>mdi-chat</v-icon>{{ $t('label.vtab.Followings') }}
                          </v-tab>

                          <v-tab-item>
                            <v-card flat>
                              <v-card-text>

                                <div v-if="getTinDocument.results.length != 0">


                                  <a v-bind:href="this.getTinDocument.results[0].src">Download TinDocument</a>

                                </div>
                                <div v-else>
                                  Upload TinDocuments
                                </div>
                                <div v-if="getcertificateDocument.results.length != 0">
                                  <a v-bind:href="this.getcertificateDocument.results[0].src">Download
                                    CertificateDocument</a>

                                </div>
                                <div v-else>
                                  Upload CertificatenDocuments
                                </div>


                                <v-btn fab small bottom right fixed class="primary darken-3 v-btn--example"
                                  @click.stop="dialog6 = true">
                                  <v-icon>mdi-plus</v-icon>
                                </v-btn>





                              </v-card-text>
                            </v-card>
                          </v-tab-item>
                          <v-tab-item>
                            <v-card flat>
                              <v-card-text>
                                <p>{{ userdata.biography }}</p>
                              </v-card-text>
                            </v-card>
                          </v-tab-item>
                          <v-tab-item>
                            <v-row>
                              <v-col align="center" v-if="posts === null">
                                <v-progress-circular :width="2" color="primary" size="20" indeterminate>
                                </v-progress-circular>
                              </v-col>
                              <v-col v-else-if="posts.results.length !== 0" cols="12" lg="6" md="6" sm="12" wrap
                                v-for="(post, index) in posts.results" :key="index">
                                <post-card :post="post"></post-card>
                              </v-col>
                              <p v-else></p>
                            </v-row>
                          </v-tab-item>
                          <v-tab-item>
                            <v-row>
                              <v-col align="center" v-if="comments === null">
                                <v-progress-circular :width="2" color="primary" size="20" indeterminate>
                                </v-progress-circular>
                              </v-col>
                              <v-col v-else-if="comments.results.length !== 0" cols="12" lg="6" md="6" sm="12" wrap
                                v-for="(comment, index) in comments.results" :key="index">
                                <post-card :post="comment"></post-card>
                              </v-col>
                              <p v-else></p>
                            </v-row>
                          </v-tab-item>
                          <v-tab-item>
                            <v-row>
                              <v-col align="center" v-if="followers === null">
                                <v-progress-circular :width="2" color="primary" size="20" indeterminate>
                                </v-progress-circular>
                              </v-col>
                              <v-col v-else-if="followers.results.length !== 0" cols="12" lg="6" md="6" sm="12" wrap
                                v-for="(follower, index) in followers.results" :key="index">
                                <v-follows :follow="follower"></v-follows>
                              </v-col>
                              <p v-else></p>
                            </v-row>
                          </v-tab-item>
                          <v-tab-item>
                            <v-row>
                              <v-col align="center" v-if="followings === null">
                                <v-progress-circular :width="2" color="primary" size="20" indeterminate>
                                </v-progress-circular>
                              </v-col>
                              <v-col v-else-if="followings.results.length !== 0" sm="12" wrap
                                v-for="(follow, index) in followings.results" :key="index">
                                <v-follows :follow="follow"></v-follows>
                              </v-col>
                              <p v-else></p>
                            </v-row>
                          </v-tab-item>
                        </v-tabs>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

    <template>

      <v-row>
        <v-dialog v-model="dialog4" width="800">

          <v-card>
            <v-card-title>
              <span class="text-h5">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container py-0>
                <v-layout wrap>
                  <v-flex xs12 md4>
                    <v-text-field v-model="company" :label="$t('label.heading.company')" placeholder="e.g Singo Africa"
                      disabled />
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field v-model="userdata.username" class="purple-input" :label="$t('label.heading.username')"
                      placeholder="e.g johnDoe" />
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field v-model="userdata.email" :label="$t('label.heading.emailaddress')"
                      class="purple-input" placeholder="e.g example@email.com" />
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field v-model="userdata.first_name" :label="$t('label.heading.firstname')"
                      class="purple-input" placeholder="John" />
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field v-model="userdata.middle_name" :label="$t('label.heading.middlename')"
                      class="purple-input" placeholder="Doe" />
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field v-model="userdata.last_name" :label="$t('label.heading.lastname')"
                      class="purple-input" placeholder="Doe" />
                  </v-flex>

                  <v-flex xs12 md8>
                    <v-text-field v-model="address" :label="$t('label.heading.addressline')" placeholder="Snow Rock PI"
                      class="purple-input" />
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field v-model="userdata.phone" :label="$t('label.heading.phonenumber')"
                      placeholder="e.g 0716 xxx xxx" class="purple-input" />
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field v-model="city" :label="$t('label.heading.city')" placeholder="Snow Rocky"
                      class="purple-input" />
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field v-model="country" :label="$t('label.heading.country')" placeholder="e.g Tanzania"
                      class="purple-input" />
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field v-model="postal" class="purple-input" :label="$t('label.heading.postalcode')"
                      placeholder="0610 Snow Rocky" type="number" />
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea class="purple-input" :label="$t('label.heading.biography')" v-model="userdata.biography"
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                  </v-flex>

                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click.stop="dialog5 = true">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>

    <v-dialog v-model="dialog" width="200">


      <v-card flat>
        <v-toolbar dark flat class="primary">
          <v-toolbar-title>
            <h3>Update password</h3>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pa-4">
          <v-form @submit.prevent="updatepassword" id="check-login-form" class="mt-3" ref="form" v-model="valid">
            <v-text-field v-model="form_data.old_password" prepend-inner-icon="mdi-lock"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1" error-count="8" label="Old password" placeholder="********"
              name="input-10-1" counter dense outlined required class="mt-2 ma-5">
            </v-text-field>

            <v-text-field v-model="form_data.new_password" prepend-inner-icon="mdi-lock-outline"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="show2 ? 'text' : 'password'"
              :rules="[rules.required, rules.min]" @click:append="show2 = !show2" error-count="8" label="New password"
              placeholder="********" name="input-10-1" hint="At least 8 characters" counter dense outlined required
              class="mt-2 ma-5"></v-text-field>
            <v-text-field v-model="confirmPassword" prepend-inner-icon="mdi-lock-outline"
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" :type="show3 ? 'text' : 'password'" :rules="[
                rules.required,
                rules.min,
                passwordConfirmationRule
              ]" @click:append="show3 = !show3" error-count="8" label="Confirm password" placeholder="********"
              name="input-10-1" counter dense outlined required class="mt-2 ma-5"></v-text-field>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>





          <v-spacer></v-spacer>
          <v-btn class="button cancel" small @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn class="button" small type="submit" :disabled="!valid" form="check-login-form">
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog5" width="290">
      <v-card>
        <v-card-title class="headline error white--text">{{ $t('label.message.Do you Agree') }}?</v-card-title>

        <v-card-text class="mt-1 pt-1">{{ $t('label.message.profileupdate') }}</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn style="text-transform: capitalize" color="green darken-1" outlined small @click="dialog = false">{{
              $t('label.button.btnDisagree')
          }}</v-btn>

          <v-btn color="error darken-1" style="text-transform: capitalize" small outlined
            @click="updateProfileWithCreadentials">{{ $t('label.button.btnAgree') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog6" persistent max-width="490">

          <v-card>
            <v-card-title class="text-h5">
              Upload Documents
            </v-card-title>
            <v-card-text>
              <form @submit.prevent="upload_files" id="upload_files_form" class="mt-3" ref="form" v-model="valid">
                <v-file-input v-model="src_Tinumber" label="Upload TIN document" :rules="[rules.required]" accept=".pdf"
                  outlined dense></v-file-input>
                <v-file-input v-model="src_certificate" label="Upload Certificate" :rules="[rules.required]"
                  accept=".pdf" outlined dense></v-file-input>


              </form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog6 = false">
                Cancel
              </v-btn>
              <v-btn color="green darken-1" text @click.stop="uploadDocuments()">
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </v-container>
</template>

  
<script lang="js" src="~/static/js/c_card.js"></script>  
<style>
