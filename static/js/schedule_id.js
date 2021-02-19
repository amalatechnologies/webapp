import ListItem from "~/components/items/ListItemContent";
import DatatableComponent from "~/components/items/datatable-component";
export default {
  components: {
    ListItem,
    DatatableComponent
  },

  data() {
    return {
      data: true,
      table: false,
      repayments: [],
      loading: false,
      search: "",
      valid: true,
      title: "Home",
      dense: true,
      dark: false,
      advanced: false,
      method: {},

      ttInterest: "",
      ttBalance: "",
      amount: null,

      datarequired: true,
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

    };
  },
  created: function () {

  },
  methods: {
    calculateRepaymentSchedule() {
      this.data = false;
      this.table = true;

      let data = this.schedule;
      this.datarequired = false;
      this.amount = data.amount;
      this.loading = true;

      this.$nextTick(() => {
        const items = [];
        const METHODE_VALUE = this.getMethodById(data.interest_method);
        const interestRate = data.interest_rate / 100;
        var totalInterest = (parseInt(data.amount) * interestRate * parseInt(data.loan_term));
        this.ttInterest = totalInterest;
        this.ttBalance =
          parseInt(data.amount) + parseInt(totalInterest);
        var balance =
          parseInt(data.amount) + parseInt(totalInterest);
        for (var i = 0; i < data.number_of_repayments; i++) {
          const item = new Object();

          item.days = 1 + i;
          item.paiddate = this.getNextWeekDay(
            (i + 1) *
            parseInt(this.getTermsValue(data.repaid_every_unit)) * parseInt(data.repaid_every)
          )
            .toLocaleString()
            .split(" ")[0];
          item.principaldue =
            data.amount / data.number_of_repayments;
          item.loanamount = data.amount;
          item.interest = totalInterest / data.number_of_repayments;
          item.total = item.principaldue + item.interest;
          balance = balance - (item.principaldue + item.interest);
          item.loanbalance = balance;
          items.push(item);

        }
        this.repayments = items;


      });

      this.loading = false;

    },
    getNextWeekDay(i) {
      var firstDay = new Date(Date.now());
      var nextWeek = new Date(
        firstDay.getTime() + parseInt(i) * 1 * 24 * 60 * 60 * 1000
      );

      return nextWeek;
    },
    getTermsValue(parameter) {
      switch (parameter) {
        case "D":
          return 1;
        case "W":
          return 7;
        case "M":
          return 30;
        case "Y":
          return 366;


      }
    },
    getMethodById(method) {
      switch (method) {
        case "FLAT":
          return 1;
        case "STRAIGHT":
          return 2;
        case "REDUCING_BALANCE":
          return 3;
      }
    }

  },
  computed: {
    schedule() {
      var data = this.$store.getters.getterschedule(parseInt(this.$nuxt._route.params.sid));
      return data[0];
    }
  },

};
