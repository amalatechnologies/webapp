import ListItem from "~/components/items/ListItemContent";
export default {
  components: {
    ListItem
  },

  data() {
    return {

    };
  },
  created: function () {

  },
  methods: {

  },
  computed: {
    schedule() {
      var data = this.$store.getters.getterschedule(parseInt(this.$nuxt._route.params.sid));
      return data[0];
    }
  }
};
