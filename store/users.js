const state = () => ({
  users: [],
  isLoading: false,
});

const mutations = {
  ["SEARCH_USERS"](state) {
    state.isLoading = true;
  },
  ["SEARCH_USERS_SUCCESS"](state, payload) {
    state.isLoading = false;
    state.users = payload;
  },
  ["SEARCH_USERS_FAIL"](state) {
    state.isLoading = false;
  },
};

const actions = {
  async _searchUsers({ commit }, username) {
    commit("SEARCH_USERS");
    await this.$api
      .$get(`users/?search=${username}`)
      .then((response) => {
        // console.log(response);
        commit("SEARCH_USERS_SUCCESS", response.results);
      })
      .catch((err) => {
        commit("SEARCH_USERS_FAIL");
        // console.log(err);
      });
  },
};

const getters = {
  getUsersLoading(state) {
    return state.isLoading;
  },
  getResults(state) {
    return state.users;
  },
};

export default {
  namespaced: false,
  actions,
  getters,
  mutations,
  state,
};
