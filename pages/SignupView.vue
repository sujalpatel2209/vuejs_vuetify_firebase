<template>
  <v-container>
    <v-layout row>
      <v-flex lg6 md10 offset-lg3 offset-md1>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="createNewUser">
                <v-layout row>
                  <v-flex xs12 sm12>
                    <v-text-field
                      name="emailId"
                      label="Email ID"
                      id="emailId"
                      v-model="userDetail.emailId"
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
                      v-model="userDetail.password"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 sm12>
                    <v-text-field
                      name="comPassword"
                      label="Confirm Password"
                      id="comPassword"
                      v-model="userDetail.comPassword"
                      required
                      :rules="[comparePassword]"
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-btn class="primary" type="submit">
                      Sign Up
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
        userDetail: {
          emailId: '',
          password: '',
          comPassword: ''
        }
      }
    },
    computed: {
      comparePassword(){
        return this.userDetail.password !== this.userDetail.comPassword ? "Password are not same." : ""
      }
    },
    methods: {
      createNewUser() {
        alert('Create New User');
      }
    }
  }
</script>
