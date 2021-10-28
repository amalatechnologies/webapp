
const state = () => ({
  userdata: {},
  showLoader: Boolean,
  message:null,
  TinDoument:null,
  CertificateDocument:null,

});

const mutations = {
  TINDOCUMENT_SUCCESS(state,payload){
    state.showLoader = false;
    state.TinDoument =payload;
  },
  CERTIFICATEDOCUMENT_SUCCESS (state,payload){
    state.showLoader = false;
    state.CertificateDocument=payload;
  },
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
  },
  UPDATE_PASSWORD(state) {
    state.showLoader = true;
  },
  UPDATE_PASSWORD_FAILED(state) {
    state.showLoader = false;
  },
  UPDATE_PASSWORD_ERROR(state,payload) {
    state.showLoader = true;

    state.message= payload;
  },
  UPDATE_PASSWORD_SUCCESS(state) {
  
    state.showLoader = true;

  },







};
const actions = {
  async upload_Tin_document({commit},payload)
{
  await this.$api.$post(`lender-tin-document/`, payload)
  .then(response => {
  
   console.log(response);
    //commit("PROFILE_UPDATE_SUCCESS", response);
   

  }).catch(error => {
   
    console.log(error);

  });


},
async upload_Certificate_document({commit},payload)
{
  await this.$api.$post(`lender-certificates-document/`, payload)
  .then(response => {

   console.log(response);

  }).catch(error => {
   
    console.log(error);

  });
 



},

    async getThisUserTinDocument({commit}) {

      return await this.$api.$get(`lender-tin-document/?owner=`+ localStorage.getItem('uuId') )
        .then(response => {
          commit("TINDOCUMENT_SUCCESS", response);
       
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisUserCertificates({commit}) {

      return await this.$api.$get(`lender-certificates-document/?owner=`+ localStorage.getItem('uuId'))
        .then(response => {
        console.log(response);
          commit("CERTIFICATEDOCUMENT_SUCCESS", response);
       
        }).catch(error => {
          console.log(error);

        });
    },

  async getProfile({ commit}) {
    commit("PROFILE");
    await this.$api.$get(`users/`+ localStorage.getItem('uuId') + `/`)
      .then(response => {
        commit("PROFILE_SUCCESS", response);


      }).catch(error => {
        commit("PROFILE_ERROR");


      });
  }, 
  async _update_user_password({ commit }, payload) {
    commit("UPDATE_PASSWORD");
    console.log(payload);
    await this.$api.$put("change-password/", payload)
      .then(response => {
        commit("UPDATE_PASSWORD_SUCCESS");
       
    
        if (response.code === 200) {
          localStorage.removeItem('qAccessToken');
          localStorage.removeItem('uuId');
          this.$router.push('/');
        }
      
        else if(response.code === 400)
    {

      commit("UPDATE_PASSWORD_ERROR",response.code);
     
    }

      }).catch(error => {
        
        commit("UPDATE_PASSWORD_FAILED")
      });
  },
  async updateProfile({
    commit
  }, payload) {
    commit("PROFILE_UPDATE");
    await this.$api.$patch(`users/` + localStorage.getItem('uuId') + `/`, payload)
      .then(response => {
        commit("PROFILE_UPDATE_SUCCESS", response);
       

      }).catch(error => {
        commit("PROFILE_UPDATE_FAILED");
        console.log(error);

      });
  }
};
const getters = {
  userInfo: function (state) {
    return state.userdata;
  },
  passwordmessage: function (state) {

    return state.message;
  },
  tinDocument:function(state){
  
    return state.TinDoument;
  },
  certificateDocument:function(state){
    return state.CertificateDocument;
  }
};
export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
};
