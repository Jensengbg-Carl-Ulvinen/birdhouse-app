<template>
  <div class="wrapper">
    <h1>OUR BIRDS</h1>
    <div class="card-wrapper">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../styles/base.sass';

.wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
h1{
    grid-column: 3 / 3;
}
</style>