
const state = () => ({
  responses: [],
  response: {},
  showLoader: Boolean,

});

const mutations = {
  SAMPLE_MUTATION_DEFINITION(state) {
    state.showLoader = false;
  },
  SAMPLE_MUTATION_DEFINITION_SUCCESS(state, payload) {
    state.showLoader = false;
    if (payload != null) {
      state.responses = payload;
    }
  },
  SAMPLE_MUTATION_DEFINITION_FAILED(state) {
    state.showLoader = false;
  },
  SAMPLE_MUTATION_DEFINITION_ERROR(state) {
    state.showLoader = false;
  },

};

const actions = {
  async getSAmpleData() {

  }

};

const getters = {

};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
