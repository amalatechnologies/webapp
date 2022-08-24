const state = () => ({
  userdata: {},
  error: "",
});

const mutations = {
  LOGIN(state) {
    state.showLoader = true;
  },
  LOGIN_FAILED(state) {
    state.showLoader = false;
  },
  LOGIN_ERROR(state, error) {
    state.showLoader = false;
    state.error = error;
  },
  LOGIN_SUCCESS(state, payload) {
    state.showLoader = false;
    state.userdata = payload;
  },
  LOGOUT(state) {
    state.showLoader = true;
  },
  LOGOUT_SUCCESS(state) {
    state.showLoader = false;
    state.userdata = null;
  },
  LOGOUT_FAILED(state) {
    state.showLoader = false;
  },
};
const actions = {
  async login({ commit }, payload) {
    commit("LOGIN");
    await this.$api
      .$post(`auth/`, payload)
      .then((response) => {
        if (response.token != null) {
          commit("LOGIN_SUCCESS", response);
          const token = response.token;
          const uuId = response.id;
          localStorage.setItem("qAccessToken", token);
          localStorage.setItem("uuId", uuId);
          this.$router.push("/home");
        }
      })
      .catch((error) => {
        commit("LOGIN_ERROR", "Your Username or Password is incorrect");
        localStorage.removeItem("qAccessToken");
        localStorage.removeItem("uuId", uuId);
        console.log(error);
      });
  },
};
const getters = {
  isLoggedIn: function (state) {
    return state.userdata != null;
  },
  userInfos: function (state) {
    return state.userdata;
  },
  userId: (state) => {
    return state.userdata.id;
  },

  Signerror: function (state) {
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
