<template>
<HeaderMenu/>
<div class="food">
  <h1>Food and Drinks</h1>
  <div class="container">
  <img src="../assets/cola.jpg" alt="Coca Cola">
  <h2>DRINKS</h2>
  </div>
  <div class="container">
  <img src="../assets/hamburger.jpg" alt="Hamburger">
<h2>FOOD</h2>
  </div>
  <div class="container">
<img src="../assets/icecream.jpg" alt="Ice cream">
<h2>ICE CREAM</h2>
  </div>
</div>
<Footer/>

</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'FoodDrinks',
    components: {
      HeaderMenu, Footer
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/base.sass';


.food {
  display: grid;
  grid-gap: 1.25rem;
  grid-template-rows: repeat(3,1fr);
  justify-content: space-around;

}

h1 {
  grid-column: 2;
  display: flex;
  align-self: center;
  justify-self: center;
  text-shadow: 0.125rem 0.125rem 0.25rem #000000;
  font-family: $font-title;
  color: $btn-font-colour;

}




.container {
  background-color: $primary-card-colour;
  width: 20rem;
  height: 30rem;
  grid-row: 2;
  display: grid;
  justify-content: center;
  box-shadow: 0.4375rem 0.4375rem;
  border-radius: 1.5625rem;



}

.container:hover {
  opacity: 1;
  transform: scale(1.2);


  }

img {
  width: 12.5rem;
  height: 12.5rem;
  margin-top: 1.25rem;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem;
}

h2 {
  text-shadow: 0.125rem 0.125rem 0.25rem #000000;
  color: $primary-title-colour;
  font-family: $font-title;
}



@media only screen and (max-width: 800px) {
  h1 {
    align-self: center;
  }


  .food {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }


  .container {
    align-self: center;
    width: 20rem;
    height: 20rem;

  }
}


</style>
