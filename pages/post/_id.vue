<template>
  <v-container fluid grid-list-md>

    <v-layout row wrap align-center>
      <v-flex xs12 sm12 md12 order-md2 order-sm2>
        <v-row>
          <v-col align="center" v-if="post === null">
            <v-progress-circular
              :width="2"
              color="primary"
              size="20"
              indeterminate
            ></v-progress-circular>
          </v-col>
          <v-col v-else-if="post !== null">
            <v-card
              flat
              class="mx-auto"
            >
              <v-list-item>

                <NuxtLink :to="'/profile/'+post.owner.id">
                  <v-list-item-avatar color="grey">
                    <img :src="images[Math.floor(Math.random() * images.length)]" alt="post.owner.username"/>
                  </v-list-item-avatar>
                </NuxtLink>
                <v-list-item-content>
                  <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                  <v-list-item-subtitle>By: {{ post.owner.first_name }} {{
                      post.owner.last_name
                    }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-img
                :src="images[Math.floor(Math.random() * images.length)]"
                height="194"
              ></v-img>

              <v-card-text>
                {{ post.text_content }}
              </v-card-text>

              <v-card-actions>
                <v-btn text small @click.stop="likePost(post)">
                  <v-icon color="success" class="mr-0 text-caption" v-if="post.is_liked_by_me">mdi-heart</v-icon>
                  <v-icon class="mr-0 text-caption" v-else>mdi-heart-outline</v-icon>
                  <span class=" font-weight-light text-caption">{{ post.likes_count }}</span>
                </v-btn>
                <v-btn text small>
                  <v-icon class="text-caption">mdi-comment</v-icon>
                  <span class="font-weight-light text-caption">{{ post.comments_count }}</span>
                </v-btn>
                <v-spacer></v-spacer>
                <v-text-field
                  class="my-1"
                  v-model="comment"
                  id="comment"
                  placeholder="Reply ..."
                  type="text"
                  filled
                  dense
                  rounded
                  no-details
                  append-outer-icon="mdi-send"
                  @click:append-outer="commentThisPost()"
                  hide-details
                />
              </v-card-actions>

            </v-card>
          </v-col>
          <v-col v-else></v-col>
        </v-row>
      </v-flex>
      <v-flex xs12 sm12 md12 order-md2 order-sm2>
        <v-row>
          <p>Comments</p>
          <v-progress-circular
            v-if="comments === null"
            :width="2"
            color="primary"
            size="20"
            indeterminate
          ></v-progress-circular>

          <v-list v-else-if="comments.results.length !== 0" dense two-line :key="childKey">
            <template class="ma-0 pa-0" v-for="(item, index) in comments.results.reverse()">
              <comment-tile :comment="item" :index="index"></comment-tile>
              <v-divider light inset class="my-0 py-0"></v-divider>
            </template>
          </v-list>
          <p v-else></p>

        </v-row>
      </v-flex>
    </v-layout>

  </v-container>
</template>
<script lang="js">
import mixin from "@/plugins/mixins.js";
import CommentCard from "@/components/posts/p_post_comment_tile"
import * as mutation from "@/store/modules/mutation-types";

export default {
  components: {
    'comment-tile': CommentCard
  },
  mixins: [mixin],
  validate({params}) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      action: false,
      comment: '',
      comments: null,
      post: null,
      childKey: 2,
      images: [
        "https://freepsdmock-up.com/wp-content/uploads/2018/06/Free-Wine-Bottle-Label-Mockups-1.jpg",
        "https://wpepitome.com/wp-content/uploads/2019/07/29_wine-bottle-mockups.jpg",
        "https://worldbranddesign.com/wp-content/uploads/2020/02/design-for-vida-wine-brand.jpg",
        "https://s23444.pcdn.co/wp-content/uploads/2020/01/Africa-general-pic.jpg.optimal.jpg",
        "https://secure.img1-fg.wfcdn.com/im/80685197/resize-h800-w800%5Ecompr-r85/3073/30739909/Siera+4+Bottle+Wall+Mounted+Wine+Bottle+and+Glass+Rack+in+White.jpg"
      ],
    }
  },
  created: function () {
    this.getcomments();
    this.getpost();
  },
  beforeCreate() {

  },
  methods: {
    async commentThisPost() {
      let comment = {"post": parseInt(this.$route.params.id), "text_content": this.comment};
      if (this.comment.length > 3) {
        var pot = this.$store.dispatch('commentOnBlogPosts', comment);
      }
      setTimeout(this.reloadcomments(), 5000);

    },
    likePost(post) {
      post.is_liked_by_me ? this.unlike_this_post('unlikeBlogPosts', post.id) : this.like_this_post('likeBlogPosts', post.id)
    },
    init_comment_action() {
      if (this.action === true) {
        this.action = false;
      } else if (this.action === false) {
        this.action = true;
      } else {
        this.action = false;
      }

    },
    async getpost() {
      return await this.$api.$get(`posts/${this.$route.params.id}/`)
        .then(response => {
          this.post = response;
        }).catch(error => {
          console.log(error);

        });
    },
    async getcomments() {
      return await this.$api.$get(`posts/${this.$route.params.id}/comments/`)
        .then(response => {
          this.comments = response;

        }).catch(error => {
          console.log(error);

        });
    },
    async reloadcomments() {
      return await this.$api.$get(`posts/${this.$route.params.id}/comments/`)
        .then(response => {
          this.comments = response;
          this.childKey += response.results.length;
          document.getElementById('comment').value = '';
          this.comment = null;
          this.$forceUpdate();
        }).catch(error => {
          console.log(error);

        });
    },

  },
  computed: {
    /*post() {
      return this.$store.getters.post(this.$route.params.id)
    },
    */

    isDisabled() {
      return this.comment.length > 0;
    }


  }
}
</script>
<style scoped>
.fix {
  position: relative;
}

.fix code {
  position: static;
}
</style>
