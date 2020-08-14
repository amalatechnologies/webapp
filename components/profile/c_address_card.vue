<template>
  <v-list-item class=" pa-0" three-line>
    <v-list-item-content class="ma-0 ">
      <v-list-item-title class="font-weight-bold">
        <span class="text-subtitle-2 font-weight-bold">{{ address.location }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <v-btn small depressed class="mb-1 primary--text" color="primary lighten-4">{{ address.class }}</v-btn>
      </v-list-item-title>
      <v-list-item-subtitle class="font-weight-light text-caption">
        {{ address.street_name }}
      </v-list-item-subtitle>
      <v-list-item-subtitle class="font-weight-light text-caption">
        {{ address.street_address }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>
<script lang="js">
export default {
  props:["address"]
}
</script>
