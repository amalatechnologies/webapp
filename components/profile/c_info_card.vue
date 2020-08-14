<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-start wrap>
      <v-flex xs12 md3 sm12 class="mt-0 ml-0">
        <v-container py-0>
          <v-layout wrap>
            <v-flex xs12 md12 class="pa-0 ma-0">
          <v-card class="mx-auto" raised   height="480">
            <v-img
              src="https://pbs.twimg.com/media/EDOqI6NXYAAgJej.jpg"
              lazy-src="https://pbs.twimg.com/media/EDOqI6NXYAAgJej.jpg"
              aspect-ratio="1"
              class="grey lighten-2"
              height="400"
              max-height="400"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-title>
              Mónica Gaztambide
            </v-card-title>
            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>
          </v-card>
            </v-flex>

            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-type-divider type="Work"></v-type-divider>
            </v-flex>

            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-address-card :address="address1"></v-address-card>
            </v-flex>
            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-address-card :address="address2"></v-address-card>
            </v-flex>
            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-type-divider type="Skills"></v-type-divider>
            </v-flex>
            <v-flex xs12 md12>
              <span class="text-caption font-weight-medium ">UI/UX</span>
            </v-flex>
            <v-flex xs12 md12>
              <span class="text-caption font-weight-medium ">Branding</span>
            </v-flex>
            <v-flex xs12 md12>
              <h6 class="text-caption font-weight-medium ">Web - Design</h6>
            </v-flex>
            <v-flex xs12 md12>
              <span class="text-caption font-weight-medium ">Packaging</span>
            </v-flex>
            <v-flex xs12 md12>
              <span class="text-caption font-weight-medium ">Print & Editorial</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 md5 sm12 class="mt-0 ml-0 primary lighten-2">
        <v-card flat class="pa-1">
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12>
                  <v-img
                    src="https://www.coffeenideas.com/wp-content/uploads/2019/11/3-9.png"
                    lazy-src="https://picsum.photos/id/11/100/60"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-width="500"
                    max-height="300"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-flex>

                <v-flex xs12 md12>
                  <v-type-divider type="Work"></v-type-divider>
                </v-flex>

                <v-flex xs12 md12>
                  <v-address-card :address="address1"></v-address-card>
                </v-flex>
                <v-flex xs12 md12>
                  <v-address-card :address="address2"></v-address-card>
                </v-flex>
                <v-flex xs12 md12>
                  <v-type-divider type="Skills"></v-type-divider>
                </v-flex>
                <v-flex xs12 md12>
                  <span class="text-caption font-weight-medium ">UI/UX</span>
                </v-flex>
                <v-flex xs12 md12>
                  <span class="text-caption font-weight-medium ">Branding</span>
                </v-flex>
                <v-flex xs12 md12>
                  <h6 class="text-caption font-weight-medium ">Web - Design</h6>
                </v-flex>
                <v-flex xs12 md12>
                  <span class="text-caption font-weight-medium ">Packaging</span>
                </v-flex>
                <v-flex xs12 md12>
                  <span class="text-caption font-weight-medium ">Print & Editorial</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>
<script lang="js">
import c_type_divider from "@/components/profile/c_type_divider";
import c_address_card from "@/components/profile/c_address_card";

export default {
  components: {
    'v-type-divider': c_type_divider,
    'v-address-card': c_address_card
  },
  data() {
    return {
      userdata: {},
      dialog: false,
      address1: {
        location: "Spotify New York",
        class: "Primary",
        street_name: "170 William Street",
        street_address: "New York, NY 10038-78 212-312-51\n"
      },
      address2: {
        location: "Metropolitan Museum",
        class: "Secondary",
        street_name: "S45 E 68th Street",
        street_address: "New York, NY 10038-78 212-312-51\n"
      }

    }
  }
}
</script>
