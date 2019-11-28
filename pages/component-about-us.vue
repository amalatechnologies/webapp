<template>
<v-container>
    <p>{{title}}</p>
    <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      
      <v-card>
        <v-card-title class="headline">
           Kopasmart Application
        </v-card-title>
        <v-card-text>
          <p>{{lorem}}</p>
          <p>
            For more information on {{app_name}}, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://singoafrica.slack.com/messages"
              target="_blank"
              title="chat"
            >
              slack community
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/finspointa/kopasmart-webapp/issues"
              target="_blank"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with {{app_name}} and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; {{app_name}}</small></em>
          </div>
          <hr class="my-3">
          <a
            href="http://singo.africa/"
            target="_blank"
          >
            Kopasmart Community
          </a>
          <br>
          <a
            href="https://github.com/finspointa"
            target="_blank"
          >
            Developer Community
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/component-contact-us"
          >
            Contact us
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
    
</template>
<script>
export default {
    data(){
        return{
            title: 'About Us',
            app_name: 'Kopasmart Application',
            lorem: 'Kopasmart Application is a Lorem ipsum dolor sit amet, consectetur adipiscing elit \t'+
             'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \t' + 
             ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \t' +
             ' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
             ' reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'+ 
             ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

        };
    }
}
</script>