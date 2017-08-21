<template>
  <v-container>
    <v-layout v-for="post in posts" :key="post.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="'static/slider/'+ post.imageName"
                  height="150px"
                >
                </v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title>
                  <div>
                    <h5 class="white--text">{{ post.title }}</h5>
                    <div>{{ post.date }}</div>
                  </div>
                </v-card-title>
                <v-card-action>
                  <v-btn flat :to="'/posts/'+post.id">
                    <v-icon left light class="white--text">arrow_forward</v-icon>
                    View Post
                  </v-btn>
                </v-card-action>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    computed :{
      posts() {
        return this.$store.getters.getPosts;
      }
    }
  }
</script>
