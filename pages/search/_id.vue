<template>
  <div>
    <nuxt-child :searcheditem="searcheditem" />
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      //  console.log(this.$store.getters.searcheditems);
      return this.$store.getters.error;
    },
    searcheditem() {
      //  console.log(this.$store.getters.searcheditems);
      return this.$store.getters.getitems;
    },
  },
};
</script>

<style>
</style>