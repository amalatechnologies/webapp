import Vue from "vue";
import Vuex from "vuex";
import SignIn from "./modules/signin";
import SignUp from "./modules/signup";
import Schedules from "./modules/schedule";
import Repayments from "./modules/repayments";
import BlogPosts from "./modules/m_posts";
import Profile from "./modules/profile";
import Comments from "./modules/m_comments";
import search from "./modules/search";
Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state: {

    },
    modules: {
      SignIn,
      SignUp,
      Schedules,
      Repayments,
      Profile,
      BlogPosts,
      Comments,
      search

    }
  });
};

export default store;
