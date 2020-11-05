<template>
  <div class="box-left">
    <img id="birdhouse-logo" src="../assets/birdhouse.png">
    <img id="menu" src="../assets/bars.png">
  </div>
  <div class="about">

    <h1>About</h1>
    <div class="about-box">
      <h2>
      Birdhouse is a ZOO with all kind of fun activities. Do you like bird watching? We got you covered!
      come watch our exotic parrots. Feeling hungry? Well, we got you covered there to.
      <br>
      <br>
      Our foundattion helps keeping near extinct parrots from vanishing.
      We do our best to try to educate people about the importance of having these beautiful exotic animals alive.
      </h2>
    </div>

  </div>
  <div class="box-right"><img alt="parrot-1" src="../assets/parrot-1.png"></div>

</template>


<script>
import '@/styles/base.sass'

export default {
  name: 'About',
  components: {}
}
</script>

<style lang="scss">
@import '../styles/base.sass';

body {
  background-color:  $primary-background-colour
}
h1{
  color: $primary-title-colour;
  font-size: 64px;
}
.box-left{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  #birdhouse-logo{
    width: 200px;
    height: 232px;
  }
  #menu{
    color: #75330D;
    width:75px;
    height:50px;
  }
}
.box-right{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 200px;
}
.about{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
.about-box{
  width: 639px;
  height: 546px;
  background: $primary-footer-colour;
  color: $primary-bread-colour;
  border-radius: 39px;
  padding: 2rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 9px 9px 4px 0px #000000 25%;
;
}}
</style>
