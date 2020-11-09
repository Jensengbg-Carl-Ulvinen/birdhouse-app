<template>
<div id="nav">
  <img id="nav-logo" src="@/assets/header-logo.png">
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
