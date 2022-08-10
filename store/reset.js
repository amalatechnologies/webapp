const state = () => ({
  isLoading: false,
  resetPswdMessage: "",
});

const mutations = {
  ["RESET_PASSWORD"](state) {
    state.isLoading = true;
  },
  ["RESET_PASSWORD_EMAIL_SUCCESS"](state) {
    state.isLoading = false;
    state.resetPswdMessage = "Email sent please check your inbox";
  },
  ["RESET_PASSWORD_EMAIL_FAIL"](state) {
    state.isLoading = false;
    state.resetPswdMessage = "Email was not sent please try again";
  },
  ["RESET_PASSWORD_SUCCESS"](state) {
    state.isLoading = false;
    state.resetPswdMessage =
      "Password updated successfully, Please login with the new password";
  },
  ["RESET_PASSWORD_FAIL"](state) {
    state.isLoading = false;
    state.resetPswdMessage = "Failed to reset password please try again";
  },
};

const actions = {
  async _sendResetPasswordEmail({ commit }, data) {
    commit("RESET_PASSWORD");
    await this.$api
      .post("/users/password/reset/", data)
      .then((res) => {
        commit("RESET_PASSWORD_EMAIL_SUCCESS");
      })
      .catch((err) => {
        commit("RESET_PASSWORD_EMAIL_FAIL");
      });
  },
  async _sendResetPasswordData({ commit }, data) {
    commit("RESET_PASSWORD");
    await this.$api
      .post("/users/password/reset/confirm/", data)
      .then((res) => {
        commit("RESET_PASSWORD_SUCCESS");
      })
      .catch((err) => {
        console.log(err);
        commit("RESET_PASSWORD_FAIL");
      });
  },
};

const getters = {
  getReset(state) {
    return {
      success: !!state.resetPswdMessage,
      loading: state.isLoading,
      message: state.resetPswdMessage,
    };
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
  getters,
};
