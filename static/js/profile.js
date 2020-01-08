export default {
  data: () => ({
    company: "",
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    country: "",
    postal: "",
    about: "",
    user: {},
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
  }),
  created: function () {
    this.$store.dispatch('profile/getProfile');
  },
  computed: {
    userdata: function () {
      return this.$store.getters['profile/userInfo'];
    },
    userinfo() {
      return this.$store.getters['signin/userInfos'];
    }


  },
  methods: {}
};
