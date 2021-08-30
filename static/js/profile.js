export default {
  data: () => ({
    valid: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    progress: false,
    confirmPassword: "",
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
    dialog1: false,
    dialog:false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    form_data: {
      old_password: "",
      new_password: ""
    }
  }),
  created: function () {
    let vm = this;
    vm.$store.dispatch("getProfile");
  },
  computed: {
    userdata() {
      return this.$store.getters.userInfo;

    },
    passwordConfirmationRule() {
      return () =>
        this.form_data.new_password === this.confirmPassword ||
        "Password must match";
    }

  },
  methods: {
    updateProfileWithCreadentials() {
      if (this.userdata.picture == null) {
        delete this.userdata.picture;
        this.dialog = false;
        this.$store.dispatch('updateProfile', this.userdata);
      }
     

    },
    updatepassword() {
      this.$store.dispatch("_update_user_password", this.form_data);
    }
  },
  beforeMount() {

  }
};
