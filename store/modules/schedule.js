import * as mutation from './mutation-types';
const state = () => ({
  count: null,
  schedule: {},
  schedules: [],
  savedschedule: {},
  isLoading: Boolean,
  authToken: true

});

const mutations = {
  [mutation.REPAYMENT_SCHEDULES](state) {
    state.isLoggedIn = true;
  },
  [mutation.REPAYMENT_SCHEDULES_SUCCESS](state, payload) {
    state.isLoading = false;
    state.schedules = payload;
  },
  [mutation.REPAYMENT_SCHEDULES_FAILED](state) {
    state.isLoading = false;
  },

  [mutation.REPAYMENT_SCHEDULE](state) {
    state.isLoggedIn = true;
  },
  [mutation.REPAYMENT_SCHEDULE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.schedule = payload;
  },
  [mutation.REPAYMENT_SCHEDULE_FAILED](state) {
    state.isLoading = false;
  },

  [mutation.SAVE_REPAYMENT_SCHEDULE](state) {
    state.isLoggedIn = true;
  },
  [mutation.SAVE_REPAYMENT_SCHEDULE_SUCCESS](state, payload) {
    state.isLoading = false;
    state.saveSchedule = payload;
  },
  [mutation.SAVE_REPAYMENT_SCHEDULE_FAILED](state) {
    state.isLoading = false;
  }
};
const actions = {
  async getSchedules({
    commit
  }) {
    commit(mutation.REPAYMENT_SCHEDULES);
    await this.$api.$get(`repayment-schedules/`)
      .then(response => {
        commit(mutation.REPAYMENT_SCHEDULES_SUCCESS, response.results);


      }).catch(error => {
        commit(mutation.REPAYMENT_SCHEDULES_FAILED);
        console.log(error);

      });
  },
  async getSchedule({
    commit
  }, payload) {
    commit(mutation.REPAYMENT_SCHEDULE);
    await this.$api.$get(`repayment-schedules/` + payload)
      .then(response => {
        commit(mutation.REPAYMENT_SCHEDULE_SUCCESS, response);


      }).catch(error => {
        commit(mutation.REPAYMENT_SCHEDULE_FAILED);
        console.log(error);

      });
  },
  async saveSchedule({
    commit
  }, payload) {
    console.log(payload);
    commit(mutation.SAVE_REPAYMENT_SCHEDULE);
    await this.$api.$post(`repayment-schedules/`, payload)
      .then(response => {
        console.log(response);
        commit(mutation.SAVE_REPAYMENT_SCHEDULE_SUCCESS, response);
        this.$router.push('/schedule');


      }).catch(error => {
        commit(mutation.SAVE_REPAYMENT_SCHEDULE_FAILED);
        console.log(error);

      });
  },
};
const getters = {
  schedulesdata: function (state) {
    return state.schedules;
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
  state,
  getters,
  mutations,
  actions,
};
