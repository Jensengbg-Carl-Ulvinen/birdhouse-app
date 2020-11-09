<template>
<div id="nav">
  <img id="nav-logo" src="@/assets/header-logo.png">
  <!-- <button @click="showMenu"><i class="material-icons menu" key="menu">menu</i></button> -->
  <Menu />
</div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: "HeaderMenu",
  components: {
    Menu
  }
}
</script>

<style lang="scss">
@import '@/styles/base.sass';
button{
  background: transparent!important;
  border: transparent !important;
}

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

#nav {
    height: 100px;
    width: 100%;
    background: $primary-header-background;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#nav-logo {
    height: 60px;
    margin-left: 1rem;
    padding-top: 1rem;
}
a {
    font-weight: bold;
    color: #2c3e50;
}
</style>
