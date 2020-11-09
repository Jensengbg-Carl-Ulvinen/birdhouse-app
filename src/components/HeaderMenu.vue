<template>
<div id="nav">
  <img id="nav-logo" src="@/assets/header-logo.png">
  <Menu />
  <img id="burger-nav" src="@/assets/burger-menu-desktop.png">
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

#nav {
    height: 100px;
    width: 100%;
    // padding: 1rem;
    background: $primary-header-background;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#burger-nav {
    padding-top: 1rem;
    margin-right: 1rem;
    height: 30px;
    cursor: pointer;

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
