<template>
  <div class="home">
    <home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import home from '@/components/home.vue'

export default {
  name: 'homeView',
  components: {
    'home': home
  }
}
</script>
