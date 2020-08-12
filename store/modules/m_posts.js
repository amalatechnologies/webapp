import * as mutation from './mutation-types';
const state = () => ({
  posts: [],
  post: {},
  comments: [],
  comment:{},
  showLoader: Boolean,
});

const mutations = {
  [mutation.GET_BLOG_POSTS](state) {
    state.showLoader = false;
  },
  [mutation.GET_BLOG_POSTS_SUCCESS](state, payload) {
    state.showLoader = false;
    if (payload != null){
      state.posts.length = 0;
      state.posts = payload;
    }

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
  },

  [mutation.COMMENT_BLOG_POST](state){
    state.showLoader = true;
  },
  [mutation.COMMENT_BLOG_POST_SUCCESS](state, payload){
    state.showLoader = false;
    state.comment = payload;
  },
  [mutation.COMMENT_BLOG_POST_FAILED](state){
    state.showLoader = false;
  },
  [mutation.COMMENT_BLOG_POST_ERROR](state){
    state.showLoader = false;
  },


  [mutation.LIKE_POST_OR_COMMENT](state){
    state.showLoader = true;
  },
  [mutation.LIKE_POST_OR_COMMENT_SUCCESS](state, payload){
    state.showLoader = false;
    state.comment = payload;
  },
  [mutation.LIKE_POST_OR_COMMENT_FAILED](state){
    state.showLoader = false;
  },
  [mutation.LIKE_POST_OR_COMMENT_ERROR](state){
    state.showLoader = false;
  },

  [mutation.DISLIKE_POST_OR_COMMENT](state){
    state.showLoader = true;
  },
  [mutation.DISLIKE_POST_OR_COMMENT_SUCCESS](state, payload){
    state.showLoader = false;
    state.comment = payload;
  },
  [mutation.DISLIKE_POST_OR_COMMENT_FAILED](state){
    state.showLoader = false;
  },
  [mutation.DISLIKE_POST_OR_COMMENT_ERROR](state){
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
        commit(mutation.POST_NEW_BLOG_CONTENT_SUCCESS, response);
      }).catch(error => {
        commit(mutation.POST_NEW_BLOG_CONTENT_ERROR);
        console.log(error);

      });
  },
  async commentOnBlogPosts({commit}, payload) {
    commit(mutation.COMMENT_BLOG_POST);
    await this.$api.$post(`comments/`, payload)
      .then(response => {
        commit(mutation.COMMENT_BLOG_POST_SUCCESS, response);
      }).catch(error => {
        commit(mutation.COMMENT_BLOG_POST_ERROR);
        console.log(error);

      });
  },
  async likeBlogPosts({commit}, payload) {
    commit(mutation.LIKE_POST_OR_COMMENT);
    await this.$api.$patch(`posts/${payload.pid}/`, {"likes":{"add": [parseInt(payload.my_user_id)]}})
      .then(response => {
        console.log(response)
        commit(mutation.LIKE_POST_OR_COMMENT_SUCCESS, response);
      }).catch(error => {
        commit(mutation.LIKE_POST_OR_COMMENT_ERROR);
        console.log(error);

      });
  },

  async unlikeBlogPosts({commit}, payload) {
    commit(mutation.DISLIKE_POST_OR_COMMENT);
    await this.$api.$patch(`posts/${payload.pid}/`, {"likes": {"remove": [payload.my_user_id]}})
      .then(response => {
        console.log(response)
        commit(mutation.DISLIKE_POST_OR_COMMENT_SUCCESS, response);
      }).catch(error => {
        commit(mutation.DISLIKE_POST_OR_COMMENT_ERROR);
        console.log(error);

      });
  },



};

const getters = {
  posts: function (state) {
    return state.posts;
  },
  post: (state) => (id) =>{
    return state.posts.find(post => post.id === parseInt(id));
  }

};
export default {
  state,
  getters,
  mutations,
  actions,
};
