import * as mutation from './mutation-types';
export const state = () => ({
  userdata: {},
  showLoader: Boolean,

});

export const mutations = {

  [mutation.PROFILE](state) {
    state.showLoader = true;
  },
  [mutation.PROFILE_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.PROFILE_SUCCESS](state, payload) {
    state.showLoader = false;
    state.userdata = payload;

  },
  [mutation.PROFILE_ERROR](state) {
    state.showLoader = false;
  }
};
export const actions = {
  async getProfile({
    commit
  }) {
    commit(mutation.PROFILE);
    await this.$api.$get(`users/`)
      .then(response => {
        commit(mutation.PROFILE_SUCCESS, response.results[0]);


      }).catch(error => {
        commit(mutation.PROFILE_ERROR);


      });
  }
};
export const getters = {
  userInfo: function (state) {
    return state.userdata;
  }
};
