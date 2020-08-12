import * as mutation from './mutation-types';
const state = () => ({
  responses: [],
  response: {},
  showLoader: Boolean,

});

const mutations = {
  [mutation.SAMPLE_MUTATION_DEFINITION](state) {
    state.showLoader = false;
  },
  [mutation.SAMPLE_MUTATION_DEFINITION_SUCCESS](state, payload) {
    state.showLoader = false;
    if (payload != null) {
      state.responses = payload;
    }
  },
  [mutation.SAMPLE_MUTATION_DEFINITION_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.SAMPLE_MUTATION_DEFINITION_ERROR](state) {
    state.showLoader = false;
  },

};

const actions = {
  async getSAmpleData(){

  }

};

const getters = {

};
export default {
  state,
  getters,
  mutations,
  actions,
};
