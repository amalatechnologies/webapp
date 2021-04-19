
const state = () => ({
  count: null,
  schedule: {},
  schedules: [],
  savedschedule: {},
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  REPAYMENT_SCHEDULES(state) {
    state.isLoading = true;
  },
  REPAYMENT_SCHEDULES_SUCCESS(state, payload) {
    state.isLoading = false;
    state.schedules = payload;
  },
  REPAYMENT_SCHEDULES_FAILED(state) {
    state.isLoading = false;
  },

  REPAYMENT_SCHEDULE(state) {
    state.isLoading = true;
  },
  REPAYMENT_SCHEDULE_SUCCESS(state, payload) {
    state.isLoading = false;
    state.schedule = payload;
  },
  REPAYMENT_SCHEDULE_FAILED(state) {
    state.isLoading = false;
  },

  SAVE_REPAYMENT_SCHEDULE(state) {
    state.isLoading = true;
  },
  SAVE_REPAYMENT_SCHEDULE_SUCCESS(state, payload) {
    state.isLoading = false;
    state.saveSchedule = payload;
  },
  SAVE_REPAYMENT_SCHEDULE_FAILED(state) {
    state.isLoading = false;
  }
};
const actions = {
  async getSchedules({
    commit
  }) {
    commit("REPAYMENT_SCHEDULES");
    await this.$api.$get(`repayment-schedules/`)
      .then(response => {
        console.log(response);
        commit("REPAYMENT_SCHEDULES_SUCCESS", response.results);


      }).catch(error => {
        commit("REPAYMENT_SCHEDULES_FAILED");
        console.log(error);

      });
  },
  async getSchedule({
    commit
  }, payload) {
    commit("REPAYMENT_SCHEDULE");
    await this.$api.$get(`repayment-schedules/` + payload)
      .then(response => {
        commit("REPAYMENT_SCHEDULE_SUCCESS", response);


      }).catch(error => {
        commit("REPAYMENT_SCHEDULE_FAILED");
        console.log(error);

      });
  },
  async saveSchedule({
    commit
  }, payload) {
    console.log(payload);
    commit("SAVE_REPAYMENT_SCHEDULE");
    await this.$api.$post(`repayment-schedules/`, payload)
      .then(response => {
        commit("SAVE_REPAYMENT_SCHEDULE_SUCCESS", response);
        this.$router.push('/schedule');


      }).catch(error => {
        commit("SAVE_REPAYMENT_SCHEDULE_FAILED");
        console.log(error);

      });
  },
};
const getters = {
  schedulesdata: function (state) {
    return state.schedules;
  },
  getsavedschedule: function (state) {
    return state.saveSchedule;
  },
  getterschedule: (state, getters) => (id) => {
    if (getters.schedulesdata.length > 0) {
      return state.schedules.filter(schedule => schedule.id === id);
    } else {
      return state.schedule;
    }
  }

};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
