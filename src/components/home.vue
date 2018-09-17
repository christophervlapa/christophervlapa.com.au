<template>
  <v-container fluid>
      <v-layout row wrap>
        <h1>WORKS</h1>
        <v-flex xs12 v-for="work in worksData">
          <v-card>
            <v-img :src="work.indexWork"></v-img>
            <v-card-title>
              <div>
              <h3 class="headline mb-0">{{work.seriesTitle}}</h3>
              <div class="date">{{work.date | dateFormat}}</div>
              <div class="medium">{{work.medium}}</div>
              <div class="more" v-if="work.seriesNotes" v-html="work.seriesNotes"></div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'home',
    props: ['worksData'],
    created: function () {
      console.log('DATA ',this.worksData);
    },
    filters: {
      dateFormat: (date) => {
        return moment(date).format('MMMM Do YYYY');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.more {
  word-break: break-all;
}
</style>

