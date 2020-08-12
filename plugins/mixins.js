export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    like_this_post: async function (dipatch, payload) {
      this.$store.dispatch(dipatch, {"my_user_id": this.$store.getters.userId ? this.$store.getters.userId:localStorage.getItem("uuId"), "pid": parseInt(payload)});
    },
    unlike_this_post: async function (dipatch, payload) {
      this.$store.dispatch(dipatch, {"my_user_id": this.$store.getters.userId ? this.$store.getters.userId:localStorage.getItem("uuId"), "pid": parseInt(payload)});
    }
  }
};
