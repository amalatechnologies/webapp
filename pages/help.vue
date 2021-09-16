<template>
  <v-app class="app">
    <v-container fluid>
      <v-card flat outlined>
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="(help, i) in helps"
            :key="i"
            :color="help.color"
            icon="mdi-lifebuoy"
            small
            fill-dot
            :right="true"
          >
            <v-card>
              <v-card-text>
                <p class="display-1 text--primary">{{ help.title}}</p>
                <p>{{help.subtitle}}</p>
                <div class="text--primary">
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                  adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                  vel illum qui dolorem eum fugiat quo voluptas nulla pariatur ?"
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-container>
  </v-app>
</template>
<script lang="js" src="~/static/js/help.js">

</script>