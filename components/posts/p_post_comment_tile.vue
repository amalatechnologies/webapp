

    <template>
      <!--<v-subheader
        v-if="item.header"
        :key="item.header"
        v-text="item.header"
      ></v-subheader>-->

      <v-list-item dense  :key="index" @click="">
        <v-list-item-avatar>
          <v-img src="https://i.pinimg.com/originals/96/90/ca/9690cabed5d0a12fa6bfbe4f2d17d65d.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text--caption font-weight-light">{{ comment.created_at  | DateFormat }}</v-list-item-title>
          <v-list-item-subtitle ><span class='text--primary font-weight-bold'>{{ comment.owner.first_name }}&nbsp;{{ comment.owner.last_name }}</span> &mdash; {{comment.text_content}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

<script>
export default {
  props:['comment', 'index'],
name: "p_post_comment_tile.vue"
}
</script>

<style scoped>

</style>
