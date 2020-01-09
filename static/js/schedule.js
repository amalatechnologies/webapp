export default {
  data() {
    return {
      item: 1,
    };
  },
  created: function () {
    let vm = this;
    vm.$store.dispatch('getSchedules');

  },
  methods: {
    getSchedule: function (id) {
      var data = this.$store.getters.getterschedule(id);
      console.log(data);
      return data;
    }

  },
  beforeMount: function () {

  },
  computed: {
    schedules() {
      return this.$store.getters.schedulesdata;
    }

  }

};
