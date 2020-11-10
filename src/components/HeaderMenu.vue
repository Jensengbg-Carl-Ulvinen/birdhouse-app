<template>
<div id="nav">
  <img id="nav-logo" src="@/assets/header-logo.png">
  <!-- <button @click="showMenu"></button> -->
  <input type="checkbox" id="active">
  <label for="active" class="menu-btn"><i class="material-icons menu" key="menu">menu</i></label>
  <div class="wrapper">
    <Menu />
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

.menu {
    cursor: pointer;
    font-size: 3em;
    padding-left: 5%;
    transition: all 0.3s ease;
    width: 1.5em;
    color: $primary-title-colour;
    &:active, &:hover {
        color: $btn-colour-hover;
    }
}

.wrapper {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10%;
    left: 85%;
    height: 200px;
    width: 200px;
    background: transparent;
    clip-path: circle(25px at calc(100% - 45px) 45px);
    transition: all 0.3s ease-in-out;
}
#active:checked ~ .wrapper {
    clip-path: circle(75%);
}
.menu-btn {
    position: absolute;
    z-index: 2;
    right: 20px;
    top: 20px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: transparent;
    font-size: 20px;
    cursor: pointer;
    background: transparent!important;
    transition: all 0.3s ease-in-out;
}
#active:checked ~ .menu-btn {
    background: transparent;
}

input[type="checkbox"] {
    display: none;
}
.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    text-align: center;
    width: 100%;
    color: #202020;
}
.content .title {
    font-size: 40px;
    font-weight: 700;
}
.content p {
    font-size: 35px;
    font-weight: 600;
}

@media screen and (max-width:736px) {

    .wrapper {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 10%;
        left: 50%;
        height: 200px;
        width: 200px;
        background: transparent!important;
        clip-path: circle(25px at calc(100% - 45px) 45px);
        transition: all 0.3s ease-in-out;
    }

}
</style>
