<template>
  <div class="home">
    <header></header>
    <figure class="img-container"> 
      <img class="logo" alt="birdhouse-logo" src="../assets/birdhouse.png">
    </figure>
    <Welcome msg="Welcome to Birdhouse"/>
    <LandingHeader/>
    <LandingMain/>
    <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import '@/styles/base.sass'
import landingHeader from '@/components/LandingComponentHeader.vue'
import landingMain from '@/components/LandingContentMain.vue'

export default {
  name: 'Home',
  components: { LandingHeader: landingHeader, LandingMain: landingMain, }
}
</script>

<style lang="scss">
@import '../styles/base.sass';

header {
  grid-column: 1/8;
  background-color: $primary-footer-colour;
}

.home {
  background-color: $primary-background-colour;
  display: grid;
  grid-auto-rows: 150px;
  grid-template-columns: repeat(7, 3fr);
}

.img-container {
  grid-row: 2/4;
  grid-column: 2/7;
  padding: 0px;
  margin: 0px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.logo {
  max-width: 100%;
}
footer {
  grid-row: 12/13;
  grid-column: 1/8;
  background-color: $primary-footer-colour;
}

@media only screen and (min-width: 700px) {
  .logo {
    max-height: 300px;
  }
}

@media only screen and (min-width: 1200px) {
  footer {
    grid-row: 14/16;
  }
}

@media only screen and (min-width: 1700px) {
 footer {
   grid-row: 16/18;
 }

 .img-container {
    grid-row: 2/5;
   
  }
}

</style>
