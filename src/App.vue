<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>HOME</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        value="true"
        no-action
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>WORKS</v-list-tile-title>
        </v-list-tile>

        <v-list-tile
          value="true"
          v-for="(work, i) in worksData"
          :key="i"
          @click=""
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="work.seriesTitle"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list-group>

      <v-list-tile
      @click="">
        <v-list-tile-title>BIOGRAPHY / CV</v-list-tile-title>
      </v-list-tile>

      <v-list-tile
      @click="">
        <v-list-tile-title>CONTACT</v-list-tile-title>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>    
      <img src="@/assets/signature.svg" class="headerSignature" alt="christopher v lapa signature" viewBox="0 0 100 100" preserveAspectRatio>
      <v-spacer></v-spacer>
      
    </v-toolbar>
    <v-content>
      <home :worksData="worksData"></home>
    </v-content>
  
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import home from './components/home'
import axios from 'axios'
import works from './assets/works.json'

export default {
  name: 'App',
  components: {
    home
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      worksData: works,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: './assets/signature.svg'
    }
  }
}
</script>
<style type="text/css">
  .headerSignature {
    height: 80%;
  }
</style>
