import moment from 'moment'
import Vue from 'vue';

Vue.filter('DateFormat', function(value) {
  if (value) {
    var from = new  moment(String(value)).fromNow();
    return from;

  }
});
