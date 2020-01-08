export default {
  data: () => ({
    company: "",
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    middlename: "",
    phonenumber: "",
    address: "",
    city: "",
    country: "",
    postal: "",
    about: "",
    userdata: {},
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
  }),
  created: function () {
    let vm = this;
    vm.$store.dispatch('profile/getProfile');
    vm.userdata = vm.$store.getters['profile/userInfo'];
  },
  computed: {

  },
  methods: {
    updateProfileWithCreadentials() {
      this.$store.dispatch('profile/updateProfile', this.userdata);
    }
  },
  beforeMount() {

  }
};
