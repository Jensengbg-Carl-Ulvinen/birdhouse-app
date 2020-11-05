<template>
  <div class="home">
    <img alt="birdhouse-logo" src="../assets/birdhouse.png">
    <Welcome msg="Welcome to Birdhouse"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import '@/styles/base.sass'

export default {
  name: 'Home',
  components: {
    Welcome
  }
}
</script>

<style lang="scss">
@import '../styles/base.sass';

body {
  background-color:  $primary-background-colour
}
</style>
