
const state = () => ({
  registration: {},
  isLoading: Boolean,
  userdata: {}
});

const mutations = {
  REGISTER(state) {
    state.isLoading = true;
  },
  REGISTER_SUCCESS(state, payload) {
    state.isLoading = false;
    state.userdata = payload;
  },
  REGISTER_FAILED(state) {
    state.isLoading = false;
  },
REGISTER_ERROR(state) {
    state.isLoading = false;
  }
};
const actions = {
  async register({
    commit
  }, payload) {
    commit("REGISTER");

 
    await this.$api.$post(`register/`, payload)
   
      .then(response => {
        commit("REGISTER_SUCCESS", response);


      }).catch(error => {
        commit("REGISTER_FAILED");


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
