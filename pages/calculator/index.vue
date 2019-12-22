<template>
  <v-app class="app">
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
                      dense
                    ></v-select>
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
                 
                  <v-col class="d-flex" cols="12" sm="6" v-if="advanced">
                    <v-select
                      :items="amortizations"
                      v-model="value_amortization"
                      label="Amortization"
                      dense
                    ></v-select>
                  </v-col>

                  <v-col class="d-flex" cols="12" sm="6" v-if="advanced">
                    <v-text-field
                      v-model="value_interest_moratorium"
                      type="number"
                      single-line
                      label="Interest Moratorium"
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6" v-if="advanced">
                    <v-text-field
                      v-model="value_principal_moratorium"
                      type="number"
                      single-line
                      label="Principal Moratorium"
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6" v-if="advanced">
                    <v-text-field
                      v-model="value_interest_free_period"
                      type="number"
                      single-line
                      label="Interest Free Period"
                      dense
                    ></v-text-field>
                  </v-col>
                   <v-col class="d-flex" cols="12" sm="6"></v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-spacer></v-spacer>
                    <v-btn text small color="primary" @click="displayAdvanceOptions">
                      {{ advanced ? "Show Less" : "Advanced"}}</v-btn>
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
                  :dense="dense"
                  :dark="dark"
                  multi-sort
                  :loading="loading"
                  loading-text="Loading... Please wait"
                >
                  <template v-slot:top>
                    <v-row no-gutters>
                      <v-col cols="6" sm="6">
                        <v-switch v-model="dense" label="Dense" class="pa-1"></v-switch>
                      </v-col>
                      <v-col cols="6" sm="6">
                        <v-switch v-model="dark" label="Dark" class="pa-1"></v-switch>
                      </v-col>
                    </v-row>
                  </template>
                  <template v-slot:body.append v-if="$vuetify.breakpoint.smAndUp">
                    <tr class="table_footer">
                      <td>Total#</td>
                      <td></td>
                      <td>
                        <p class="font-weight-black">{{value_loan_amount}}</p>
                      </td>
                      <td></td>
                      <td>
                        <p class="font-weight-black">{{ttInterest}}</p>
                      </td>
                      <td></td>
                      <td>
                        <p class="font-weight-black">{{ttBalance}}</p>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-container>

              <v-row>
                <v-col class="d-flex" cols="12" sm="6"></v-col>
                <v-col class="d-flex" cols="12" sm="6">
                  &nbsp; &nbsp;
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
                  <v-btn color="secondary" small depressed to="/">{{ $t('label.button.btnhome') }}</v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script lang="js" src="~/static/js/calculator.js">
</script>
<style scoped>
pa-sm-2 {
  text-align: center;
}
</style>