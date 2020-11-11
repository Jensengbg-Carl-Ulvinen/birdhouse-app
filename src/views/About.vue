<template>
<HeaderMenu />
<div class="home-wrapper">
  <div class="about">
    <h1>About</h1>
    <div class="about-box">
      <img id="blue-parrot-pic" src="@/assets/blue-parrot.png">
      <div class="text-box">
        <h2>
          Birdhouse is a ZOO with all kind of fun activities. Do you like bird watching? We got you covered!
          come watch our exotic parrots. Feeling hungry? Well, we got you covered there to.
          <br>
          <br>
          Our foundattion helps keeping near extinct parrots from vanishing.
          We do our best to try to educate people about the importance of having these beautiful exotic animals alive.
        </h2>
      </div>
    </div>
  </div>
</div>
<Footer />
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'
import Footer from '@/components/Footer.vue'
import '@/styles/base.sass'

export default {
  name: 'About',
  components: {
    HeaderMenu,
    Footer
  }
}
</script>

<style lang="scss">
@import '../styles/base.sass';

.home-wrapper {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  justify-content: space-around;
    h1 {
        color: $primary-title-colour;
        font-size: 35px!important;
    }
}

.about {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 11rem;
    .about-box {
        width: 1200px auto;
        height: 450px;
        background: $primary-footer-colour;
        color: $primary-bread-colour;
        border-radius: 39px;
        padding: 2rem;
        margin: 1rem 3rem;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        text-align: flex-start!important;
        box-shadow: 9px 9px 4px 0 rgba(#000000, 0.48);
        #blue-parrot-pic {
            margin-top: -25rem;
            padding-bottom: 5rem;
        }
        .text-box {
            display: flex;
            text-align: flex-start!important;
            justify-content: flex-start!important;
            width: auto;
            font-size: 19px;
            font-weight: bold;
        }
    }
}

@media screen and (max-width:736px) {
    .text-box {
        font-size: 14px!important;
        height: auto!important;
    }
    .about-box {
        height: auto!important;
    }
    #blue-parrot-pic {
        display: none;
    }
    .home-wrapper {
        height: 100vh;
    }
}
</style>
