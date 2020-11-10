<template>
  <section>
      <nav>
        <h1 class="menu-item"><router-link to="/">Home</router-link></h1>
        <h1 class="menu-item"><router-link to="/about">About</router-link></h1>
        <h1 class="menu-item"><router-link to="/our-birds">Ourbirds</router-link></h1>
        <h1 class="menu-item"><router-link to="/food-drinks">Food and drinks</router-link></h1>
      </nav>
    </section>
</template>


<script>
export default {
  name: "Menu"
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import '@/styles/base.sass';


button {
  background: transparent!important;
  border: transparent !important;
}

h1{
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 20px!important;
  cursor: pointer;
  color: $primary-title-colour;
}

a{
  color: $primary-title-colour;
}

</style>
