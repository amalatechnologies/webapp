<template>
  <v-app class="app">
    <v-container>
      <v-card>
        <v-card-title>
          <span>{{schedule.name}}</span>
          <v-spacer></v-spacer>
          <v-icon @click="data = !data" v-if="data">mdi-eye-off</v-icon>
          <v-icon @click="data = !data" v-if="!data">mdi-eye</v-icon>
        </v-card-title>
        <v-card-subtitle
          class="title font-weight-light"
        >Selected Repayment Schedule {{schedule.name}}</v-card-subtitle>

        <v-row v-if="data">
          <list-item title="Name" v-bind:subtitle="schedule.name + ` { ID:`+ [schedule.id]+ ` }`"></list-item>

          <list-item title="Amount" v-bind:subtitle="schedule.amount"></list-item>

          <list-item title="Interest Rate" v-bind:subtitle="schedule.interest_rate"></list-item>
          <list-item title="Interest Method" v-bind:subtitle="schedule.interest_method"></list-item>
          <list-item
            title="Loan term"
            v-bind:subtitle="schedule.loan_term + schedule.loan_term_unit"
          ></list-item>
          <list-item
            title="Repaid Every"
            v-bind:subtitle="schedule.repaid_every + schedule.repaid_every_unit"
          ></list-item>
          <list-item title="Number of Repayments" v-bind:subtitle="schedule.number_of_repayments"></list-item>
          <list-item title="Amortization" v-bind:subtitle="schedule.amortization "></list-item>
          <list-item title="Interest Moratorium" v-bind:subtitle="schedule.interest_moratorium "></list-item>
          <list-item title="Principal Moratorium" v-bind:subtitle="schedule.principal_moratorium "></list-item>
          <list-item title="Interest Free period" v-bind:subtitle="schedule.interest_free_period "></list-item>
        </v-row>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn class="success" small>Calculate</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>
<script lang="js" src="~/static/js/schedule_id.js"></script>