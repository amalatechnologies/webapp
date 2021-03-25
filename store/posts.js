import * as mutation from './mutation-types';
import Vue from "vue";
const state = () => ({
  posts: [],
  post: {},
  comments: [],
  comment: {},
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

  [mutation.POST_NEW_BLOG_CONTENT](state) {
    state.showLoader = true;

  },
  [mutation.POST_NEW_BLOG_CONTENT_SUCCESS](state, payload) {
    state.showLoader = false;
    if (payload.id != null) {
      state.post = payload;
      this.$router.push('/post/' + payload.id);
    }
  },
  [mutation.POST_NEW_BLOG_CONTENT_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.POST_NEW_BLOG_CONTENT_ERROR](state) {
    state.showLoader = false;
  },

  [mutation.COMMENT_BLOG_POST](state) {
    state.showLoader = true;
  },
  [mutation.COMMENT_BLOG_POST_SUCCESS](state, payload) {
    state.showLoader = false;
    var index = state.posts.results.findIndex(post => post.id === payload.id)
    if (index === -1) {
      state.posts.results.push(payload)
    } else {
      Vue.set(state.posts.results, index, payload);
    }
  },
  [mutation.COMMENT_BLOG_POST_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.COMMENT_BLOG_POST_ERROR](state) {
    state.showLoader = false;
  },


  [mutation.LIKE_POST_OR_COMMENT](state) {
    state.showLoader = true;
  },
  [mutation.LIKE_POST_OR_COMMENT_SUCCESS](state, payload) {
    state.showLoader = false;
    var index = state.posts.results.findIndex(post => post.id === payload.id)
    if (index === -1) {
      state.posts.results.push(payload)
    } else {
      Vue.set(state.posts.results, index, payload);
      //state.posts.resultsindex] = payload;
    }
  },
  [mutation.LIKE_POST_OR_COMMENT_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.LIKE_POST_OR_COMMENT_ERROR](state) {
    state.showLoader = false;
  },

  [mutation.DISLIKE_POST_OR_COMMENT](state) {
    state.showLoader = true;
  },
  [mutation.DISLIKE_POST_OR_COMMENT_SUCCESS](state, payload) {
    state.showLoader = false;
    var index = state.posts.results.findIndex(post => post.id === payload.id)
    if (index === -1) {
      state.posts.results.push(payload)
    } else {

      Vue.set(state.posts.results, index, payload);
    }
  },
  [mutation.DISLIKE_POST_OR_COMMENT_FAILED](state) {
    state.showLoader = false;
  },
  [mutation.DISLIKE_POST_OR_COMMENT_ERROR](state) {
    state.showLoader = false;
  }


};

const actions = {
  async getBlogPosts({commit}, payload) {
    commit(mutation.GET_BLOG_POSTS);
    await this.$api.$get(`posts/?${payload}&type=post`)
      .then(response => {
        commit(mutation.GET_BLOG_POSTS_SUCCESS, response);
        return 1;
      }).catch(error => {
        commit(mutation.GET_BLOG_POSTS_FAILED);
        console.log(error);

      });
  },
  async new_post({commit}, payload) {
    commit(mutation.POST_NEW_BLOG_CONTENT);
    await this.$api.$post(`posts/`, payload)
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
    await this.$api.$post(`like-post/`, payload)
      .then(response => {
        commit(mutation.LIKE_POST_OR_COMMENT_SUCCESS, response);
      }).catch(error => {
        commit(mutation.LIKE_POST_OR_COMMENT_ERROR);
        console.log(error);

      });
  },

  async unlikeBlogPosts({commit}, payload) {
    commit(mutation.DISLIKE_POST_OR_COMMENT);
    await this.$api.$post(`unlike-post/`, payload)
      .then(response => {
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
  post: (state) => (id) => {
    return state.posts.length !== null ? state.posts.results.find(post => post.id === parseInt(id)) : null;
  }

};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
