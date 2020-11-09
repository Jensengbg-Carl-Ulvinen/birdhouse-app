<template>
<div class="overlay-menu">
  <div class="menu-item"><router-link to="/">Home</router-link></div>
  <div class="menu-item"><router-link to="/about">About</router-link></div>
  <div class="menu-item"><router-link to="/our-birds">Ourbirds</router-link></div>
</div>
</template>

<script>
export default {
  name: "Menu"

}
</script>

<style lang="scss" scoped>
@import '../styles/base.sass';
</style>
