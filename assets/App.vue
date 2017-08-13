<template>
  <v-app dark>
    <v-navigation-drawer temporary v-model="drawer">
      <v-list class="pt-0">
        <v-divider></v-divider>
        <v-list-item>
          <v-list-tile v-for="list in listItem" :key="list.item">
            <v-list-tile-action>
              <v-icon>
                {{ list.icon }}
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              {{ list.item }}
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Sujal Patel</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
          <v-btn v-for="toollist in listItem" :key="toollist.item">
            <v-icon>
              {{ toollist.icon }}
            </v-icon>
            {{ toollist.item }}
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'

  export default {
    mixins: [Meta],
    data() {
      return {
        drawer: false,
        listItem: [
          {item: 'View Post', icon: 'format_list_bulleted'},
          {item: 'New Post', icon: 'note_add'},
          {item: 'Profile', icon: 'person'},
          {item: 'Sign Up', icon: 'face'},
          {item: 'Sign In', icon: 'lock_open'}
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
