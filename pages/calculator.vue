<template>
  <v-app class="app">
     
        <v-app-bar dense fixed app color="primary" v-if="t"  >
           <img  
                width="120px" 
                   
                src="/kopalogo.ico"
                alt="KopaSmart"
               
              />
        </v-app-bar>
    <v-container fluid>
    
      
      <v-layout justify-center align-center>
        <v-flex>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card class="mx-auto">
              <v-container fluid v-if="datarequired">

              
                <p
                  class="subtitle-2 text-center font-weight-black"
                >{{ $t('label.heading.loanrepaymentschedulecalculator') }}</p>
                <v-row align="center">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      v-model="value_loan_amount"
                      type="number"
                      v-bind:label="$t('label.heading.Loan Amount')"
                      dense
                      min="0"
                      required
                      :counter="4"
                      :rules="numberRules"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      v-model="value_interest_rate"
                      type="number"
                      v-bind:label="$t('label.heading.Interest Rate')"
                      dense
                      required
                      min="0"
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
                      v-bind:label="$t('label.heading.Interest Method')"
                      required
                      persistent-hint
                      return-object
                      dense
                    ></v-select>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      v-model="value_loan_term"
                      type="number"
                      v-bind:label="$t('label.heading.Loan Terms')"
                      dense
                      required
                      min="0"
                      :rules="numberRules"
                    ></v-text-field>
                    <v-spacer></v-spacer>
                    <v-select
                      :items="loan_terms"
                      v-model="value_loan_term_unit"
                      :rules="[(v) => !!v || 'Item is required']"
                      item-value="value"
                      item-text="name"
                      v-bind:label="$t('label.heading.Units')"
                      dense
                      persistent-hint
                      return-object
                    ></v-select>
                  </v-col>

                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      v-model="value_num_of_repayments"
                      type="number"
                      v-bind:label="$t('label.heading.Number of Repayments')"
                      dense
                      required
                      min="0"
                      :rules="numberRules"
                    ></v-text-field>
                  </v-col>

                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      v-model="value_repayments_freq"
                      type="number"
                      v-bind:label="$t('label.heading.Repayment Frequency')"
                      dense
                      min="0"
                    ></v-text-field>
                    <v-spacer></v-spacer>
                    <v-select
                      v-model="value_frequency"
                      :items="loan_terms"
                      item-text="name"
                      item-value="value"
                      v-bind:label="$t('label.heading.Units')"
                      :rules="[v => !!v || 'Item is required']"
                      dense
                      required
                      persistent-hint
                      return-object
                    ></v-select>
                  </v-col>

                  <v-col class="d-flex" cols="12" sm="6" v-if="advanced">
                    <v-select
                      :items="amortizations"
                      v-model="value_amortization"
                      v-bind:label="$t('label.heading.Amortization')"
                      dense
                    ></v-select>
                  </v-col>

                  <v-col class="d-flex" cols="12" sm="6" v-if="advanced">
                    <v-text-field
                      v-model="value_interest_moratorium"
                      type="number"
                      v-bind:label="$t('label.heading.Interest Moratorium')"
                      dense
                      min="0"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6" v-if="advanced">
                    <v-text-field
                      v-model="value_principal_moratorium"
                      type="number"
                      v-bind:label="$t('label.heading.Principal Moratorium')"
                      dense
                      min="0"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6" v-if="advanced">
                    <v-text-field
                      v-model="value_interest_free_period"
                      type="number"
                      v-bind:label="$t('label.heading.Interest Free Period')"
                      dense
                      min="0"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6"></v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      small
                      color="primary"
                      @click="displayAdvanceOptions"
                    >{{ advanced ?  $t('label.text.SHOWLESS')  :  $t('label.text.ADVANCED') }}</v-btn>
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
                    :label="$t('label.heading.Search')"
                    hide-details
                  ></v-text-field>
                </v-card-title>
                <datatable-component
                  v-bind:headers="headers"
                  v-bind:repayments="repayments"
                  :items-per-page="5"
                  v-bind:search="search"
                  v-bind:amount="value_loan_amount"
                  v-bind:ttInterest="ttInterest"
                  v-bind:ttBalance="ttBalance"
                  class="elevation-0"
                  v-bind:dense="dense"
                  v-bind:dark="dark"
                  multi-sort
                  v-bind:loading="loading"
                  loading-text="Loading... Please wait"
                ></datatable-component>
              </v-container>

              <v-row>
                <v-col class="d-flex" cols="12" sm="6"></v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  &nbsp; &nbsp;
                  <v-btn
                    v-if="datarequired"
                    color="success"
                    medium
                    outlined
                    depressed ref="calculate"
                    :disabled="!valid"
                    @click="calculate"
                  >{{ $t('label.button.btncalculate') }}</v-btn>&nbsp;
                  <v-btn
                    v-if="datarequired"
                    color="secondary"
                    outlined
                
                    depressed
                    @click="clear"
                  >{{ $t('label.button.btnclear') }}</v-btn>&nbsp;
                  <v-btn
                    v-if="!datarequired"
                    color="error"
                  
                    depressed
                    @click="cancel"
                  >{{ $t('label.button.btnback') }}</v-btn>&nbsp;
                  <div v-if="isLoggedIn">
                    <v-btn medium
                      v-if="!datarequired"
                      class="error lighten-1 white--text"
                      style="text-transform: capitalize"
                      @click.stop="dialog = true"
                    >{{ $t('label.button.btnsave') }}</v-btn>&nbsp;
                    <v-dialog v-model="dialog" max-width="290">
                      <v-form ref="forms" v-model="valid" lazy-validation>
                        <v-card>
                          <v-card-title class="headline error white--text">{{ $t('label.message.Do you Agree')}}?</v-card-title>

                          <v-card-text class="mt-1 pt-1">{{ $t('label.message.saveschedule')}}</v-card-text>

                          <v-text-field
                            class="ma-2"
                            filled
                            :counter="10"
                            required
                            v-model="name"
                            :label="$t('label.heading.Repayment Schedule Name')"
                            placeholder="e.g Bank ABC "
                          ></v-text-field>

                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                              style="text-transform: capitalize"
                              color="green darken-1"
                              outlined
                              @click="dialog = false"
                            >
                            {{$t('label.button.btnNo')}}
                            
                            </v-btn>

                            <v-btn
                              class="warning darken-1 white--text"
                              style="text-transform: capitalize"
                          
                              outlined
                              :rules="nameRules"
                              :disabled="!valid"
                              @click="saveRepaymentSchedule"
                            >   {{$t('label.button.btnsave')}}</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-form>
                    </v-dialog>
                  </div>

                  <v-btn
                    class="info lighten-1"
                    depressed
                    to="/"
                  >{{ $t('label.button.btnhome') }}</v-btn>
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
import DatatableComponent from "~/components/items/datatable-component";

export default {
  layout: localStorage.getItem("qAccessToken") == null ? "fault" : "Home",
  components: {
    DatatableComponent
  },
  data() {
    return {
      valid: true,
      title: "Home",  
      dense: true,
      t:localStorage.getItem("qAccessToken") != null ? false : true,
      dark: false,
      dialog: false,
      advanced: false,
      name: null,
      interest_methods: ["FLAT", "STRAIGHT", "REDUCING_BALANCE"],
      amortization_methods: ["EQUAL_INSTALLMENT", "EQUAL_PRINCIPAL"],

      datarequired: true,
      ttInterest: "",
      ttBalance: "",
      loan_terms: [{
        name: "Days",
        value: 1
      },
      {
        name: "Weeks",
        value: 7
      },
      {
        name: "Months",
        value: 30
      },
      {
        name: "Year",
        value: 366
      }
      ],
      iterest_methods: [{
        name: "Flat",
        value: 1
      },
      {
        name: "Reducing Balance",
        value: 2
      },
      {
        name: "Straight Method",
        value: 3
      }
      ],
      amortizations: ["Equal Installment", "Equal principal"],
      headers: [{
        text: this.$t('label.heading.Day'),
        align: "left",
        sortable: false,
        value: "days"
      },
      {
        text: this.$t('label.heading.Paid Date'),
        value: "paiddate"
      },
      {
        text: this.$t('label.heading.Principal'),
        value: "loanamount"
      },
      {
        text: this.$t('label.heading.Principal due'),
        value: "principaldue"
      },
      {
        text: this.$t('label.heading.Interest'),
        value: "interest",
        filterable: false
      },
      {
        text: this.$t('label.heading.Loan Balance'),
        value: "loanbalance"
      },
      {
        text: this.$t('label.heading.Total'),
        value: "total",
        filterable: false
      }
      ],
      repayments: [],
      method: {},
      value_frequency: {},
      value_loan_amount: "",
      value_interest_rate: "",
      value_loan_term: "",
      value_interest_free_period: "",
      value_num_of_repayments: "",
      value_repayments_freq: "",
      value_amortization: "",
      value_interest_moratorium: "",
      value_principal_moratorium: "",
      value_loan_term_unit: {},
      value_repayment_freq_unit: {},

      loading: false,
      search: "",
      valueRules: [
        v => !!v || "Value is required",
        v => (v && v.length <= 1) || "Value must be less than 2 characters"
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      numberRules: [v => !!v || "Invalid value"]
    };
  },
  head() {
    return {
      title: 'Calculator'
    };
  },
  methods: {
    calculate() {
      if (this.$refs.form.validate()) {
        this.datarequired = false;
        this.loading = true;

        this.$nextTick(() => {
          const items = [];
          const interestRate = this.value_interest_rate / 100;
          if (this.method.value == 1) {
            var totalInterest = (this.value_loan_amount * interestRate * this.value_loan_term);
            this.ttInterest = totalInterest;
            this.ttBalance =
              parseInt(this.value_loan_amount) + parseInt(totalInterest);
            var balance =
              parseInt(this.value_loan_amount) + parseInt(totalInterest);
            for (var i = 0; i < this.value_num_of_repayments; i++) {
              const item = new Object();

              item.days = 1 + i;
              item.paiddate = this.getNextWeekDay(
                (i + 1) *
                this.value_repayments_freq *
                this.value_frequency.value
              )
                .toLocaleString()
                .split(" ")[0];
              item.principaldue =
                this.value_loan_amount / this.value_num_of_repayments;
              item.loanamount = this.value_loan_amount;
              item.interest = totalInterest / this.value_num_of_repayments;
              item.total = item.principaldue + item.interest;
              balance = balance - (item.principaldue + item.interest);
              item.loanbalance = balance;
              items.push(item);

            }
          } else if (this.method.value == 2) {

          }
          this.repayments = items;


        });

        this.loading = false;
      }
    },
    displayAdvanceOptions() {
      this.advanced = !this.advanced;

    },
    clear() {
      this.$refs.form.reset();
    },
    cancel() {
      this.datarequired = true;
    },
    getNextWeekDay(i) {
      var firstDay = new Date(Date.now());
      var nextWeek = new Date(
        firstDay.getTime() + parseInt(i) * 1 * 24 * 60 * 60 * 1000
      );

      return nextWeek;
    },

    saveRepaymentSchedule() {
      let data = {
        name: this.name || new Date(Date.now()),
        amount: this.value_loan_amount,
        interest_rate: this.value_interest_rate,
        interest_method: this.interest_methods[this.method.value - 1],
        loan_term: this.value_loan_term,
        loan_term_unit: this.getSelectedTerm(this.value_loan_term_unit),
        repaid_every: this.value_repayments_freq,
        repaid_every_unit: this.getSelectedTerm(this.value_frequency),
        number_of_repayments: this.value_num_of_repayments,
        amortization: "EQUAL_INSTALLMENT",
        interest_moratorium: parseInt(this.value_interest_moratorium) || 0,
        principal_moratorium: parseInt(this.value_principal_moratorium) || 0,
        interest_free_period: parseInt(this.value_interest_free_period) || 0
      };
      if (this.$refs.forms.validate()) {

        this.$store.dispatch('saveSchedule', data);
      }
    },
    getSelectedTerm(i) {
      switch (i.value) {
        case 1:
          return "D";
        case 7:
          return "W";
        case 30:
          return "M";
        case 366:
          return "Y";
      }
    },
    isEmpty: function(obj){
      return Object.keys(obj).length === 0;
    }

  },
  mounted() {
    console.log('Logging router: ');
   
    if(!this.isEmpty(this.$route.query)){
      var query = this.$route.query;
      console.log(this.$route.query);
      this.value_loan_amount = query.a;
      this.value_interest_rate = query.i;
      this.value_num_of_repayments = query.nr;
      this.method = this.iterest_methods.filter(function(x) {return x.name == query.m})[0];
      this.value_loan_term = query.lt.charAt(0);
      this.value_repayments_freq = query.rf.charAt(0);
      this.value_loan_term_unit = this.loan_terms.filter(function(x){ return x.name.startsWith(query.lt.charAt(1))})[0];
      this.value_frequency = this.loan_terms.filter(function(x){ return x.name.startsWith(query.rf.charAt(1))})[0];
      
        this.datarequired = false;
        this.loading = true;

        this.$nextTick(() => {
          const items = [];
          const interestRate = this.value_interest_rate / 100;
          if (this.method.value == 1) {
            var totalInterest = (this.value_loan_amount * interestRate * this.value_loan_term);
            this.ttInterest = totalInterest;
            this.ttBalance =
              parseInt(this.value_loan_amount) + parseInt(totalInterest);
            var balance =
              parseInt(this.value_loan_amount) + parseInt(totalInterest);
            for (var i = 0; i < this.value_num_of_repayments; i++) {
              const item = new Object();

              item.days = 1 + i;
              item.paiddate = this.getNextWeekDay(
                (i + 1) *
                this.value_repayments_freq *
                this.value_frequency.value
              )
                .toLocaleString()
                .split(" ")[0];
              item.principaldue =
                this.value_loan_amount / this.value_num_of_repayments;
              item.loanamount = this.value_loan_amount;
              item.interest = totalInterest / this.value_num_of_repayments;
              item.total = item.principaldue + item.interest;
              balance = balance - (item.principaldue + item.interest);
              item.loanbalance = balance;
              items.push(item);

            }
          } else if (this.method.value == 2) {

          }
          this.repayments = items;


        });

        this.loading = false;
      }
      
     
    
    
  },
  computed: {
    isLoggedIn() {
      return localStorage.getItem("qAccessToken") != null;
    }
  }
};

</script>
<style scoped>
pa-sm-2 {
  text-align: center;
}
</style>