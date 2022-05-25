import Vue from 'vue';
import { mapGetters } from "vuex";


Vue.mixin({
  data() {
    return {
      placeholder: 'https://i.picsum.photos/id/131/4698/3166.jpg?hmac=DpRHYso0tlQQ8HzsmRHNTSWfbMaTdHq58UciPSggCY8'
    };
  },
  computed: {},
  methods: {
    like_this_post: async function (dipatch, payload) {
      this.$store.dispatch(dipatch, { "id": parseInt(payload)});
    },
    unlike_this_post: async function (dipatch, payload) {
      this.$store.dispatch(dipatch, { "id": parseInt(payload)});
    }
  }
});
