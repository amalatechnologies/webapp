<template>
  <v-container fluid grid-list-md>

    <v-layout row wrap align-center>
      <v-flex xs12 sm12 md12 order-md2 order-sm2>

        <v-row>
          <v-card
            flat
            class="mx-auto"
          >
            <v-list-item>
              <v-list-item-avatar color="grey">
                <img :src="images[Math.floor(Math.random() * images.length)]" alt="post.owner.username"/>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                <v-list-item-subtitle>By: {{ post.owner.first_name }} {{ post.owner.last_name }}</v-list-item-subtitle>
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
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Read
              </v-btn>
              <v-btn
                text
                color="deep-purple accent-4"
              >
                Bookmark
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn text small @click.stop="likePost(post)">
                <v-icon color="success" class="mr-0 text-caption" v-if="post.is_liked_by_me">mdi-heart</v-icon>
                <v-icon  class="mr-0 text-caption" v-else >mdi-heart-outline</v-icon>
                <span class=" font-weight-light text-caption">{{ post.likes_count }}</span>
              </v-btn>
              <v-btn text small >
                <v-icon @click.stop="action = !action" class="text-caption">mdi-comment</v-icon>
                <span class="font-weight-light text-caption">{{ post.comments_count }}</span>
              </v-btn>
            </v-card-actions>
            <v-text-field
              class="pa-1 "
              v-if="action"
              v-model="comment"
              label="Reply"
              type="text"
              no-details
              outlined
              append-outer-icon="mdi-send"
              @keyup.enter="commentThisPost"
              @click:append-outer="commentThisPost"
              hide-details
            />
          </v-card>
        </v-row>
      </v-flex>
      <v-flex xs12 sm12 md12 order-md2 order-sm2>
        <v-row>

          <!--<v-col cols="12" md="3" sm="12" wrap v-for="(post, index) in posts" :key="index">
            <post-card :post="post"></post-card>
          </v-col>-->
          <!--<v-fab-transition>
            <v-btn
              text
             block
              bottom
              fixed
              large
              class="">
              <v-text-field
                v-model="comment"
                label="Comment"
              ></v-text-field>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>-->
        </v-row>
      </v-flex>
    </v-layout>

  </v-container>
</template>
<script lang="js">
import mixin from "@/plugins/mixins.js";
export default {
  mixins:[mixin],
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      action: false,
      comment: null,
      images:[
        "https://freepsdmock-up.com/wp-content/uploads/2018/06/Free-Wine-Bottle-Label-Mockups-1.jpg",
        "https://wpepitome.com/wp-content/uploads/2019/07/29_wine-bottle-mockups.jpg",
        "https://worldbranddesign.com/wp-content/uploads/2020/02/design-for-vida-wine-brand.jpg",
        "https://www.mbsnapa.com/wp-content/uploads/2018/02/mbs18-136.jpg",
        "https://secure.img1-fg.wfcdn.com/im/80685197/resize-h800-w800%5Ecompr-r85/3073/30739909/Siera+4+Bottle+Wall+Mounted+Wine+Bottle+and+Glass+Rack+in+White.jpg"
      ]
    }
  },
  methods:{
    commentThisPost(){
      let post = {"post": parseInt(this.$route.params.id), "text_content": this.comment, "type":"comment"};
      this.$store.dispatch('commentOnBlogPosts', post);
    },
    likePost(post){
      console.log(post.is_liked_by_me)
      post.is_liked_by_me ? this.unlike_this_post('unlikeBlogPosts',post.id) : this.like_this_post('likeBlogPosts',post.id)
    },
  },
  computed:{
    post(){
      console.log(this.$route.params.id)
      return this.$store.getters.post(this.$route.params.id)
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
