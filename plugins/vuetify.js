// src/plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
Vue.use(Vuetify);
export default ctx => {
    const vuetify = new Vuetify({
      customVariables: ['~/assets/variables.scss'],
      theme: {
        dark: false,
        themes: {
          dark: {
            primary: '#021E34',
            accent: '#FF4081',
            secondary: '#ffe18d',
            success: '#4CAF50',
            info: '#021E34',
            warning: '#FB8C00',
            error: '#FF5252'
          },
          light: {
            primary: '#2196F3',
            accent: '#e91e63',
            secondary: '#30b1dc',
            success: '#4CAF50',
            info: '#2196F3',
            warning: '#FB8C00',
            error: '#FF5252'
          }
        }
      }
    });
    ctx.app.vuetify = vuetify;
    ctx.$vuetify =vuetify.framework;
};
