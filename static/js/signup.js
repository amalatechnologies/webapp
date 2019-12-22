export default {
    layout: "home",
    data: () => ({
      agreement: false,
      bio:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      dialog: false,
      email: undefined,
      form: false,
      isLoading: false,
      password: undefined,
      phone: undefined,
      rules: {
        email: v => (v || "").match(/@/) || "Please enter a valid email",
        length: len => v =>
          (v || "").length >= len || `Invalid character length, required ${len}`,
        password: v =>
          (v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          "Password must contain an upper case letter, a numeric character, and a special character",
        required: v => !!v || "This field is required"
      }
    })
  };