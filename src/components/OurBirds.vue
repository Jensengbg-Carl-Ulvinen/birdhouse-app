<template>
  <div class="wrapper">
    <header class="header">
    <h1>Meet our birds</h1>
    <img id="menu" src="../assets/bars.png" alt="hamburger menu">
    </header>
    <ul class="card-wrapper">
      <li>
        <img id="macaw" src="../assets/macaw.jpg" alt="picture of a macaw bird">
        Macaws are long-tailed, often colorful parrots. 
        <br>
        They are popular in aviculture or as companion parrots.
          <audio class="audio" controls>
                <source src="../assets/macaw-sound.wav" type="audio/wav">
            </audio>
       </li>
      <li>
        <img id="macaw" src="../assets/lorikeet.png" alt="picture of a lorikeet bird">
        The rainbow lorikeet is a species of parrot found in Australia.
        Its habitat is rainforest, coastal bush and woodland areas.
      </li>
      <li>
        <img id="macaw" src="../assets/toucan.png" alt="picture of a toucan bird">
        Toucans are members of the bird family Ramphastidae.
        For the most part the toucans are forest species.
      </li>
    </ul>
    <footer>
      <p>copyright Birdhouse 2020</p>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => {
    return{
    }
  }
}
</script>

<style lang="scss">
@import '../styles/base.sass';

body{
  padding: 0;
  margin: 0;
  background-color: $primary-background-colour;
}
.header{
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
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    margin-top: 4rem;
    margin-right: 2rem;
}
li{
  color: $btn-font-colour;
  padding: 3rem;
  padding-bottom: 10rem;
  border-radius: 3%;
  background: $primary-card-colour;
  width: 145px;
  height: 120px;
}
#macaw{
    margin-top: -30%;
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
audio{
  margin-top: -30%;
  width: 100%;
  height: 100%;
}
</style>