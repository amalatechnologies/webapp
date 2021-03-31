<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="schedules"
      :items-per-page="5"
      dense
      @click:row="getSchedule"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="font-weight-black">{{
            $t("label.heading.repaymentschedulelist")
          }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:[`item.term`]="{ item }">
        <v-chip x-small dark color="primary" class="mt-2"
          >{{ item.loan_term }} {{ item.loan_term_unit }}</v-chip
        >
      </template>
      <template v-slot:[`item.repay`]="{ item }">
        <span
          >{{ item.loan_term }} {{ item.repaid_every
          }}{{ item.repaid_every_unit }}</span
        >
      </template>
    </v-data-table>
    <v-row>
      <v-col cols="12" md="4">
        <p class="font-weight-bold">I.M : {{ $t('label.footer.Interest Moratorium')}}</p>
      </v-col>
      <v-col cols="12" md="4">
        <p class="font-weight-bold">P.M : {{ $t('label.footer.Principal Moratorium')}}</p>
      </v-col>
      <v-col cols="12" md="4">
        <p class="font-weight-bold">I.F.P :{{ $t('label.footer.Interest Free Period')}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      item: 1,
      headers: [
         {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id"
        },
        {
          text: this.$t('label.heading.Name'),
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: this.$t('label.heading.Amount'), value: "amount" },
        { text: this.$t('label.heading.Interest'), value: "interest_rate" },
        { text: this.$t('label.heading.Method'), value: "interest_method" },
        { text: this.$t('label.heading.Amortization'), value: "amortization" },
        { text: this.$t('label.heading.Repayments'), value: "number_of_repayments" },
        { text: this.$t('label.heading.Loan Terms'), value: "term" },
        { text: this.$t('label.heading.Repay Every'), value: "repay" },
        { text: "I.M", value: "interest_moratorium" },
        { text: "P.M", value: "principal_moratorium" },
        { text: "I.F.P", value: "interest_free_period" }
      ]
    };
  },
  created: function() {
    let vm = this;
    vm.$store.dispatch("getSchedules");
  },
  methods: {
    getSchedule: function(item) {
      //console.log(id)
      /**var data = this.$store.getters.getterschedule(id);**/
      this.$router.push("/schedule/" + item.id);
     
    }
  },
  beforeMount: function() {},
  computed: {
    schedules() {
      return this.$store.getters.schedulesdata;
    }
  }
};
</script>
