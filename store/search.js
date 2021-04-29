
import Vue from "vue";
const state = () => ({
  error: '',
  search: '',
  notfound: '',
  searcheditems: ""
});

const mutations = {
  error(state, data) {
    state.error = data;
  },
  done(state, response) {
    response == "" ? state.searcheditems = [] : state.searcheditems = response.data.results;
  },

};

const actions = {

  async search({ commit }, payload) {

    commit('done', "");
    if (payload == "") {

    }
    else {
      await this.$api.get(`/users/?search=${payload}`)
        .then(response => {
          if (response.data.results == "") {
            commit("error", "Data not found.");
            // commit('done', response);
          } else {
            commit("error", "");
            commit('done', response);
          }
        }).catch(error => {
          console.log(error);
        });
    }
  }
};

const getters = {
  getitems: function (state) {
    return state.searcheditems;
  },
  error: function (state) {
    return state.error;
  },
};


export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};