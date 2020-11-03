<template>
  <div class="home">
    <img alt="birdhouse-logo" src="../assets/birdhouse.png">
    <Welcome msg="Welcome to Birdhouse"/>
  </div>
</template>

<script>
// @ is an alias to /src
import '@/styles/base.sass'

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
@import '../styles/base.sass';

body {
  background-color: $primary-background-colour;
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-template-rows: repeat(5, 2fr);
  grid-gap: 0px;
  margin: 0px;

}

.home {
  display: grid;
  grid-row: 2/3;
  grid-column: 2/3;
}
</style>
