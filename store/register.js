import * as mutations from './mutation-types';
const auth = {
  state() {
    return {
      registration: {}
    };
  },
  mutations: {
    register(state, payload) {
      state.userdata = payload;
    },
    logout(state) {
      state.userdata = null;
    }
  },
  actions: {},
  getters: {}

};
export default auth;
