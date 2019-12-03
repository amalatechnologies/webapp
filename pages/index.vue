<template>
  <v-app dark class="app">
    <v-container fluid>
      <v-layout>
        <v-flex class="text-center">
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10"> 
          <v-select :items="locales" v-model="locale" label="Select Languages" dense></v-select></v-col>

            <v-col cols="1"></v-col>
          </v-row>

          <v-container fluid class="pa-0">
            <v-row align="center">
              <v-col cols="12" sm="6">
                <div class="text-center">
                  <p class="text-center">
                    Hello there.
                    <br />
                    Welcome to {{ $t('appName') }}
                  </p>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="text-center">
                  <div class="my-2">
                    <v-btn color="primary" dark to="/calculator" router exact>{{ $t('goToCalculator') }}</v-btn>
                  </div>
                  <div class="my-2">
                    <v-btn color="primary" to="/sigIn" dark>{{ $t('signIn') }}</v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
  layout: "home",
  data: () => ({
    locale: "",
    appname: "KopaSmart",
    locales: ["English", "Kiswahili"],
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  })
};
</script>
<style lang="scss" scoped>
.my-2,
p {
  padding: none;
  color: #006da3ff;
  text-align: center;
}
</style>