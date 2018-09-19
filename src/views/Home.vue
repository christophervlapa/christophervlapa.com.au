<template>
  <div class="home">
    <home worksData="worksData"/>
  </div>
</template>

<script>
// @ is an alias to /src
import home from '@/components/home.vue'
import works from '@/assets/sfw-works.json'

export default {
  name: 'homeView',
  props: {worksData:works},
  components: {
    'home': home
  }
}
</script>
