<template>
<v-container>
    <h1>{{ $t('label.heading.aboutus')}}</h1>
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
           {{ $t('appName')}} {{ $t('application')}}
        </v-card-title>
        <v-card-text>
          <p>{{ $t('label.message.aboutusmessage') }}</p>
          <p>
            For more information on {{app_name}}, check out the <a
              href="https://vuetifyjs.com"
              target="_blank">
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://singoafrica.slack.com/messages"
              target="_blank"
              title="chat">
            {{ $t('label.contacts.slack')}}
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
          <p>{{ $t('label.message.thanksmessage') }}</p>
          <div class="text-xs-right">
            <em><small>&mdash; {{ $t('appName')}} {{ $t('application')}}</small></em>
          </div>
          <hr class="my-3">
          <a
            href="http://singo.africa/"
            target="_blank"
          >
            {{ $t('appName')}} {{$t('label.contacts.community')}}
          </a>
          <br>
          <a
            href="https://github.com/finspointa"
            target="_blank"
          >
           {{$t('label.contacts.developer')}} {{$t('label.contacts.community')}}
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/contacts"
          >
            {{ $t('label.button.btncontactus')}}
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
            
        };
    }
}
</script>