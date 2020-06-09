<template>
  <v-app class="app">
    <v-container fluid>
      <!-- weather widget start -->
      <ul>
        <li>
          <div>
            <a
              class="weatherwidget-io"
              href="https://forecast7.com/en/n6d1635d75/dodoma/"
              data-label_1="DODOMA"
              data-label_2="WEATHER"
              data-font="Roboto"
              data-theme="original"
            >DODOMA WEATHER</a>
            <script>
  !(function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = "https://weatherwidget.io/js/widget.min.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  })(document, "script", "weatherwidget-io-js");
            </script>
          </div>
        </li>
        <li>
          <div>
            <br />
          </div>
        </li>
        <li>
          <div>
            <a
              class="weatherwidget-io"
              href="https://forecast7.com/en/n6d7939d21/dar-es-salaam/"
              data-label_1="DAR ES SALAAM"
              data-label_2="WEATHER"
              data-font="Roboto"
              data-theme="original"
            >DAR ES SALAAM WEATHER</a>
            <script>
  !(function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = "https://weatherwidget.io/js/widget.min.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  })(document, "script", "weatherwidget-io-js");
            </script>
          </div>
        </li>
        <li>
          <br />
        </li>
        <li>
          <a
            class="weatherwidget-io"
            href="https://forecast7.com/en/n10d6535d64/songea/"
            data-label_1="SONGEA"
            data-label_2="WEATHER"
            data-font="Roboto"
            data-theme="original"
          >SONGEA WEATHER</a>
          <script>
  !(function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = "https://weatherwidget.io/js/widget.min.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  })(document, "script", "weatherwidget-io-js");
          </script>
        </li>
      </ul>
      <!-- weather widget end -->
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
      time: 0,
      forecast: [
        {
          day: "Tuesday",
          icon: "mdi-white-balance-sunny",
          temp: "24\xB0/12\xB0"
        },
        {
          day: "Wednesday",
          icon: "mdi-white-balance-sunny",
          temp: "22\xB0/14\xB0"
        },
        { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" }
      ]
    };
  },
  head() {
    return {
      title: "Home Page"
    };
  },
  created: function() {
    let vm = this;
    vm.$store.dispatch("getProfile");
  }
};
</script>
