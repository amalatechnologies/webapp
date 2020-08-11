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
  },

  [mutation.POST_NEW_BLOG_CONTENT](state){
    state.showLoader = true;

  },
  [mutation.POST_NEW_BLOG_CONTENT_SUCCESS](state,payload){
    state.showLoader = false;
    if (payload.id != null){
      state.post = payload;
      state.posts.push(payload);
      this.$router.push('/post/'+payload.id);
    }
  },
  [mutation.POST_NEW_BLOG_CONTENT_FAILED](state){
    state.showLoader = false;
  },
  [mutation.POST_NEW_BLOG_CONTENT_ERROR](state){
    state.showLoader = false;

  }

};

const actions = {
  async getBlogPosts({commit}) {
    commit(mutation.GET_BLOG_POSTS);
    await this.$api.$get(`posts/`)
      .then(response => {
        commit(mutation.GET_BLOG_POSTS_SUCCESS, response.results);
      }).catch(error => {
        commit(mutation.GET_BLOG_POSTS_FAILED);
        console.log(error);

      });
  },
  async postNewBlogPosts({commit}, payload) {
    commit(mutation.POST_NEW_BLOG_CONTENT);
    await this.$api.$post(`posts/`,payload)
      .then(response => {
        console.log(response)
        commit(mutation.POST_NEW_BLOG_CONTENT_SUCCESS, response);
      }).catch(error => {
        commit(mutation.POST_NEW_BLOG_CONTENT_ERROR);
        console.log(error);

      });
  },


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
