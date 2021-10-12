import c_type_divider from "@/components/profile/c_type_divider";
import c_address_card from "@/components/profile/c_address_card";
import postCard from "@/components/posts/p_post_card"
import c_follows from "@/components/follows/c_follows";

export default {
  props: {userdata:Object},
  components: {
    'post-card': postCard,
    'v-type-divider': c_type_divider,
    'v-address-card': c_address_card,
    'v-follows': c_follows
  },
  data() {
    return {
      src_Tinumber:null,
     src_certificate:null,
       valid: false,
    text:null,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    progress: false,
    confirmPassword: "",
    company: "",
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    middlename: "",
    phonenumber: "",
    address: "",
    city: "",
    country: "",
    postal: "",
    about: "",
    dialog1: false,
    dialog3: false,
      dialog4:false,
      dialog5:false,
        dialog6:false,
      dialog: false,
      rate: false,
      tab: null,
      rating: 2,
      posts: null,
      TinDoc:null,
      CerDoc:null,
      comments: null,
      followers: null,
      followings: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      emptyIcon: 'mdi-star-outline',
      fullIcon: 'mdi-star',
      halfIcon: 'mdi-star-half-full',
      address: {
        location: '',
        class: '',
        street_name: '',
        street_address: ''
      },
      rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    form_data: {
      old_password: "",
      new_password: ""
    },
      address1: {
        location: "Spotify New York",
        class: "Primary",
        street_name: "170 William Street",
        street_address: "New York, NY 10038-78 212-312-51\n"
      },
      address2: {
        location: "Metropolitan Museum",
        class: "Secondary",
        street_name: "S45 E 68th Street",
        street_address: "New York, NY 10038-78 212-312-51\n"
      },


    }
  },
  created : function () {
    // this.address.location = this.userdata.username;
    // this.address.class = "Home Address";
    // this.address.street_name = "Phone No. " + this.userdata.phone;
    // this.address.street_address = "Email Address " + this.userdata.email;
    this.getThisUserCertificates();
    this.getThisUserTinCertificates();
  },
    computed: {
    // userdata() {
    //   return this.$store.getters.userInfo;

    // },

    passwordConfirmationRule() {
      return () =>
        this.form_data.new_password === this.confirmPassword ||
        "Password must match";
    },

  },
  methods: {


    uploadDocuments()
    {
      let data={
      src:this.src_Tinumber,
      owner: localStorage.getItem('uuId')
      }

      let datas={
src:this.src_certificate,
owner: localStorage.getItem('uuId')
      }

      this.$store.dispatch('upload_Tin_document',data);
      this.$store.dispatch('upload_Certificate_document',datas);
    this.dialog6 = false;
    },
     updateProfileWithCreadentials() {
      if (this.userdata.picture == null) {
        delete this.userdata.picture;
        this.dialog5 = false;
        this.$store.dispatch('updateProfile', this.userdata);
      }
     
    },
    alert(message)
     {
  
       if (message === 400)
       {
         
        this.text="Old password isnot correct"
        this.dialog3=true;
             }  


     },
    updatepassword() {
      this.$store.dispatch("_update_user_password", this.form_data);
      this.dialog = false;
      this.alert(this.$store.getters.passwordmessage);

    },
    async getThisUserPosts() {
      console.log("Clicked" + this.$route.params.id)
      return await this.$api.$get(`users/${this.$route.params.id}/posts/?type=post`)
        .then(response => {
          this.posts = response;
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisUserTinCertificates() {

      return await this.$api.$get(`lender-tin-document/?owner=10`)
        .then(response => {
          this.TinDoc=response;
       
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisUserCertificates() {

      return await this.$api.$get(`lender-certificates-document/`)
        .then(response => {
        this.CerDoc=response;
       
        }).catch(error => {
          console.log(error);

        });
    },

    
    async getThisUserComments() {
      console.log("Clicked" + this.$route.params.id)
      return await this.$api.$get(`users/${this.$route.params.id}/comments/`)
        .then(response => {
          this.comments = response;
        }).catch(error => {
          console.log(error);

        });
    },
    async unfollowThisPerson() {
      return await this.$api.$post(`/unfollow-user/`, {"id": this.$route.params.id})
        .then(response => {
          if (response !== null) {
            this.$parent.viewusedata();
          }
        }).catch(error => {
          console.log(error);

        });

    },
    async followThisPerson() {
      return await this.$api.$post(`/follow-user/`, {"id": this.$route.params.id})
        .then(response => {
          if (response !== null) {
            this.$parent.viewusedata();
          }
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisPersonFollowers() {
      return await this.$api.$get(`users/${this.$route.params.id}/follows/`)
        .then(response => {
          if (response !== null) {
            this.followers = response;
          }
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisPersonFollowings() {
      return await this.$api.$get(`users/${this.$route.params.id}/following/`)
        .then(response => {
          if (response !== null) {
            this.followings = response;
            this.followings = response;
          }
        }).catch(error => {
          console.log(error);

        });
    },
    addRating() {
      this.rate = true;
    },
    async rateThisPersonLanderProfile() {
      let rate_dta = {
        "profile": parseInt(this.userdata.lender_profile.id),
        "score": Math.round(this.rating)
      };
      return await this.userdata.lender_profile.my_rating ? this.$api.$patch(`/lender-profile-ratings/${this.$route.params.id}/`, rate_dta) : this.$api.$post(`/lender-profile-ratings/`, rate_dta)
        .then(response => {
          if (response !== null) {
            this.$parent.viewusedata();
          }
        }).catch(error => {
          console.log(error);
        });
    }

  }
}
