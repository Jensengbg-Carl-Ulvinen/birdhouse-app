<template>
  <div class="home">
    <img alt="birdhouse-logo" id="birdhouse-logo" src="../assets/birdhouse.png">
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
  background-color:  $primary-background-colour;

}

.home{
  padding-top: 6rem;
  height: 70vh;

  #birdhouse-logo{
    height: 300px;
  }
}

@media screen and (max-width:736px) {

  .home{
    padding-top: 6rem;
    height: 100vh;

    #birdhouse-logo{
      height: 300px;
    }
  }


}
</style>
