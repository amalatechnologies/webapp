import * as mutation from './mutation-types';
export const state = () => ({
  count: null,
  schedule: {},
  schedules: [],
  isLoading: Boolean

});

export const mutations = {
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
  }
};
export const actions = {
  async getSchedules({
    commit
  }) {
    commit(mutation.REPAYMENT_SCHEDULES);
    await this.$api.$get(`repayment-schedules/`)
      .then(response => {
        console.log(response.results);
        commit(mutation.REPAYMENT_SCHEDULES_SUCCESS, response.results);


      }).catch(error => {
        commit(mutation.REPAYMENT_SCHEDULES_FAILED);
        PromiseRejectionEvent(error);

      });
  },
  async getSchedule({
    commit
  }, payload) {
    commit(mutation.REPAYMENT_SCHEDULE);
    await this.$api.$get(`repayment-schedules/` + payload)
      .then(response => {
        console.log(response);
        commit(mutation.REPAYMENT_SCHEDULE_SUCCESS, response);


      }).catch(error => {
        commit(mutation.REPAYMENT_SCHEDULE_FAILED);
        PromiseRejectionEvent(error);

      });
  }
};
export const getters = {
  scheduledata: function (state) {
    return state.schedules;
  }

};
