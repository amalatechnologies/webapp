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
                      label="Interest Rate"
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
                      label="Interest Method"
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
                      label="Loan Terms"
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
                      label="Units"
                      dense
                      persistent-hint
                      return-object
                    ></v-select>
                  </v-col>

                  <v-col class="d-flex" cols="12" sm="6">
                    <v-text-field
                      v-model="value_num_of_repayments"
                      type="number"
                      label="Number of Repayments"
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
                      label="Repayment Frequency"
                      dense
                      min="0"
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
                      label="Interest Moratorium"
                      dense
                      min="0"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6" v-if="advanced">
                    <v-text-field
                      v-model="value_principal_moratorium"
                      type="number"
                      label="Principal Moratorium"
                      dense
                      min="0"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6" v-if="advanced">
                    <v-text-field
                      v-model="value_interest_free_period"
                      type="number"
                      label="Interest Free Period"
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
                    >{{ advanced ? "Show Less" : "Advanced"}}</v-btn>
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
                  <div v-if="isLoggedIn">
                    <v-btn
                      small
                      v-if="!datarequired"
                      class="error lighten-1 white--text"
                      style="text-transform: capitalize"
                      @click.stop="dialog = true"
                    >Save</v-btn>&nbsp;
                    <v-dialog v-model="dialog" max-width="290">
                      <v-form ref="forms" v-model="valid" lazy-validation>
                        <v-card>
                          <v-card-title class="headline error white--text">Do you agree ?</v-card-title>

                          <v-card-text class="mt-1 pt-1">{{ $t('label.message.saveschedule')}}</v-card-text>

                          <v-text-field
                            class="ma-2"
                            filled
                            :counter="10"
                            required
                            v-model="name"
                            label="Repayment Schedule Name"
                            placeholder="e.g Bank ABC "
                          ></v-text-field>

                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                              style="text-transform: capitalize"
                              color="green darken-1"
                              outlined
                              small
                              @click="dialog = false"
                            >No</v-btn>

                            <v-btn
                              class="warning darken-1 white--text"
                              style="text-transform: capitalize"
                              small
                              outlined
                              :rules="nameRules"
                              :disabled="!valid"
                              @click="saveRepaymentSchedule"
                            >Save</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-form>
                    </v-dialog>
                  </div>

                  <v-btn
                    class="info lighten-1"
                    small
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

<script lang="js" src="~/static/js/calculator.js">
</script>
<style scoped>
pa-sm-2 {
  text-align: center;
}
</style>