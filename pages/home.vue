<template>
  <v-app class="app">
    <v-container fluid color="primary">
      <posts-component></posts-component>
    </v-container>
  </v-app>
</template>

<script>
import PostsComponent from "~/components/posts/index"
export default {
  components:{
    'posts-component':PostsComponent
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

  },

};
</script>
