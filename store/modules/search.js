import * as mutation from './mutation-types';
import Vue from "vue";
const state = () => ({
  search: '',
  searcheditems: []
});


const mutations = {



  done(state, response) {

    state.searcheditems.push(response.data.results);
  },


};

const actions = {
  async search({ commit }, payload) {
    // commit('searching')
    await this.$api.get(`/users/?search=${payload}`)
      .then(response => {
        console.log(response.data.results);

        commit('done', response);

      }).catch(error => {

        console.log(error);
      });



  }
};


const getters = {
  getitems: function (state) {
    return state.searcheditems;
  }
};



export default {
  state,
  getters,
  mutations,
  actions,
};