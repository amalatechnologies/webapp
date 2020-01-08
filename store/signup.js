import * as mutation from './mutation-types';
export const registration = () => ({
  registration: {},
  isLoading: Boolean,
  userdata: {}
});

export const mutations = {
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
export const actions = {
  async register({
    commit
  }, payload) {
    commit(mutation.REGISTER);
    await this.$api.$post(`register/`, payload)
      .then(response => {
        console.log(response);
        commit(mutation.REGISTER_SUCCESS, response);


      }).catch(error => {
        commit(mutation.REGISTER_FAILED);


      });
  }

};
export const getters = {};
