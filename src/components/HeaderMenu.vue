<template>
<div id="nav">
  <img id="nav-logo" src="@/assets/header-logo.png">
  <input type="checkbox" id="active">
  <label for="active" class="menu-btn">
    <i class="material-icons menu" key="menu">menu</i></label>
  <div class="wrapper">
    <div class="menu-wrapper">
      <Menu />
    </div>
  </div>
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

// Header Naven

#nav {
    height: 100px;
    width: 100%;
    background: $primary-header-background;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    #nav-logo {
        height: 60px;
        margin-left: 1rem;
        padding-top: 1rem;
    }
    .menu {
        cursor: pointer;
        font-size: 3em;
        padding-left: 5%;
        transition: all 0.3s ease;
        width: 1.5em;
        color: $primary-title-colour;
    }
    input[type="checkbox"] {
        display: none;
    }
}

.menu-btn {
    position: absolute;
    z-index: 2;
    right: 20px;
    top: 20px;
    height: 50px;
    border: transparent;
    font-size: 20px;
    cursor: pointer;
    background: transparent!important;
    transition: all 0.3s ease-in-out;
    #active:checked ~ .menu-btn {
        background: $primary-background-colour;
    }
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    top: 0;
    left: 85%;
    height: 350px;
    width: 200px;
    margin-bottom: 2rem;
    background: transparent!important;
    clip-path: circle(25px at calc(100% - 45px) 45px);
    transition: all 0.3s ease-in-out;
    .menu-wrapper {
        background: $primary-header-background;
    }

}

#active:checked ~ .wrapper {
    clip-path: circle(75%);
}

@media screen and (max-width:736px) {

    .wrapper {
        height: 300px;
        width: 200px;
        background: transparent!important;
        clip-path: circle(25px at calc(100% - 45px) 45px);
        transition: all 0.3s ease-in-out;
    }

}
</style>
