import searchs from "@/components/searchs/index"
export default {
  components: {
    'searchs': searchs
  },


  data: () => ({
    search: "",
    show: false,
    searcheditems: [],
    nameRules: {
      name: v => !!v || 'Name is required',
      length: (len) => (v) =>
        (v || "").length >= len ||
        `Invalid character length, required ${len}`,

    },
  }),

  methods: {
    searches() {
      let search = "";
      search = this.search;

      this.$store.dispatch("search", search);
    },
  },

  computed: {

    error() {
      //  console.log(this.$store.getters.searcheditems);
      return this.$store.getters.error;
    },
    searcheditem() {
      //  console.log(this.$store.getters.searcheditems);
      return this.$store.getters.getitems;
    }
  },
};