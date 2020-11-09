<template>
<router-view />
</template>

<script>
export default {

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
    //padding: 1rem;
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

</style>
