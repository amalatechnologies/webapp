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

          <v-container fluid>
               <p class="subtitle-2 text-center font-weight-black">Repayment Schedules</p>
         <v-row no-gutters>
      

       <v-col
        v-for="n in 6"
        :key="n"
        cols="2"
        sm="2"
      >
        <v-subheader
          class="pa-sm-2 font-weight-black"
          tile
          v-text="repayments_schedule_titles[n-1]"
        >
          
        </v-subheader>
        
      </v-col>

      <v-col>
        <v-container>
             <v-row
         v-for="n in repayments"
        :key="n"
        cols="2"
        sm="2">
        <v-subheader
          class="pa-sm-2 "
          tile
          v-text="n.days">
        </v-subheader>
          <v-subheader
          class="pa-sm-2 "
          tile
          v-text="n.date">
          </v-subheader>
          <v-subheader
          class="pa-sm-2 "
          tile
          v-text="n.paidDate">
          </v-subheader>
         <v-subheader
          class="pa-sm-2 "
          tile
          v-text="n.principalDue">
         </v-subheader>
          <v-subheader
          class="pa-sm-2 "
          tile
          v-text="n.loanBalance">
          </v-subheader>
            <v-subheader
          class="pa-sm-2 "
          tile
          v-text="n.interest">
            </v-subheader>
        
        
      </v-row>


        </v-container>
     
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
      amortizations:["Equal Installment","Equal principal"],
      repayments: [
        {"days": 31,"date":"11 Nov 2019", "paidDate":"11 October 2019","principalDue": 666777,"loanBalance":933333, "interest": 935363.22},
        {"days": 29,"date":"11,Oct 2019", "paidDate":"...","principalDue": 666777,"loanBalance":933333, "interest": 935363.22},
        {"days": 28,"date":"11,Oct 2019", "paidDate":"...", "principalDue": 666777,"loanBalance":933333, "interest": 935363.22}
        ],
        repayments_schedule_titles: ["Days","Date", "Pid Date", "Principal Due", "Loan Balance", "Iterest"]
    };
  },
  methods:{

  },
  computed:{
    createRepaymentSchedule: function(amount, rate, period, loanTerm, nRepayments){
      var totalAmout = amount * rate * period;
      var numRepayments =  totalAmout / loanTerm;
      for(i=0; 1< nRepayments; i++){
        repaymetsObj("","31 oct 2019", "27 sept 2019", "", "","")
      }

      var obj = {
        "amount": amount,
        "date": period,
      }
      return obj;
    },
  repaymetsObj: function(days, date, paidDate, principalDue, loanBalance,interest) {
  this.rDays = days;
  this.rDate = date;
  this.rPaiddate = paidDate;
  this.rPrincipalDue = principalDue;
  this.rLoanBalance  = loanBalance;
  this.rInterest = interest;
}

  }
};
</script>
<style scoped>
    pa-sm-2 {
      text-align: center
    }
</style>