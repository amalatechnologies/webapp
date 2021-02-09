<template>
  <div>
    <div v-for="(value, index) in item" :key="index">
      <div>
        <nuxt-link :to="`/search/${value.id}`">{{value.username}}</nuxt-link>
      </div>
    </div>
    <label style="color:red;">{{ error }}</label>
  </div>
</template>
<script>
export default {
  props: ["item", "error"],
};
</script>