<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card class="blue darken-4 white--text">
          <v-card-row height="200px">
            <v-card-title>
              <h6 class="white--text">Post Title</h6>
            </v-card-title>
          </v-card-row>
          <v-card-row>
              <p class="white--text" style="padding-left: 15px">2017-06-22</p>
          </v-card-row>
          <c-card-row>
            <p class="contentPadding">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda cupiditate dolor id nisi, provident repellat sunt. Aspernatur blanditiis consectetur dolorum eum fugiat fugit, ipsam itaque magnam nulla quam quas repudiandae rerum veritatis. Consectetur dignissimos ex maxime, neque nisi optio quaerat qui recusandae repellat sed, soluta ullam voluptas! Quia, voluptatem.</p>
          </c-card-row>
          <v-card-row actions>
            <v-btn flat class="white--text">Read More</v-btn>
          </v-card-row>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
  .contentPadding{
    padding: 15px;
  }
</style>
