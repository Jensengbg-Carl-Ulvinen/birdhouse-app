<template>
    <HeaderMenu />
  <div class="ourbirds">
        <h1>Our birds</h1>
    <ul class="card-our-birds">
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
        Its habitat is rainforest and coastal bush
          <audio class="audio" controls>
                <source src="../assets/macaw-sound.wav" type="audio/wav">
            </audio>
      </li>
      <li>
        <img id="macaw" src="../assets/toucan.png" alt="picture of a toucan bird">
        Toucans are members of the bird family Ramphastidae.
        The toucans are a forest species.
          <audio class="audio" controls>
                <source src="../assets/macaw-sound.wav" type="audio/wav">
            </audio>
      </li>
    </ul>
  </div>
   <Footer />
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'
import Footer from '@/components/Footer.vue'
export default {
    components: {
    HeaderMenu, Footer
  },
  data: () => {
    return{
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/base.sass';

body, html{
  padding: 0;
  margin: 0;
  background-color: $primary-background-colour;
      min-height: 100vh;

}
.ourbirds {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr;
  gap: 0px 0px;
  justify-content: space-around;
        min-height: 100vh;
}
.logo-bird{
    max-width: 25%;
    height: auto;
}
h1{
  color: $btn-font-colour;
  grid-column: 3 / 3;
  grid-row: 1 / 1;
  text-shadow: 6px 6px 5px rgba(0, 0, 0, 0.25);
}
ul{
  display: flex;
  justify-content:space-evenly;
    grid-column: 3 / 3;
    grid-row: 2 / 2;
    list-style: none;
    margin-top: 1rem;
    margin-right: 2rem;
}
li{
  color: $btn-font-colour;
  padding: 3rem;
  padding-bottom: 11rem;
  margin-right: 3rem;
  border-radius: 3%;
  background: $primary-card-colour;
  width: 145px;
  height: 120px;
  filter: drop-shadow(9px 9px 4px rgba(0, 0, 0, 0.25));
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
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .ourbirds{
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . header-name"
    ". . . ."
    ". logo-bird";
    }
  .header{
    text-align: left;
    margin-bottom: 20rem;
    font-size: 10px;
  }
.card-our-birds{
  display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
}
@media only screen and (min-width: 1200px){

}
@media screen and (min-width: 1400px){
 .header{
  margin-bottom: 20rem;
}
ul{
  display: flex;
  justify-content:space-evenly;
    grid-column: 3 / 3;
    list-style: none;
    margin-top: -8rem;
    margin-right: 2rem;
}
}
</style>
