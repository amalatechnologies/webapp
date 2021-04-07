
import Vue from "vue";
const state = () => ({
  comments: [],
  response: {},
  comment: {},
  showLoader: Boolean,

});

const mutations = {
  GET_LIST_OF_POST_COMMENTS(state) {
    state.showLoader = false;
  },
 GET_LIST_OF_POST_COMMENTS_SUCCESS(state, payload) {
    state.showLoader = false;
    state.comments.length = 0;
    Vue.set(state.comments, 0, payload.results);
  },
  GET_LIST_OF_POST_COMMENTS_FAILED(state) {
    state.showLoader = false;
  },
GET_LIST_OF_POST_COMMENTS_ERROR(state) {
    state.showLoader = false;
  },

};

const actions = {
  async getThisPostComments({ commit }, payload) {
    commit("GET_LIST_OF_POST_COMMENTS");
    await this.$api.$get(`posts/${payload}/comments/`)
      .then(response => {
        commit("GET_LIST_OF_POST_COMMENTS_SUCCESS", response);
      }).catch(error => {
        commit("GET_LIST_OF_POST_COMMENTS_ERROR");
        console.log(error);

      });
  },

};

const getters = {
  comments: function (state) {
    return state.comments;
  }

};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
