import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Components from 'components/_index'
import Vuelidate from 'vuelidate'
//import DateFormat from 'filters/dateFormate'

import {createStore} from 'store/index'
import {createRouter} from 'router/index'
import {sync} from 'vuex-router-sync'
// import * as firebase from 'firebase'
import axios from 'axios'


Vue.use(Vuetify)
Vue.use(Vuelidate)
Vue.use(axios)
// Vue.filter('shortDate', DateFormat)

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp(ssrContext) {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    ssrContext,
    render: h => h(App),
    data() {
      onlyOnce: true
    },
    /*created() {
      // if(!firebase.initializeApp()){
      let firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDuy-zg-uCdgFXmzFkbwuKmjwqnKic8SKo",
        authDomain: "vuetify-sp2209.firebaseapp.com",
        databaseURL: "https://vuetify-sp2209.firebaseio.com",
        projectId: "vuetify-sp2209",
        storageBucket: "vuetify-sp2209.appspot.com",
        messagingSenderId: "686921254522"
      })
      this.onlyOnce = false;
      // }
    }*/
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return {app, router, store}
}
