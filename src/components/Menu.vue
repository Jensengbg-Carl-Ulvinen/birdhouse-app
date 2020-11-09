<template>
<transition name="fade">
  <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu">menu</i>
  <i class="material-icons clear" v-else onclick="show = !show" key="clear">clear</i>
</transition>

<transition name="fade">
  <ul v-if="show">
    <div class="menu-item">
      <router-link to="/">Home</router-link>
    </div>
    <div class="menu-item">
      <router-link to="/about">About</router-link>
    </div>
    <div class="menu-item">
      <router-link to="/our-birds">Ourbirds</router-link>
    </div>
    <div class="menu-item">
      <router-link to="/food-drinks">Food and Drinks</router-link>
    </div>
  </ul>
</transition>

</template>


<script type="text/javascript">
export default {
  name: "Menu"
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import '@/styles/base.sass';
.menu,
.clear {
  cursor: pointer;
  font-size: 3em;
  padding-left: 5%;
  transition: all .3s ease;
  width: 1.5em;
}

.menu {
  color: $primary-title-colour;
  &:hover,
  &:active {
    color: $btn-colour-hover;
  }
}

.clear {
  color: $btn-colour-hover;
  &:hover,
  &:active {
    color: $primary-title-colour;
  }
}
</style>
