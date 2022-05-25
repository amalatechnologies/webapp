
import Vue from "vue";
const state = () => ({
  posts: [],
  post: {},
  id:"",
  comments: [],
  comment: {},
  showLoader: Boolean,
});



const mutations = {
  GET_BLOG_POSTS(state) {
    state.showLoader = false;
  },
  GET_BLOG_POSTS_SUCCESS(state, payload) {
    state.showLoader = false;
    state.posts = payload;
  },
  GET_BLOG_POSTS_FAILED(state) {
    state.showLoader = false;
  },
GET_BLOG_POSTS_ERROR(state) {
    state.showLoader = false;
  },

  POST_NEW_BLOG_CONTENT(state) {
    state.showLoader = true;

  },
 POST_NEW_BLOG_CONTENT_SUCCESS(state, payload) {
    state.showLoader = false;
    if (payload.id != null) {
      state.post = payload;
      this.$router.push('/post/' + payload.id);
    }
  },
 POST_NEW_BLOG_CONTENT_FAILED(state) {
    state.showLoader = false;
  },
  POST_NEW_BLOG_CONTENT_ERROR(state) {
    state.showLoader = false;
  },

COMMENT_BLOG_POST(state) {
    state.showLoader = true;
  },
  COMMENT_BLOG_POST_SUCCESS(state, payload) {
    state.showLoader = false;
    var index = state.posts.results.findIndex(post => post.id === payload.id)
    if (index === -1) {
      state.posts.results.push(payload)
    } else {
      Vue.set(state.posts.results, index, payload);
    }
  },
 COMMENT_BLOG_POST_FAILED(state) {
    state.showLoader = false;
  },
 COMMENT_BLOG_POST_ERROR(state) {
    state.showLoader = false;
  },


 LIKE_POST_OR_COMMENT(state) {
    state.showLoader = true;
  },
  LIKE_POST_OR_COMMENT_SUCCESS(state, payload) {
    state.showLoader = false;
    var index = state.posts.results.findIndex(post => post.id === payload.id)
    if (index === -1) {
      state.posts.results.push(payload)
    } else {
      Vue.set(state.posts.results, index, payload);
      //state.posts.resultsindex] = payload;
    }
  },
 LIKE_POST_OR_COMMENT_FAILED(state) {
    state.showLoader = false;
  },
  LIKE_POST_OR_COMMENT_ERROR(state) {
    state.showLoader = false;
  },

 DISLIKE_POST_OR_COMMENT(state) {
    state.showLoader = true;
  },
  DISLIKE_POST_OR_COMMENT_SUCCESS(state, payload) {
    state.showLoader = false;
    var index = state.posts.results.findIndex(post => post.id === payload.id)
    if (index === -1) {
      state.posts.results.push(payload)
    } else {

      Vue.set(state.posts.results, index, payload);
    }
  },
 DISLIKE_POST_OR_COMMENT_FAILED(state) {
    state.showLoader = false;
  },
DISLIKE_POST_OR_COMMENT_ERROR(state) {
    state.showLoader = false;
  },
  GET_IMAGES(state,payload){
    state.postsimages=payload.results;
  }

};

const actions = {
  async _getallblogposts({commit}, page) {
    commit("GET_BLOG_POSTS");
    await this.$api.$get(`posts/`,{params:{page: page, type: 'post'}} )
      .then(response => {
        commit("GET_BLOG_POSTS_SUCCESS", response);
        return 1;
      }).catch(error => {
        commit("GET_BLOG_POSTS_FAILED");
        console.log(error);

      });
  },

  
  async new_post({commit}, payload) {

    commit("POST_NEW_BLOG_CONTENT");

    let src= payload.src;
  let id;
  

    await this.$api.$post(`posts/`, payload)
 
      .then(response => {

       

         id =response.id;       
    
     commit("POST_NEW_BLOG_CONTENT_SUCCESS", response);

      }).catch(error => {
        commit("POST_NEW_BLOG_CONTENT_ERROR");
        console.log(error);

      });
     
      let form =new FormData( );
      form.append('post',id);
      form.append('src',src);

      await this.$api.$post(`post-medias/`,form)
      .then(response => {
    }).catch(error => {
    });
  },
    




  async commentOnBlogPosts({commit}, payload) {
    commit("COMMENT_BLOG_POST");
    await this.$api.$post(`comments/`, payload)
      .then(response => {
        commit("COMMENT_BLOG_POST_SUCCESS", response);
      }).catch(error => {
        commit("COMMENT_BLOG_POST_ERROR");
        console.log(error);

      });
  },
  async likeBlogPosts({commit}, payload) {
    commit("LIKE_POST_OR_COMMENT");
    await this.$api.$post(`like-post/`, payload)
      .then(response => {
        commit("LIKE_POST_OR_COMMENT_SUCCESS", response);
      }).catch(error => {
        commit("LIKE_POST_OR_COMMENT_ERROR");
        console.log(error);

      });
  },

  async unlikeBlogPosts({commit}, payload) {
    commit("DISLIKE_POST_OR_COMMENT");
    await this.$api.$post(`unlike-post/`, payload)
      .then(response => {
        commit("DISLIKE_POST_OR_COMMENT_SUCCESS", response);
      }).catch(error => {
        commit("DISLIKE_POST_OR_COMMENT_ERROR");
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
