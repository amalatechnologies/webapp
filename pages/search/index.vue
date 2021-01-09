<template>
  <div class="search-wrapper">
    <input type="text" v-model="search" />
    <button @click="searches()" style="color:blue">search</button>
    <div></div>
    <ul>
      <li v-for="item in  searcheditem" :key="item.id">aaa</li>
    </ul>
    <v-row>
      <v-col cols="12" sm="6" md="9">
        <v-text-field v-model="search" label="Search" solo></v-text-field>
      </v-col>
      <v-btn color="dark" @click="searches()" dark large>Search</v-btn>
    </v-row>

    <div>
      <v-col
        v-if="searcheditem.length !== 0"
        wrap
        v-for="(item, index) in searcheditem"
        :key="index"
      >
        <results :item="item"></results>
      </v-col>
      <div v-else>No Data</div>
    </div>
  </div>
</template>


<script lanf='js' src="~/static/js/search.js">
</script>


<style >
</style>