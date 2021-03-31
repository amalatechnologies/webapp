<template></template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    datas() {
      let datax = this.$store.getters.getsavedschedule;
      console.log(datax);
      return datax;
    }
  }
};
</script>