<template>
  <v-app class="app">
    <v-container fluid>
      <v-card flat outlined>
        <v-card-title>
          <span>{{ schedule.name }}</span>
          <v-spacer></v-spacer>
          <v-icon @click="data = !data" color="info lighten-1" v-if="data"
            >mdi-chevron-up-box</v-icon
          >
          <v-icon @click="data = !data" color="info lighten-1" v-if="!data"
            >mdi-chevron-down-box</v-icon
          >
        </v-card-title>
        <v-card-subtitle class="title font-weight-light"
          >Selected Repayment Schedule {{ schedule.name }}</v-card-subtitle
        >
        <v-card-text> </v-card-text>
        <v-row v-if="data">
          <list-item
            title="Name"
            v-bind:subtitle="schedule.name + ` { ID:` + [schedule.id] + ` }`"
          ></list-item>

          <list-item
            title="Amount"
            v-bind:subtitle="schedule.amount"
          ></list-item>

          <list-item
            title="Interest Rate"
            v-bind:subtitle="schedule.interest_rate"
          ></list-item>
          <list-item
            title="Interest Method"
            v-bind:subtitle="schedule.interest_method"
          ></list-item>
          <list-item
            title="Loan term"
            v-bind:subtitle="schedule.loan_term + schedule.loan_term_unit"
          ></list-item>
          <list-item
            title="Repaid Every"
            v-bind:subtitle="schedule.repaid_every + schedule.repaid_every_unit"
          ></list-item>
          <list-item
            title="Number of Repayments"
            v-bind:subtitle="schedule.number_of_repayments"
          ></list-item>
          <list-item
            title="Amortization"
            v-bind:subtitle="schedule.amortization"
          ></list-item>
          <list-item
            title="Interest Moratorium"
            v-bind:subtitle="schedule.interest_moratorium"
          ></list-item>
          <list-item
            title="Principal Moratorium"
            v-bind:subtitle="schedule.principal_moratorium"
          ></list-item>
          <list-item
            title="Interest Free period"
            v-bind:subtitle="schedule.interest_free_period"
          ></list-item>
          <template v-if="schedule.is_shared">
            <list-item
              title="Shared By"
              :subtitle="schedule.shared_by.username"
            ></list-item>
          </template>
        </v-row>

        <v-container fluid v-if="table">
          <datatable-component
            v-bind:headers="headers"
            v-bind:repayments="repayments"
            :items-per-page="5"
            v-bind:search="search"
            class="elevation-0 font-weight-light"
            v-bind:dense="dense"
            v-bind:dark="dark"
            v-bind:ttInterest="ttInterest"
            v-bind:ttBalance="ttBalance"
            v-bind:amount="amount"
            multi-sort
            v-bind:loading="loading"
            loading-text="Loading... Please wait"
          ></datatable-component>
        </v-container>

        <v-card-actions>
          <v-btn
            depressed
            v-if="!table"
            style="text-transform: capitalize"
            class="info lighten-1 font-weight-light"
            @click="calculateRepaymentSchedule"
            >Calculate</v-btn
          >
          <v-btn
            v-else
            class="info lighten-1 font-weight-light"
            @click="dialog = true"
            >Share</v-btn
          >
        </v-card-actions>
      </v-card>

      <v-dialog v-model="dialog" width="70rem">
        <v-card>
          <v-card-text>Share repayment schedule</v-card-text>
          <v-form class="mx-5">
            <!-- <v-text-field
              placeholder="Username"
              outlined
              label="Username"
            ></v-text-field> -->
            <v-autocomplete
              outlined
              placeholder="Username"
              :loading="uLoading"
              :search-input.sync="searchUsers"
              :items="users"
              v-model="username"
              hide-no-data
            ></v-autocomplete>
            <v-btn class="primary" @click="shareSchedule">Share schedule</v-btn>
          </v-form>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>
<script lang="js" src="~/static/js/schedule_id.js"></script>
