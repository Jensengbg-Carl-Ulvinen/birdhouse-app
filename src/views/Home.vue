<template>
  <div class="home">
    <header></header>
    <figure class="img-container"> 
      <img class="logo" alt="birdhouse-logo" src="../assets/birdhouse.png">
    </figure>
    <Welcome msg="Welcome to Birdhouse"/>
    <Landing/>
    <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import '@/styles/base.sass'
import landing from '@/components/Landing.vue'

export default {
  name: 'Home',
  components: { Landing: landing, }
}
</script>

<style lang="scss">
@import '../styles/base.sass';

header {
  border: 1px solid yellow;
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
  grid-row: 2/5;
  grid-column: 2/7;
  padding: 0px;
  margin: 0px;
}

.logo {
  max-width: 100%;
}
footer {
  border: 1px solid brown;
  grid-row: 14/14;
  grid-column: 1/8;
  background-color: $primary-footer-colour;
}
</style>
