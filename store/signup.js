import * as mutation from './mutation-types';
const state = () => ({
  registration: {},
  isLoading: Boolean,
  userdata: {}
});

const mutations = {
  [mutation.REGISTER](state) {
    state.isLoading = true;
  },
  [mutation.REGISTER_SUCCESS](state, payload) {
    state.isLoading = false;
    state.userdata = payload;
  },
  [mutation.REGISTER_FAILED](state) {
    state.isLoading = false;
  },
  [mutation.REGISTER_ERROR](state) {
    state.isLoading = false;
  }
};
const actions = {
  async register({
    commit
  }, payload) {
    commit(mutation.REGISTER);
    await this.$api.$post(`register/`, payload)
      .then(response => {
        commit(mutation.REGISTER_SUCCESS, response);


      }).catch(error => {
        commit(mutation.REGISTER_FAILED);


      });
  }

};
const getters = {};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
