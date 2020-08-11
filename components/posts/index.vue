<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap align-center>
      <v-flex xs12 sm12 md12 order-md2 order-sm2>
        <v-row>
          <v-col cols="12" md="3" sm="12" wrap v-for="(post, index) in posts" :key="index">
            <post-card :post="post"></post-card>
          </v-col>
          <v-fab-transition>
            <v-btn
              fab
              small
              bottom
              right
              fixed
              class="primary darken-3 v-btn--example"
              to="/post"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-row>
      </v-flex>
    </v-layout>

  </v-container>


</template>

<script>
import postCard from "./p_post_card"

export default {
  components: {
    'post-card': postCard
  },
  data: () => ({
    view: false,
    p: [{}, {}, {}, {}]

  }),
  methods: {},
  beforeMount() {
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  }
}
</script>
