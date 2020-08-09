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
    dialog: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
  }),
  created: function () {
    let vm = this;
    //vm.$store.dispatch("getProfile");
  },
  computed: {
    userdata() {
      return this.$store.getters.userInfo;
    }

  },
  methods: {
    updateProfileWithCreadentials() {
      if (this.userdata.picture == null) {
        delete this.userdata.picture;
        this.dialog = false;
        this.$store.dispatch('updateProfile', this.userdata);
      }


    }
  },
  beforeMount() {

  }
};
