<template>
<router-view />
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/base.sass';
h1, h2, h3, h4, button {
    font-family: $font-title;
}

p {
    font-family: $font-bread;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

body {
    margin: 0;
}

</style>
