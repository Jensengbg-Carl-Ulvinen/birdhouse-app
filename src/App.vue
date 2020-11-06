<template>

<div id="nav">
  <img alt="birdhouse-logo" src="@/assets/header-logo.png">
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <img id="burger-nav" src="@/assets/burger-menu-desktop.png">
</div>

<router-view />
<div class="footer">
  <h3>copyright birdhouse 2020</h3>
  <img id="red-parrot-pic" src="@/assets/red-parrot.png">
</div>

</template>

<script>
export default {

  // methods: {
  //   goToAbout() {
  //     this.$router.push({ path: 'About' });
  //   },
  //   goToOurBirds() {
  //     this.$router.push({ path: 'ourbirds' });
  //   },
  //   goToHome() {
  //     this.$router.push({ path: 'Home' });
  //   }
  // }
}
</script>

<style lang="scss">

@import '@/styles/base.sass';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    margin: 0;
}

#nav {
    height: auto;
    padding: 1rem;
    background: $primary-header-background;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #burger-nav {
        padding-top: 1rem;
        height: 30px;
        cursor: pointer;
    }

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    background: #26753C;
    width: 100%;
    height: 100px;

    #red-parrot-pic {
        margin-top: -16rem;
    }

    h3 {
        padding-top: 1rem;
        padding-left: 1rem;
        color: #FDE07B;
    }
}
</style>
