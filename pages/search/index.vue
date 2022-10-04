<template>
  <div>
    <div>
      <v-row>
        <v-col cols="12" sm="6" md="9">
          <v-text-field
            v-model="search"
            label="Search"
            :rules="[nameRules.required, nameRules.length(1)]"
          ></v-text-field>
        </v-col>
        <v-btn color="dark" @click="searches()" dark large>
          {{ $t("label.button.btnSearch") }}
        </v-btn>
      </v-row>
    </div>

    <div>
      <searchs :error="error" :item="searcheditem"></searchs>
    </div>
  </div>
</template>

<script lang="js">

import searchs from "@/components/searchs/index"
export default {
  components: {
    'searchs': searchs
  },


  data: () => ({
    search: "",
    show: false,
    searcheditems: [],
    nameRules: {
      name: v => !!v || 'Name is required',
      length: (len) => (v) =>
        (v || "").length >= len ||
        `Invalid character length, required ${len}`,

    },
  }),

  methods: {
    searches() {
      let search = "";
      search = this.search;
      this.$store.dispatch("search", search);
    },
  },

  computed: {

    error() {
      //  console.log(this.$store.getters.searcheditems);
      return this.$store.getters.error;
    },
    searcheditem() {
      //  console.log(this.$store.getters.searcheditems);
      return this.$store.getters.getitems;
    }
  },
};
</script>
