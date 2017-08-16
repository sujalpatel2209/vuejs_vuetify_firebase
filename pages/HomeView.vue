<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/static/slider/slider1.png'
          },
          {
            src: '/static/slider/slider2.jpg'
          }
        ]
      }
    }
  }
</script>
