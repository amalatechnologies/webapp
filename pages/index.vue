<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-card>
          <v-container fluid>
            <p class="subtitle-2 text-center font-weight-black">Loan Repayment Schedule Calculator</p>
            <v-row align="center">
               <v-col class="d-flex" cols="12" sm="6">
               <v-text-field v-model="value" v-mask="mask" type="number" label="Loan Amount" single-line  dense></v-text-field>
              </v-col>
               <v-col class="d-flex" cols="12" sm="6">
               <v-text-field v-model="interest" v-mask="mask" type="number" single-line label="Interest Rate" dense></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="iterest_methods" chips label="Interest Methods" dense></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                 <v-text-field v-model="loan_term_value" type="number" v-mask="mask" single-line label="Loan Terms" dense></v-text-field>
                 <v-spacer></v-spacer>
                <v-select :items="loan_terms" v-model="loan_terms_unit" label="Units" dense></v-select>
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                 <v-text-field v-model="numberOfRepayments" type="number" v-mask="mask" single-line label="Number of Repayments" dense></v-text-field>
              
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field v-model="loan_repayment_freq" type="number" v-mask="mask" single-line label="Repayment Frequency" dense></v-text-field>
                 <v-spacer></v-spacer>
                <v-select :items="loan_terms" v-model="repaymet_freq" label="Unit" dense></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="amortizations" v-model="amortization" label="Amortization" dense></v-select>
              </v-col>

             <v-col class="d-flex" cols="12" sm="6">
                 <v-text-field v-model="interestMoratorium" type="number" v-mask="mask" single-line label="Interest Moratorium" dense></v-text-field>
              
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                 <v-text-field v-model="principalMoratorium" type="number" v-mask="mask" single-line label="Principal Moratorium" dense></v-text-field>
              
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                 <v-text-field v-model="interestFreePeriod" type="number" v-mask="mask" single-line label="Interest Free Period" dense></v-text-field>
              
              </v-col>
            </v-row>
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
      amortizations:["Equal Installment","Equal principal"]
    };
  }
};
</script>
