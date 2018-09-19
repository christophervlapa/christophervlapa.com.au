<template>
  <div class="home">
    <home></home>
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
