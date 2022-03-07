<template>
  <v-container>
      <v-layout row wrap>
        <v-flex xs12 v-for="(workData, i) in workData()" v-bind:key="i">
          <h1>{{workData.seriesTitle}}</h1>
          <div class="series-date">{{workData.date | dateFormat}}</div>
          <div class="series-notes" v-html="workData.seriesNotes"></div>
          <br>
          <h2 v-if="workData.artistsStatement">Artist Statement</h2>
          <div class="artists-statement-content" v-html="workData.artistsStatement"></div>
          <v-card flat class="index-work-card mb-3" v-for="(work, i) in workData.works" v-bind:key="i">
            <div class="single-work-image-container" v-if="work.image !== null">
              <img :src="getAssetUrl(workData.workRoot,work.image)" class="single-work-card-image"/>
            </div>
            <div class="single-work-video-container" v-if="work.video !== null">
              <video controls loop autoplay class="video__item">
                  <source :src="getAssetUrl(workData.workRoot,work.video)" type="video/mp4">
                  Your browser does not support the video tag.
              </video>            
            </div>

            <v-card-title>
              <div class="details">
                <h3 v-if="work.workTitle !== null">
                  <span class="title-content" v-html="work.workTitle"></span>
                </h3>
                <div v-if="work.medium !== null">
                  {{work.medium}}
                </div>
                <div v-if="work.size">
                  {{work.size}}
                </div>
                <div v-if="work.date">
                  {{workData.date | dateFormat}}
                </div>
                <div v-if="work.details !== null">
                  <span v-html="work.details"></span>
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
  import works from '../../public/works/works.json'

  export default {
    name: 'work',
    data: function() {
      return{
        worksData: works
      }
    },
    created: function () {},
    filters: {
      dateFormat: (date) => {
        return moment(date).format('MMMM YYYY');
      }
    },
    methods: {
      getAssetUrl(imagePath,imageName){
        return '/works/' + imagePath + '/' + imageName;

      },
      workData(){ 
          return this.worksData.filter(work => {
            return work.workRoot.indexOf(this.$route.params.workRoot) > -1
          })
      }
    }
  }
</script>

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

.single-work-video-container {
  padding-bottom: 0;
}

video {
  max-width: 100%;
}
</style>

