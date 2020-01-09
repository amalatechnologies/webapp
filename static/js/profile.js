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
    dialog: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
  }),
  created: function () {
    let vm = this;
    vm.$store.dispatch('getProfile');
    vm.userdata = vm.$store.getters.userInfo;
  },
  computed: {

  },
  methods: {
    updateProfileWithCreadentials() {
      if (this.userdata.picture == null) {
        delete this.userdata.picture;
        console.log(this.userdata);
        this.dialog = false;
        this.$store.dispatch('updateProfile', this.userdata);
      }


    }
  },
  beforeMount() {

  }
};
