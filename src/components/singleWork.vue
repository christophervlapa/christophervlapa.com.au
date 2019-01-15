<template>
  <v-container>
      <v-layout row wrap>
        <v-flex xs12 v-for="workData in workData()">
          <h1>{{workData.seriesTitle}}</h1>
          <div class="series-date">{{workData.date | dateFormat}}</div>
          <div class="series-notes" v-html="workData.seriesNotes"></div>
          <br>
          <h2 v-if="workData.artistsStatement">Artist Statement</h2>
          <div class="artists-statement-content" v-html="workData.artistsStatement"></div>
          <v-card flat class="index-work-card mb-3" v-for="work in workData.works">
            <img :src="getImageUrl(workData.workRoot,work.image)" class="single-work-card-image" v-if="work.image"/>
            <div class="single-work-video-container" v-if="work.video" v-html="work.video"></div>
            <v-card-title>
              <div class="details">
            <h3 v-if="work.workTitle !== null">
              <!-- <span class="bold">Title:</span> --><span class="title-content" v-html="work.workTitle"></span>
            </h3>
            <div v-if="work.medium !== null">
              <!-- <span class="bold">Medium:</span>  -->{{work.medium}}
            </div>
            <div v-if="work.size">
              <!-- <span class="bold">Size:</span>  -->{{work.size}}
            </div>
            <div v-if="work.date">
              <!-- <span class="bold">Date:</span>  -->{{workData.date | dateFormat}}
            </div>
            <div v-if="work.details !== null">
              <!-- <span class="bold">Details:</span>  --><span v-html="work.details"></span>
            </div>
          </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  import moment from 'moment'
  // import axios from 'axios'
  import works from '@/assets/works.json'

  export default {
    name: 'work',
    data: function() {
      return{
        worksData: works
      }
    },
    created: function () {
      console.log('data: ',this.worksData)
      console.log('data: ',this.$route.params.workRoot)
    },
    filters: {
      dateFormat: (date) => {
        return moment(date).format('MMMM YYYY');
      }
    },
    methods: {
      getImageUrl(imagePath,imageName){
        console.log(`../assets/works/` + imagePath + '/' + imageName);
        return require('../assets/works/' + imagePath + '/' + imageName);

      },
      workData(){ 
        console.log('single works call');
          return this.worksData.filter(work => {
            return work.workRoot.indexOf(this.$route.params.workRoot) > -1
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.more {
  word-break: break-all;
}

.index-work-card {
  border: 1px solid #F5F5F5;
}
.home-card-image {
  width: 100%;
}

.italic {
  font-style: italic;
}
</style>

