<template>
  <v-container class="ma-0 pa-0" fluid>
        <v-row justify="start" align="start" class="mt-2 ma-0 pa-0">
          <v-col
            v-for="(post, index) in posts.results"
            lg="3"
            md="3"
            sm="12"
            wrap
            :key="index"
          >
            <post-card :post="post" :postimage="post.medias[0]"></post-card>
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
     
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="posts.total_pages"
        circle
        @input="getThisPage(page)"
        @next="getThisPage(page)"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import PostsComponent from "~/components/posts/index";
import postCard from "~/components/posts/p_post_card";
import { mapGetters } from "vuex";
export default {
  components: {
    "posts-component": PostsComponent,
     "post-card": postCard
  },
  data() {
    return {
      labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
      time: 0,
      forecast: [
        {
          day: "Tuesday",
          icon: "mdi-white-balance-sunny",
          temp: "24\xB0/12\xB0"
        },
        {
          day: "Wednesday",
          icon: "mdi-white-balance-sunny",
          temp: "22\xB0/14\xB0"
        },
        { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" }
      ]
    };
  },
  head() {
    return {
      title: "Home Page"
    };
  },
  created: function() {
    let vm = this;
    this.getThisPage(1)
  },
    methods: {
    getThisPage(page) {
      console.log(page);
      this.$store.dispatch("_getallblogposts", page).then(response => {
        console.log(response);
        this.$forceUpdate();
      });
    }
  },
   computed: {
     ...mapGetters({
       "posts":"posts"
   })
  }
};
</script>
