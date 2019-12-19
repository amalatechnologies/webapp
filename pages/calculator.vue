<template>
  <v-app class="app">
    <v-container fluid>
      <v-layout justify-center align-center>
        <v-flex>
          <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          >
          <v-card class="mx-auto" >
            <v-container fluid  v-if="datarequired">
              <p
                class="subtitle-2 text-center font-weight-black"
              >{{ $t('label.heading.loanrepaymentschedulecalculator') }}</p>
              <v-row align="center">
                <v-col class="d-flex" cols="12" sm="6">
                  <v-text-field
                    v-model="value_loan_amount"
                    type="number"
                    label="Loan Amount"
                    single-line
                    dense
                    required
                    :counter="4"
                    :rules="numberRules"
                  ></v-text-field>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-text-field
                    v-model="value_interest_rate"
                    type="number"
                    single-line
                    label="Interest Rate"
                    dense
                     required
                    :rules="numberRules"
                  ></v-text-field>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select 
                  v-model="method"
                  :items="iterest_methods" 
                  item-text="name"
                  item-value="value"
                  :rules="[v => !!v || 'Item is required']" 
                  label="Interest Method"
                  required
                  persistent-hint
                  return-object
                  single-line
                   dense></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-text-field
                    v-model="value_loan_term"
                    type="number"
                    single-line
                    label="Loan Terms"
                    dense
                    required
                    :rules="numberRules"
                  ></v-text-field>
                  <v-spacer></v-spacer>
                  <v-select 
                  :items="loan_terms" 
                  v-model="value_loan_term_unit" 
                  :rules="[(v) => !!v || 'Item is required']" 
                  item-value="value"
                  item-text="name"
                  label="Units" 
                  dense
                  persistent-hint
                  return-object
                  single-line
                  ></v-select>
                </v-col>

                <v-col class="d-flex" cols="12" sm="6">
                  <v-text-field
                    v-model="value_num_of_repayments"
                    type="number"
                    single-line
                    label="Number of Repayments"
                    dense
                     required
                    :rules="numberRules"
                  ></v-text-field>
                </v-col>

                <v-col class="d-flex" cols="12" sm="6">
                  <v-text-field
                    v-model="value_repayments_freq"
                    type="number"
                    single-line
                    label="Repayment Frequency"
                    dense
                  ></v-text-field>
                  <v-spacer></v-spacer>
                  <v-select
                   v-model="value_frequency" 
                   :items="loan_terms" 
                   item-text="name"
                   item-value="value"
                   label="Units" 
                  :rules="[v => !!v || 'Item is required']" 
                   dense
                   required
                  persistent-hint
                  return-object
                  single-line
                  ></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select
                    :items="amortizations"
                    v-model="value_amortization"
                    label="Amortization"
                    dense
                  ></v-select>
                </v-col>

                <v-col class="d-flex" cols="12" sm="6">
                  <v-text-field
                    v-model="value_interest_moratorium"
                    type="number"
                    single-line
                    label="Interest Moratorium"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-text-field
                    v-model="value_principal_moratorium"
                    type="number"
                    single-line
                    label="Principal Moratorium"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-text-field
                    v-model="value_interest_free_period"
                    type="number"
                    single-line
                    label="Interest Free Period"
                    dense
                  ></v-text-field>
                </v-col>
                
              </v-row>
            </v-container>
            <v-container v-else>
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
              :headers="headers"
              :items="repayments"
              :items-per-page="5"
              :search="search"
              class="elevation-0"
              multi-sort
              :loading="loading"
              loading-text="Loading... Please wait"
            ></v-data-table>
            </v-container>

            <v-row>
              <v-col class="d-flex" cols="12" sm="6"></v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-btn
                  v-if="datarequired"
                    color="success"
                    small
                    outlined
                    depressed
                    :disabled="!valid"
                    @click="calculate"
                  >{{ $t('label.button.btncalculate') }}</v-btn>&nbsp;
                  <v-btn
                  v-if="datarequired"
                    color="secondary"
                    outlined
                    small
                    depressed
                    @click="clear"
                  >{{ $t('label.button.btnclear') }}</v-btn>&nbsp;
                  <v-btn
                  v-if="!datarequired"
                    color="error"
                    small
                    depressed
                    @click="cancel"
                  >{{ $t('label.button.btnback') }}</v-btn>&nbsp;
                </v-col>
            </v-row>
          </v-card>
          </v-form>
        
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
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
      valid: true,
      title: "Home",
      datarequired: true,
      loan_terms: [{name:"Days",value:1}, {name:"Weeks",value:7}, {name:"Months",value:30}, {name:"Year", value:366}],
      iterest_methods: [{name:"Flat", value:1}, {name:"Reducing Balance", value:2}, {name:"Straight Method",value:3}],
      amortizations: ["Equal Installment", "Equal principal"],
      headers: [
        {
          text: "Day",
          align: "left",
          sortable: false,
          value: "days"
        },
        { text: "Paid Date", value: "paiddate" },
        { text: "Principal", value: "loanamount" },
        { text: "Principal due", value: "principaldue" },
        { text: "Interest", value: "interest", filterable: false },
        { text: "Loan Balance", value: "loanbalance" },
        { text: "Total", value: "total", filterable: false }
      ],
      repayments: [],
      method:{},
      value_frequency:{},

      value_loan_amount: '',
      value_interest_rate:'',
      value_loan_term:'',
      value_interest_free_period:'',
      value_num_of_repayments:'',
      value_repayments_freq:'',
      value_amortization:'',
      value_interest_moratorium:'',
      value_principal_moratorium:'',
      value_interest_free_period:'',
      value_loan_term_unit:{  },
      value_repayment_freq_unit:{},

      loading: false,
      search: "",
      valueRules: [
        v => !!v || 'Value is required',
        v => (v && v.length <= 1) || 'Value must be less than 2 characters',
      ],
      numberRules:[
        v => !!v || 'Invalid value',
      ],
    };
  },
  methods: {
 
    calculate() {
      if (this.$refs.form.validate()) {
      this.datarequired = false;
      this.loading = true;
      this.$nextTick(() => {
        const items = [];
        if(this.method.value==1){
          var totalInterest = (this.value_loan_amount * this.value_interest_rate * this.value_loan_term)/100;
        var balance = parseInt(this.value_loan_amount) + parseInt(totalInterest);
       
      
        for(var i=0;i < this.value_num_of_repayments;i++) {
          const item = new Object();
          
          item.days = 1 + i;
          item.paiddate = this.getNextWeekDay((i+1) * this.value_repayments_freq * this.value_frequency.value).toLocaleString().split(' ')[0];;
          item.principaldue = this.value_loan_amount/this.value_num_of_repayments;
          item.loanamount = this.value_loan_amount;
          item.interest = totalInterest/this.value_num_of_repayments;
          item.total = item.principaldue + item.interest;
          balance = balance - (item.principaldue + item.interest);
          item.loanbalance = balance;
          items.push(item);
        }

        }else if(this.method.value==2){
          console.log(this.method.value);
        }
        
        
        this.repayments = items;
      });
      this.loading = false;
      }
    },
    clear () {
        this.$refs.form.reset()
      },
      cancel () {
        this.datarequired = true
      },
     getNextWeekDay (i){
    var firstDay = new Date(Date.now());
    var nextWeek = new Date(firstDay.getTime() + parseInt(i) * 1 * 24 * 60 * 60 * 1000);

    return nextWeek;
}
  },
  computed: {  }
};
</script>
<style scoped>
pa-sm-2 {
  text-align: center;
}
</style>