<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card horizontal>
          <v-card-row img="/static/doc-images/cards/hotel.jpg" height="130px"></v-card-row>
          <v-card-column>
            <v-card-row height="75px" class="brown white--text">
              <v-card-text>
                <strong>Reservation at Lazy Bear</strong>
                <div>Feb 23, 7:00pm</div>
              </v-card-text>
            </v-card-row>
            <v-card-row actions class="brown darken-2">
              <v-btn flat class="white--text">
                <v-icon left light>directions</v-icon>Directions
              </v-btn>
            </v-card-row>
          </v-card-column>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
