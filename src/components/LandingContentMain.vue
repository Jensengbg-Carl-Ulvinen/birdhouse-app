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

@media only screen and (max-width: 1850px) {
    .park-showcase {
        display: none;
    }

    .instant-acces-menu {
        min-width: 100%;
    }
}

</style>