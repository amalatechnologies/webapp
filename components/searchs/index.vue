<template>
  <div>
    <div v-for="(value, index) in item" :key="index">
      <div>{{value['username']}}</div>
    </div>
    <label style="color:red;">{{ error }}</label>
  </div>
</template>
<script>
export default {
  props: ["item", "error"],
};
</script>