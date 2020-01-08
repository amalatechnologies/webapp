<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card color="green" title="Edit Profile" text="Complete your profile">
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field v-model="company" label="Company (disabled)" disabled />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    :value="userdata.username"
                    class="purple-input"
                    label="User Name"
                    disabled
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field :value="userdata.email" label="Email Address" class="purple-input" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    :value="userdata.first_name"
                    label="First Name"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="userdata.last_name"
                    label="Last Name"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field v-model="address" label="Adress" class="purple-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field v-model="city" label="City" class="purple-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field v-model="country" label="Country" class="purple-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="postal"
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    v-model="about"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn
                    class="mx-0 font-weight-light"
                    @click="updateProfileWithCreadentials"
                    color="success"
                  >Update Profile</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex xs12 md4>
        <material-card class="v-card-profile">
          <v-avatar slot="offset" class="mx-auto d-block" size="130">
            <img src="https://answersafrica.com/wp-content/uploads/2015/01/somalia.jpg" />
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h6>
            <h4 class="card-title font-weight-light">Alec Thompson</h4>
            <p
              class="card-description font-weight-light"
            >Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
            <v-btn color="success" round class="font-weight-light">Follow</v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="js" src="~/static/js/profile.js"></script>