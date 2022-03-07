<template>
  <v-container>
      <v-layout row wrap>
        <h1>Selected Works</h1>
        <v-flex xs12 v-for="work in this.worksData" v-bind:key="work.id">
          <v-card flat class="index-work-card mb-3" :to="'works/'+work.workRoot">
            <div class="image-container" v-if="work.indexWorkType !== 'video'">
              <img :src="getAssetUrl(work.workRoot,work.indexWork)" class="home-card-image"/>
            </div>
            <div class="video-container" v-if="work.indexWorkType === 'video'">
              <video controls loop autoplay class="video__item">
                  <source :src="getAssetUrl(work.workRoot,work.indexWork)" type="video/mp4">
                  Your browser does not support the video tag.
              </video>            
            </div>
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
  import works from '../../public/works/works.json'

  export default {
    name: 'home',
    data: function() {
      return{
        worksData: []
      }
    },
    created: function () {
      // check for SFW check
      // parseInt used as we only want a 1 or nothing
      // So stuff like )); alert('xss') passes by
      // console.log("parse ",parseInt(this.$route.query.sfw))
      this.worksData = (parseInt(this.$route.query.nsfw) === 1) ? works : this.safeForWorksCheck();
    },
    filters: {
      dateFormat: (date) => {
        return moment(date).format('MMMM YYYY');
      }
    },
    methods: {
      getAssetUrl(imagePath,imageName){
        return '/works/' + imagePath + '/' + imageName;
      },
      safeForWorksCheck() {
        // Method to return only SFW artworks
        return works.filter(work => {
          if(work.sfw){
            return work;
          }
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

video {
  max-width: 100%;
}

</style>

