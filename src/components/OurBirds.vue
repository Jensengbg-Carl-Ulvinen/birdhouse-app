<template>
  <div class="wrapper">
    <h1>Meet our birds</h1>
    <img id="menu" src="../assets/bars.png">
    <div class="card-wrapper">
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../styles/base.sass';
body{
  padding: 0;
  margin: 0;
  background-color: $primary-background-colour;
}
.wrapper{
  background-color: $primary-footer-colour;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
h1{
  color: $btn-font-colour;
  grid-column: 3 / 3;
}
#menu{
  grid-column: 5 / 5;
  margin-left: 10rem;
  margin-top: 1rem;
}
</style>