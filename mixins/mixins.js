export default {
  data() {
    return {};
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
};
