import * as mutation from './mutation-types';
const state = () => ({
  userdata: {},
  showLoader: Boolean,

});

const mutations = {

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
  },
  [mutation.PROFILE_UPDATE](state) {
    state.showLoader = true;
  },
  [mutation.PROFILE_UPDATE_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.PROFILE_UPDATE_SUCCESS](state, payload) {
    state.showLoader = false;
    state.userdata = payload;

  },
  [mutation.PROFILE_UPDATE_ERROR](state) {
    state.showLoader = false;
  }
};
const actions = {
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
  },
  async updateProfile({
    commit
  }, payload) {
    commit(mutation.PROFILE_UPDATE);
    await this.$api.$patch(`users/` + localStorage.getItem('uuId') + `/`, payload)
      .then(response => {
        commit(mutation.PROFILE_UPDATE_SUCCESS, response);

      }).catch(error => {
        commit(mutation.PROFILE_UPDATE_FAILED);
        console.log(error);

      });
  }
};
const getters = {
  userInfo: function (state) {
    return state.userdata;
  }
};
export default {
  state,
  getters,
  mutations,
  actions,
};
