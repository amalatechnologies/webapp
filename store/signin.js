import * as mutation from './mutation-types';
export const state = () => ({
  userdata: {},

});

export const mutations = {

  [mutation.LOGIN](state) {
    state.showLoader = true;
  },
  [mutation.LOGIN_FAILED](state) {
    state.showLoader = false;
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
    await this.$api.$post(`auth/`, payload)
      .then(response => {
        console.log(response);
        commit(mutation.LOGIN_SUCCESS, response);
        const token = response.token;
        const uuId = response.id;
        localStorage.setItem('qAccessToken', token);
        localStorage.setItem('uuId', uuId);


      }).catch(error => {
        commit(mutation.LOGIN_ERROR);
        localStorage.removeItem('qAccessToken');
        console.log(error);

      });
  }
};
export const getters = {
  isLoggedIn: function (state) {
    return state.userdata != null;
  },
  userInfos: function (state) {
    return state.userdata;
  }
};
