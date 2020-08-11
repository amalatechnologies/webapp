import moment from 'moment'
import Vue from 'vue';

Vue.filter('DateFormat', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
});
