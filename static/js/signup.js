export default {
  meta: {
    auth: {
      requiresAuth: false
    }
  },
  layout: "home",
  data: () => ({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    agreement: false,
    dialog: false,
    email: undefined,
    form: false,
    items: [
      {
        name: "Lender",
        value: "lender"
      },
      {
        name: "Borrower",
        value: "borrower"
      }
    ],
    role:null,
    isLoading: false,
    password: undefined,
    username: undefined,
    rePassword: undefined,
    rules: {
      email: v => (v || "").match(/@/) || "Please enter a valid email",
      length: len => v => (v || "").length >= len || `Invalid character length, required ${len}`,
      password: v =>
        (v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: v => !!v || "This field is required"
    }
  }),
  computed: {

  },
  methods: {
    signUpWithCredentials() {
      let data = {
        username: this.username,
        password: this.password,
        email: this.email,
        role:this.role

      };
      console.log(data.role);
      if (this.password === this.rePassword) {
        this.$store.dispatch('register', data);
      }
    }

  }
};
