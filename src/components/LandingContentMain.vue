<template>
  <main class="landing-container-main">
      <ul>
      <article class="landing-card">
          <h2> PRICING </h2>
          <p class="price-listing"> Adult:  15£ <br> Kids: 10£ </p> 
          <p class="landing-card-bread"> Family Package up to 4:<br> 50£
               entrance cost.<br> Includes 1 free meal<br> for all members 
            </p>
      </article>
      <article class="landing-card">
          <h2> OPEN HOURS </h2>
          <p class="landing-card-bread"> Mon - Wen: <br> 10 am - 4 pm </p>
          <p class="landing-card-bread">
          Weekend: <br> 10 am - 8 am </p>
      </article>
      </ul>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../styles/base.sass';

.landing-container-main {
    display: grid;
    grid-template-columns: 20px 1fr 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-row: 6/10;
    grid-column: 1/8;
    background-color: $secondary-background-colour;
    overflow: auto;
    white-space: nowrap;
    -webkit-box-shadow: inset 0px 17px 15px -3px rgba(0,0,0,0.68);
    -moz-box-shadow: inset 0px 17px 15px -3px rgba(0,0,0,0.68);
    box-shadow: inset 0px 17px 15px -3px rgba(0,0,0,0.68);
}

h2 {
    color: $primary-title-colour;
    font-size: 36px;
    font-weight: 900;
}

p {
    color: $primary-bread-colour;
    font-size: 24px;
    font-weight: 900;
}

.price-listing {
    display: flex;
    width: 90%;
    margin: 0px;
    text-align: start;
}

.landing-card-bread {
    display: flex;
    width: 90%;
    text-align: start;
}

ul {
    height: 100%;
   grid-column: 1/-1;
   align-items: center;
   padding: 0px;
   justify-content: space-around;
   display: flex;
    width: 200%;
}

.landing-card {
    border-radius: 5px;
    background-color: $primary-card-colour;
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    align-items: center;
    transition: 0.5s;
}

.landing-card:hover, .landing-card:active {
    transform: scale(1.1);
}

@media only screen and (min-width: 750px) {
    ul {
        width: 100%;
    }
}

@media only screen and (min-width: 900px) {
    .landing-container-main {
    grid-column: 2/7;
    }
    ul {
        width: 200%;
    }
}

@media only screen and (min-width: 1000px) {
    ul {
        width: 100%;
    }
}

@media only screen and (min-width: 1200px) {
    .landing-container-main {
    grid-row: 7/12;
    }

    .landing-card {
    width: 80%;
    height: 70%;
    max-width: 400px;
    }
}

@media only screen and (min-width: 1700px) {
    .landing-container-main {
    grid-row: 9/15;
    }

    .landing-card {
    
}

}


</style>