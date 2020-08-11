<template>
  <v-card
    class="mx-auto"
    max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="images[Math.floor(Math.random() * images.length)]"
    >
    </v-img>


    <v-card-subtitle class="pb-0">
      <v-btn x-small rounded depressed  class="font-weight-medium" color="primary">
        {{post.type}}
      </v-btn>
    </v-card-subtitle>
    <v-card-title> Top 10 australian beaches</v-card-title>
    <v-card-text class="text--primary">{{post.text_content }}</v-card-text>


    <v-card-actions>
      <v-list-item dense>
        <v-list-item-avatar color="grey">
          <img :src="images[Math.floor(Math.random() * images.length)]" alt="post.owner.username"/>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subhead text-caption" >{{ post.owner.first_name }} {{ post.owner.last_name }}</v-list-item-title>
          <v-list-item-subtitle
            class="font-weight-medium text-caption">{{ post.created_at |  DateFormat  }}
          </v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["post"],
  data: () => ({
    view: false,
    images:[
      "https://freepsdmock-up.com/wp-content/uploads/2018/06/Free-Wine-Bottle-Label-Mockups-1.jpg",
      "https://wpepitome.com/wp-content/uploads/2019/07/29_wine-bottle-mockups.jpg",
      "https://worldbranddesign.com/wp-content/uploads/2020/02/design-for-vida-wine-brand.jpg",
      "https://www.mbsnapa.com/wp-content/uploads/2018/02/mbs18-136.jpg",
      "https://secure.img1-fg.wfcdn.com/im/80685197/resize-h800-w800%5Ecompr-r85/3073/30739909/Siera+4+Bottle+Wall+Mounted+Wine+Bottle+and+Glass+Rack+in+White.jpg"
    ]

  }),
  methods: {},
  beforeMount() {
  }
}
</script>
<style>
*{ text-transform: none !important; }
</style>
