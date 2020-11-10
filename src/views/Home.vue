<template>
  <HeaderMenu/>
  <div class="home">
    <figure class="img-container">
      <img class="logo" alt="birdhouse-logo" src="../assets/birdhouse.png">
    </figure>
    <landingHeader/>
    <landingMain/>
  </div>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import '@/styles/base.sass'
import landingHeader from '@/components/LandingComponentHeader.vue'
import landingMain from '@/components/LandingContentMain.vue'
import HeaderMenu from '@/components/HeaderMenu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: { LandingHeader: landingHeader, LandingMain: landingMain, HeaderMenu, Footer }
}
</script>


<style lang="scss">
@import '../styles/base.sass';

header {
  grid-column: 1/8;
  background-color: $primary-footer-colour;
}

body {
    background-color: $primary-background-colour;


}

.home {
    //padding-top: 6rem;

    #birdhouse-logo {
        height: 300px;
    }
}

@media screen and (max-width:736px) {

    .home {
        //padding-top: 6rem;
        height: 100vh;

        #birdhouse-logo {
            height: 300px;
        }
    }


}

.home {
  background-color: $primary-background-colour;
  display: grid;
  grid-auto-rows: 150px;
  grid-template-columns: repeat(7, 3fr);
}

.img-container {
  grid-row: 1/4;
  grid-column: 2/7;
  padding: 0px;
  margin: 0px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.logo {
  max-width: 100%;
  max-height: 300px;
}

footer {
  grid-row: 12/13;
  grid-column: 1/8;
  background-color: $primary-footer-colour;
}

  @media only screen and (max-width: 700px) {
    .logo {

    }
  }

  @media only screen and (min-width: 1200px) {
    footer {
      grid-row: 14/15;
    }
  }

  @media only screen and (min-width: 1700px) {
    footer {
      grid-row: 16/18;
    }

    .img-container {
        grid-row: 1/5;

      }

    .logo {
      max-height: 500px;
    }
  }
</style>
