import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
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
      ]
    },
    actions: {},

    mutations: {},

    getters: {}
  })
}
