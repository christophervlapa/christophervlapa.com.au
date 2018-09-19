<template>
  <div class="single-work">
    <single-work></single-work>
  </div>
</template>

<script>
// @ is an alias to /src
import singleWork from '@/components/singleWork.vue'

export default {
  name: 'singleWorkView',
  components: {
    'singleWork': singleWork
  }
}
</script>
