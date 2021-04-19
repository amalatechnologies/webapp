
const state = () => ({
  userdata: {},
  showLoader: Boolean,

});

const mutations = {

  PROFILE(state) {
    state.showLoader = true;
  },
  PROFILE_FAILED(state) {
    state.showLoader = false;
  },
  PROFILE_SUCCESS(state, payload) {
    state.showLoader = false;
    state.userdata = payload;

  },
  PROFILE_ERROR(state) {
    state.showLoader = false;
  },
  PROFILE_UPDATE(state) {
    state.showLoader = true;
  },
  PROFILE_UPDATE_FAILED(state) {
    state.showLoader = false;
  },
  PROFILE_UPDATE_SUCCESS(state, payload) {
    state.showLoader = false;
    state.userdata = payload;

  },
  PROFILE_UPDATE_ERROR(state) {
    state.showLoader = false;
  }
};
const actions = {
  async getProfile({ commit}) {
    commit("PROFILE");
    await this.$api.$get(`users/`+ localStorage.getItem('uuId') + `/`)
      .then(response => {
        commit("PROFILE_SUCCESS", response);


      }).catch(error => {
        commit("PROFILE_ERROR");


      });
  },
  async updateProfile({
    commit
  }, payload) {
    commit("PROFILE_UPDATE");
    await this.$api.$patch(`users/` + localStorage.getItem('uuId') + `/`, payload)
      .then(response => {
        commit("PROFILE_UPDATE_SUCCESS", response);
        localStorage.removeItem('qAccessToken');
        localStorage.removeItem('uuId');
        this.$router.push('/home');

      }).catch(error => {
        commit("PROFILE_UPDATE_FAILED");
        console.log(error);

      });
  }
};
const getters = {
  userInfo: function (state) {
    return state.userdata;
  }
};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
