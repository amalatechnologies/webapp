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

  },
  beforeMount: function () {

  },
  computed: {
    schedules() {
      return this.$store.getters['schedule/scheduledata'];
    }

  }

};
