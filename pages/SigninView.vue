<template>
  <v-container>
    <v-layout row>
      <v-flex lg6 md6 offset-lg3 offset-md3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="authentication">
                <v-layout row>
                  <v-flex xs12 sm12>
                    <v-text-field
                            name="emailId"
                            label="Email ID"
                            id="emailId"
                            v-model="authDetail.emailId"
                            required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 sm12>
                    <v-text-field
                            name="password"
                            label="Password"
                            id="password"
                            v-model="authDetail.password"
                            required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-btn class="primary" type="submit">
                     Sign In
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
    export default {
        data() {
            return {
                authDetail: {
                    emailId: '',
                    password: ''
                }
            }
        },
        methods: {
            authentication() {
                alert('Login');
            }
        }
    }
</script>
