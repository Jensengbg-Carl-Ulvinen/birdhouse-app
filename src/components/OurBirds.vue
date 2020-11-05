<template>
  <div class="wrapper">
    <header class="header">
    <h1>Meet our birds</h1>
    <img id="menu" src="../assets/bars.png">
    </header>
    <ul class="card-wrapper">
      <li>
        <img id="macaw" src="../assets/macaw.jpg">
        Macaws are long-tailed, often colorful parrots. 
        <br>
        They are popular in aviculture or as companion parrots.
          <audio class="audio" controls>
                <source src="../assets/macaw-sound.wav" type="audio/wav">
            </audio>
       </li>
      <li>Bird</li>
      <li>Bird</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return{
    }
  }
}
</script>

<style lang="scss">
@import '../styles/base.sass';
body{
  padding: 0;
  margin: 0;
  background-color: $primary-background-colour;
}
.header{
  background-color: $primary-footer-colour;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
h1{
  color: $btn-font-colour;
  grid-column: 3 / 3;
}
#menu{
  grid-column: 5 / 5;
  margin-left: 10rem;
  margin-top: 1rem;
}
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    margin-top: 4rem;
    margin-right: 2rem;
}
li{
  color: $btn-font-colour;
  padding: 3rem;
  padding-bottom: 10rem;
  border-radius: 3%;
  background: $primary-card-colour;
  width: 145px;
  height: 120px;
}
#macaw{
    margin-top: -30%;
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
audio{
  margin-top: -30%;
  width: 100%;
  height: 100%;
}
</style>