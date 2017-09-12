import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export function createStore() {
  return new Vuex.Store({
    state: {
      posts: [
        {
          id: 'P1',
          title: 'First Post',
          date: '2017-06-22',
          content: 'Post Content',
          imageName: 'slider1.png'
        },
        {
          id: 'P2',
          title: 'Second Post',
          date: '2017-06-23',
          content: 'second Post Content',
          imageName: 'slider2.jpg'
        }
      ],
      user: null
    },
    actions: {
      /*userSignUp({commit}, payload) {
        firebase.auth().createUserWithEmailAndPassword(payload.emailId, payload.password)
          .then(
            user => {
              const newUser = {
                id: user.uid
              }
              commit('setUser',newUser)  // Mutation Call
              this.$router.push('/signin')
              //console.log('User Successfully Created')
            }
          )
          .catch(
            error => {
              console.log(error)
            }
          )
      }*/
      userSignUp({commit}, payload) {
        axios.post('http://localhost/vuetify/api/signup.php')
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            console.log(e)
          })
      }
    },

    mutations: {
      setUser(state, payload) {
        state.user = payload;
      }
    },

    getters: {
      getPosts(state) {
        return state.posts;
      },
      newUserDetail(state) {
        return state.user;
      }
    }
  })
}
