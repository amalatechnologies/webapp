
export default {
  components: {
    'searchs': searchs
  },


  data: () => ({
    search: "",
    searcheditems: []
  }),

  methods: {
    searches() {
      let search = "";
      search = this.search;

      this.$store.dispatch("searching", search);
    },
  },

  computed: {
    searcheditem() {

      //  console.log(this.$store.getters.searcheditems);
      return this.$store.getters.getitems;


    }
  },
};