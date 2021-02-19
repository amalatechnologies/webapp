<template>
  <v-data-table
    :headers="headers"
    :items="repayments"
    :items-per-page="15"
    :search="search"
    class="elevation-0"
    :dense="dense"
    :dark="dark"
    multi-sort
    :loading="loading"
    loading-text="Loading... Please wait"
  >
    <template v-slot:top>
      <v-row no-gutters>
        <h3 class="font-weight-black">Repayment schedule</h3>
      </v-row>
    </template>
    <template v-slot:body.append v-if="$vuetify.breakpoint.smAndUp">
      <tr class="table_footer">
        <td>Total#</td>
        <td></td>
        <td>
          <p class="font-weight-black">{{ amount }}</p>
        </td>
        <td></td>
        <td>
          <p class="font-weight-black">{{ ttInterest }}</p>
        </td>
        <td></td>
        <td>
          <p class="font-weight-black">{{ ttBalance }}</p>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: [
    "headers",
    "repayments",
    "loading",
    "search",
    "dense",
    "dark",
    "amount",
    "ttInterest",
    "ttBalance"
  ]
};
</script>
