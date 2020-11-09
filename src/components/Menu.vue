<template>
<img id="burger-nav" src="@/assets/burger-menu-desktop.png" v-on:click="onMenu()">
<div class="overlay-menu" v-on:click="offMenu()">
  <div class="menu-item">
    <router-link to="/">Home</router-link>
  </div>
  <div class="menu-item">
    <router-link to="/about">About</router-link>
  </div>
  <div class="menu-item">
    <router-link to="/our-birds">Ourbirds</router-link>
  </div>
</div>
</template>


<script type="text/javascript">
export default {
  name: "Menu",
  methods: {
    onMenu: function() {
      document.getElementById("overlay-menu").style.display = "block";
    },
    offMenu: function() {
      document.getElementById("overlay-menu").style.display = "none";
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../styles/base.sass';

#burger-nav {
    padding-top: 1rem;
    margin-right: 1rem;
    height: 30px;
    cursor: pointer;
    display: none;
}

// .overlay-menu {
//     display: none;
// }
</style>
