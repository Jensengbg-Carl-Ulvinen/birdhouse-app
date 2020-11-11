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

    #red-parrot-pic {
        margin-top: -16rem;
    }

    h3 {
        padding-top: 1rem;
        padding-left: 1rem;
        color: #FDE07B;
    }
}

@media screen and (max-width:736px) {

  .footer{
    margin-top: 15rem!important;
    #red-parrot-pic {
        display: none;
    }
  }


}
</style>
