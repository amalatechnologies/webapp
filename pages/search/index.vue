<template>
  <div>
    <div></div>

    <v-row>
      <v-col cols="12" sm="6" md="9">
        <v-text-field
          v-model="search"
          label="Search"
          :rules=" [nameRules.required, nameRules.length(1)]"
        ></v-text-field>
      </v-col>
      <v-btn color="dark" @click="searches()" dark large>Search</v-btn>
    </v-row>

    <div>
      <searchs :error="error" :item="searcheditem"></searchs>
    </div>
  </div>
</template>


<script lanf='js' src="~/static/js/search.js">
</script>


<style >
</style>