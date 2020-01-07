import * as mutation from './mutation-types';
import * as base from '../static/config/http-config';
export const state = () => ({
  userdata: null,
  isLoggedIn: null,
  showLoader: Boolean,

});

export const mutations = {

  [mutation.LOGIN](state) {
    state.showLoader = true;
  },
  [mutation.LOGIN_FAILED](state) {
    state.showLoader = false;
    state.isLoggedIn = false;
  },
  [mutation.LOGIN_SUCCESS](state, payload) {
    state.showLoader = false;
    state.userdata = payload;

  },
  [mutation.LOGOUT](state) {
    state.showLoader = true;
  },
  [mutation.LOGOUT_SUCCESS](state) {
    state.showLoader = false;
    state.userdata = null;
  },
  [mutation.LOGOUT_FAILED](state) {
    state.showLoader = false;
  },
};
export const actions = {
  async login({
    commit
  }, payload) {
    commit(mutation.LOGIN);
    await this.$axios.$post(`/auth/`, payload)
      .then(response => {
        console.log(response);
        commit(mutation.LOGIN_SUCCESS, response);
        const token = response.token;
        localStorage.setItem('qAccessToken', token);

      }).catch(error => {
        commit(mutation.LOGIN_ERROR);
        localStorage.removeItem('qAccessToken');
        PromiseRejectionEvent(error);

      });
  }
};
export const getters = {};
