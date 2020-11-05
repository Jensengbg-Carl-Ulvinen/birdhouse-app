<template>
<div class="landing-container">
  <header>
      <section class="instant-acces-menu">
          <div class="menu-item"> </div>
          <div class="menu-item"> </div>
          <div class="menu-item"> </div>
          <div class="menu-item"> </div>
      </section>
      <section class="park-showcase">
      </section>
  </header>
  <main>
      <article class="landing-card">
      </article>
      <article class="landing-card">
      </article>
  </main>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../styles/base.sass';

.landing-container {
    display: flex;
    flex-direction: column;
    grid-row: 6/17;
    grid-column: 2/7;
}

header {
    border: 1px solid black;
    grid-row: 5/8;
    grid-column: 2/7;
    display: flex;
    flex-direction: row;
    background-color: $primary-card-colour;
    height: 30%;
}

.instant-acces-menu {
    border: 1px solid blue;
    min-width: 50%;
    display: grid;
    grid-template-rows: repeat(2, 3fr);
    grid-template-columns: repeat(2, 3fr);
    
}

.menu-item {
    background-color: $secondary-card-colour;
    width: 60%;
    place-self: center;
    height: 80%;
    max-width: 200px;
    min-height: 150px;
    border-radius: 5px;
    
}

.park-showcase {
    border: 1px solid white;
    width: 50%;
    display: grid;
    grid-template-rows: repeat(2, 3fr);
    grid-template-columns: repeat(2, 3fr);
}

main {
    border: 1px solid red;
    grid-row: 8/13;
    grid-column: 2/7;
    background-color: $hamburger-colour;
    display: flex;
    height: 70%;
}

.landing-card {
    border: 1px solid black;
}

@media only screen and (max-width: 1850px) {
    .park-showcase {
        display: none;
    }

    .instant-acces-menu {
        min-width: 100%;
    }
}

</style>