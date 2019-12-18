<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-card>
          <v-container fluid>
            <p class="subtitle-2 text-center font-weight-black">{{ $t('label.heading.loanrepaymentschedulecalculator') }}</p>
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-model="loan_amount"
                  type="number"
                  label="Loan Amount"
                  single-line
                  dense
                  @input="loanAmount"
                ></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-model="interest_rate"
                  type="number"
                  single-line
                  label="Interest Rate"
                  dense
                ></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="iterest_methods" chips label="Interest Methods" dense></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-model="loan_term_value"
                  type="number"
                  single-line
                  label="Loan Terms"
                  dense
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-select :items="loan_terms" v-model="loanTermsUnit" label="Units" dense></v-select>
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-model="numberOfRepayments"
                  type="number"
                  single-line
                  label="Number of Repayments"
                  dense
                ></v-text-field>
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-model="repaymentFreq"
                  type="number"
                  single-line
                  label="Repayment Frequency"
                  dense
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-select :items="loan_terms" v-model="repaymetfreqUnit" label="Units" dense></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="amortizations" v-model="amortization" label="Amortization" dense></v-select>
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-model="interestMoratorium"
                  type="number"
                  single-line
                  label="Interest Moratorium"
                  dense
                ></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-model="principalMoratorium"
                  type="number"
                  single-line
                  label="Principal Moratorium"
                  dense
                ></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-model="interestFreePeriod"
                  type="number"
                  single-line
                  label="Interest Free Period"
                  dense
                ></v-text-field>
              </v-col>
              <v-col  class="d-flex" cols="12" sm="6"></v-col>
              <v-col  class="d-flex" cols="12" sm="6">

              <v-btn color="primary" depressed v-on="on">{{ $t('label.button.btncalculate') }}</v-btn>

              </v-col>
            </v-row>
          </v-container>

          <v-container fluid>
           <template>
              <v-card>
    <v-card-title>
      {{ $t('label.heading.repaymentschedule') }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  <v-data-table
  v-model="selected"
    :headers="headers"
    :items="repayments"
    :items-per-page="5"
    :search="search"
    class="elevation-0"
    multi-sort
    :loading="loading"
    loading-text="Loading... Please wait"
  ></v-data-table>
  </v-card>
</template>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      title: "Home",
      loan_terms: ["Days", "Weeks", "Months", "Year"],
      iterest_methods: ["Flat", "Reducing Balance", "Straight Method"],
      amortizations: ["Equal Installment", "Equal principal"],
         headers: [
          {
            text: 'Day',
            align: 'left',
            sortable: false,
            value: 'days',
          },
          { text: 'Repayment Date', value: 'date' },
          { text: 'Paid Date', value: 'paiddate' },
          { text: 'Principal Due', value: 'principaldue' },
          { text: 'Loan Balance', value: 'loanbalance' },
          { text: 'Interest', value: 'interest',  filterable: false, },
        ],
      repayments: [
        {
          days: 31,
          date: "11 Nov 2019",
          paiddate: "11 October 2019",
          principaldue: 666777,
          loanbalance: 933333,
          interest: 935363.22
        },
        {
          days: 29,
          date: "11,Oct 2019",
          paiddate: "...",
          principaldue: 666777,
          loanBblance: 933333,
          interest: 935363.22
        },
        {
          days: 28,
          date: "11,Oct 2019",
          paiddate: "...",
          principaldue: 666777,
          loanbalance: 933333,
          interest: 935363.22
        },
         {
          days: 25,
          date: "11,Oct 2019",
          paiddate: "...",
          principaldue: 666777,
          loanbalance: 933333,
          interest: 935363.22
        },
         {
          days: 24,
          date: "11,Oct 2019",
          paiddate: "...",
          principaldue: 666777,
          loanbalance: 933333,
          interest: 935363.22
        },
         {
          days: 23,
          date: "11,Oct 2019",
          paiddate: "...",
          principaldue: 666777,
          loanbalance: 933333,
          interest: 935363.22
        }
      ],
    
      loan_amount: 0,
      amortization: '',
      interestMoratorium: '',
      principalMoratorium: '',
      interestFreePeriod: '',
      repaymetfreqUnit: '',
      numberOfRepayments: '',
      loan_term_value: '',
      interest_rate: '',
      loanTermsUnit : '',
      repaymentFreq: ''

    };
  },
  methods: {
    loanAmount(){
      if(parseFloat(this.loan_amount) > 4){
        this.$nextTick(() => {
          this.loan_amount
          console.log(this.loan_amount)
        })
      }

    }

  },
  computed: {
    createRepaymentSchedule: function(
      amount,
      rate,
      period,
      loanTerm,
      nRepayments
    ) {
      var totalAmout = amount * rate * period;
      var numRepayments = totalAmout / loanTerm;
      for (i = 0; 1 < nRepayments; i++) {
        repaymetsObj("", "31 oct 2019", "27 sept 2019", "", "", "");
      }

      var obj = {
        amount: amount,
        date: period
      };
      return obj;
    },
    repaymetsObj: function(
      days,
      date,
      paidDate,
      principalDue,
      loanBalance,
      interest
    ) {
      this.rDays = days;
      this.rDate = date;
      this.rPaiddate = paidDate;
      this.rPrincipalDue = principalDue;
      this.rLoanBalance = loanBalance;
      this.rInterest = interest;
    }
  }
};
</script>
<style scoped>
pa-sm-2 {
  text-align: center;
}
</style>