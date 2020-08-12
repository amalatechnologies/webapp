import * as mutation from './mutation-types';
import Vue from "vue";
const state = () => ({
  comments: [],
  response:{},
  comment: {},
  showLoader: Boolean,

});

const mutations = {
  [mutation.GET_LIST_OF_POST_COMMENTS](state) {
    state.showLoader = false;
  },
  [mutation.GET_LIST_OF_POST_COMMENTS_SUCCESS](state, payload) {
    state.showLoader = false;
    state.comments.length=0;
    Vue.set(state.comments,0, payload.results);
  },
  [mutation.GET_LIST_OF_POST_COMMENTS_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.GET_LIST_OF_POST_COMMENTS_ERROR](state) {
    state.showLoader = false;
  },

};

const actions = {
  async getThisPostComments({commit}, payload) {
    commit(mutation.GET_LIST_OF_POST_COMMENTS);
    await this.$api.$get(`posts/${payload}/comments/`)
      .then(response => {
        commit(mutation.GET_LIST_OF_POST_COMMENTS_SUCCESS, response);
      }).catch(error => {
        commit(mutation.GET_LIST_OF_POST_COMMENTS_ERROR);
        console.log(error);

      });
  },

};

const getters = {
  comments: function (state){
    return state.comments;
  }

};
export default {
  state,
  getters,
  mutations,
  actions,
};
