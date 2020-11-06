<template>
  <main class="landing-container-main">
      <ul>
      <article class="landing-card">
      </article>
      <article class="landing-card">
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
    display: inline-block;
    max-width: 300px;
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