<template>
<footer class="footer">
  <h3>copyright birdhouse 2020</h3>
  <img id="red-parrot-pic" src="@/assets/red-parrot.png">
</footer>
</template>
<script>
export default {
  name: "Footer"

}
</script>

<style lang="scss">
@import '@/styles/base.sass';

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    background: #26753C;
    width: 100%;
    height: 100%;
    min-height: 6rem;
    grid-row: 15/16;
    grid-column: 1/8;

    #red-parrot-pic {
        margin-top: -16rem;
    }

    h3 {
        padding-top: 1rem;
        padding-left: 1rem;
        color: #FDE07B;
    }
}

  @media only screen and (min-width: 700px) {
    .footer {
      grid-row: 12/13;
    }
  }

  @media only screen and (min-width: 1200px) {
    .footer {
      grid-row: 14/15;
    }
  }

  @media only screen and (min-width: 1700px) {
    .footer {
      grid-row: 17/18;
    }

    .img-container {
        grid-row: 1/5;

      }

    .logo {
      max-height: 500px;
    }
  }
</style>
