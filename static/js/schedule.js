export default {
  data() {
    return {
      item: 1,
    };
  },
  created: function () {
    let vm = this;
    vm.$store.dispatch('schedule/getSchedules');

  },
  methods: {
    getSchedule: function (id) {
      var data = this.$store.getters['schedule/getterschedule'];
      console.log(data);
      return data;
    }

  },
  beforeMount: function () {

  },
  computed: {
    schedules() {
      return this.$store.getters['schedule/schedulesdata'];
    }

  }

};
