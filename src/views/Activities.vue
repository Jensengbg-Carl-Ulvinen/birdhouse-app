<template>
<HeaderMenu />
<div class="activities-cards">
  <h1>Activities</h1>
  <div class="activitiy-card-row">
    <div class="activitiy-card"><img src="../assets/park-showcase/jurassic.png" id="activity-pic" alt="Jurassic"></div>
    <div class="activitiy-card"><img src="../assets/park-showcase/indiana.png" id="activity-pic" alt="Jurassic"></div>
  </div>
  <div class="activitiy-card-row">
    <div class="activitiy-card"><img src="../assets/park-showcase/minecraft.png" id="activity-pic" alt="Jurassic"></div>
    <div class="activitiy-card"><img src="../assets/park-showcase/chinese.png" id="activity-pic" alt="Jurassic"></div>
  </div>
</div>
<Footer />
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'
import Footer from '@/components/Footer.vue'
import '@/styles/base.sass'

export default {
  name: 'Activities',
  components: {
    HeaderMenu,
    Footer
  }
}
</script>

<style lang="scss">
@import '../styles/base.sass';

.activities-cards{
  display: grid;
  grid-gap: .25rem;
  grid-template-rows: repeat(4,1fr);
  justify-content: space-around;
  color: $primary-title-colour;
  .activitiy-card-row{
    display: flex;
    flex-direction: row;
    .activitiy-card{
      padding: 0.5rem;
    }

  }
}




@media screen and (max-width:736px) {

  .activities-cards{
    margin-top: 7rem;
    height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

  .activitiy-card-row{
    flex-direction: column!important;

  }

  #activity-pic{
    width: 70%;

  }

}
</style>
