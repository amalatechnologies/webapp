<template>
  <v-app class="app">
    <v-container>
      <v-card flat outlined>
        <v-container fluid>
          <!--<v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left font-weight-bold">Name</th>
                  <th class="text-left font-weight-bold">Amount</th>
                  <th class="text-left font-weight-bold">Interest</th>
                  <th class="text-left font-weight-bold">Method</th>
                  <th class="text-left font-weight-bold">Amortization</th>
                  <th class="text-left font-weight-bold">Repayments</th>
                  <th class="text-left font-weight-bold">Loan Term</th>
                  <th class="text-left font-weight-bold">Repayed Every</th>
                  <th class="text-left font-weight-bold">I.M</th>
                  <th class="text-left font-weight-bold">P.M</th>
                  <th class="text-left font-weight-bold">I.F.P</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in schedules" :key="item.id" @click="getSchedule(item.id)">
                  <td class="font-weight-light">{{ item.id }}/{{ item.name }}</td>
                  <td class="font-weight-light">{{ item.amount }}</td>
                  <td class="font-weight-light">{{ item.interest_rate }}</td>
                  <td class="font-weight-light">{{ item.interest_method }}</td>
                  <td class="font-weight-light">{{ item.amortization }}</td>
                  <td class="font-weight-light">{{ item.number_of_repayments }}</td>
                  <td class="font-weight-light">{{ item.loan_term }} {{ item.loan_term_unit }}</td>
                  <td class="font-weight-light">{{ item.repaid_every}}{{ item.repaid_every_unit}}</td>
                  <td class="font-weight-light">{{ item.interest_moratorium }}</td>
                  <td class="font-weight-light">{{ item.principal_moratorium }}</td>
                  <td class="font-weight-light">{{ item.interest_free_period }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>-->
          <v-data-table
            :headers="headers"
            :items="schedules"
            :items-per-page="5"
            dense
            @click:row="getSchedule(item)"
            class="elevation-1"
          >
            <template v-slot:item.term="{ item }">
              <v-chip dark>{{ item.loan_term }} {{ item.loan_term_unit }}</v-chip>
            </template>
            <template v-slot:item.repay="{ item }">
              <span>{{ item.loan_term }} {{ item.repaid_every}}{{ item.repaid_every_unit}}</span>
            </template>
          </v-data-table>
          <v-row>
            <v-col cols="12" md="4">
              <p class="font-weight-bold">I.M : Interest Moratorium</p>
            </v-col>
            <v-col cols="12" md="4">
              <p class="font-weight-bold">P.M : Principal Moratorium</p>
            </v-col>
            <v-col cols="12" md="4">
              <p class="font-weight-bold">I.F.P : Interest Free Period</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      item: 1,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Amount", value: "amount" },
        { text: "Interest", value: "interest_rate" },
        { text: "Method", value: "interest_method" },
        { text: "Amortization", value: "amortization" },
        { text: "Repayments", value: "number_of_repayments" },
        { text: "Loan Term", value: "term" },
        { text: "Repay Every", value: "repay" },
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
    getSchedule: function(id) {
      var data = this.$store.getters.getterschedule(id);
      this.$router.push("/schedule/" + id);
      return data;
    }
  },
  beforeMount: function() {},
  computed: {
    schedules() {
      return this.$store.getters.schedulesdata;
    }
  }
};
</script>>
