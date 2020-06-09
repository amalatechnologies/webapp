import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import DatatableComponent from "~/components/items/datatable-component";

export default {
  layout: localStorage.getItem("qAccessToken") != null ? "default" : "home",
  components: {
    Logo,
    VuetifyLogo,
    DatatableComponent
  },
  data() {
    return {
      valid: true,
      title: "Home",
      dense: false,
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
        text: "Day",
        align: "left",
        sortable: false,
        value: "days"
      },
      {
        text: "Paid Date",
        value: "paiddate"
      },
      {
        text: "Principal",
        value: "loanamount"
      },
      {
        text: "Principal due",
        value: "principaldue"
      },
      {
        text: "Interest",
        value: "interest",
        filterable: false
      },

      {
        text: "Interrest",
        value: "interrest",
        filterable: false
      },
      {
        text: "Loan Balance",
        value: "loanbalance"
      },
      {
        text: "Total",
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

  },
  computed: {
    isLoggedIn() {
      return localStorage.getItem("qAccessToken") != null;
    }
  }
};
