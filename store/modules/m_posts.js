import * as mutation from './mutation-types';
const state = () => ({
  posts: [],
  post: {},
  showLoader: Boolean,
});

const mutations = {
  [mutation.GET_BLOG_POSTS](state) {
    state.showLoader = false;
  },
  [mutation.GET_BLOG_POSTS_SUCCESS](state, payload) {
    state.showLoader = false;
    state.posts = payload;
  },
  [mutation.GET_BLOG_POSTS_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.GET_BLOG_POSTS_ERROR](state) {
    state.showLoader = false;
  }

};

const actions = {
  async getBlogPosts({commit}) {
    commit(mutation.GET_BLOG_POSTS);
    await this.$api.$get(`posts/`)
      .then(response => {
        console.log(response.results)
        commit(mutation.GET_BLOG_POSTS_SUCCESS, response.results);
      }).catch(error => {
        commit(mutation.GET_BLOG_POSTS_FAILED);
        console.log(error);

      });
  }

};

const getters = {
  posts: function (state) {
    return state.posts;
  }

};
export default {
  state,
  getters,
  mutations,
  actions,
};
