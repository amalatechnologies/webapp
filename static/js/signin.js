export default {
  layout: "home",
  data: () => ({
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: "",
    username: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
  }),
  computed: {

  },
  methods: {

    signInWithCredential() {
      let data = {
        username: this.username,
        password: this.password
      };
      console.log("Data");
      this.$store.dispatch('auth/login', data);

    }
  }
};
