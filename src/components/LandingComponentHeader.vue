<template>
  <header class="landing-container-header">
      <section class="instant-acces-menu">
            <div class="menu-item"> 
                <figure class="menu-item-icon"> 
                    <img class="icon" alt="menu-icon" src="../assets/menu-icons/parrot.svg"> 
                </figure> 
                <button class="menu-item-button"> BIRDS </button> 
            </div>
          <div class="menu-item">
              <figure class="menu-item-icon"> 
                    <img class="icon" alt="menu-icon" src="../assets/menu-icons/wheel.svg"> 
                </figure> 
                <button class="menu-item-button"> PARKS </button> 
               </div>
          <div class="menu-item"> 
              <figure class="menu-item-icon"> 
                    <img class="icon" alt="menu-icon" src="../assets/menu-icons/food.svg"> 
                </figure> 
                <button class="menu-item-button"> DINING </button> 
          </div>
          <div class="menu-item"> 
              <figure class="menu-item-icon"> 
                    <img class="icon" alt="menu-icon" src="../assets/menu-icons/info.svg"> 
                </figure> 
                <button class="menu-item-button"> INFO </button> 
          </div>
      </section>
      <section class="park-showcase">
      </section>
  </header>
  <!--<main>
      <article class="landing-card">
      </article>
      <article class="landing-card">
      </article>
  </main>-->
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '../styles/base.sass';

.landing-container-header 
    display: flex
    grid-row: 4/6
    grid-column: 1/8
    flex-direction: row
    background-color: $primary-footer-colour
    height: 100%

.instant-acces-menu 
    min-width: 50%
    display: grid
    grid-template-rows: repeat(2, 3fr)
    grid-template-columns: repeat(2, 3fr)
    height: 100%


.menu-item 
    background-color: $secondary-card-colour
    width: 70%
    place-self: center
    height: 80%
    border-radius: 5px
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    
.menu-item-icon 
    margin: 0px
    margin-bottom: -10px

.menu-item-button 
    height: 35px
    width: 80%
    border: 0px
    background-color: $btn-colour
    color: $btn-font-colour
    font-size: 24px

.menu-item-button:hover
    background-color: $btn-font-colour
    color: $btn-colour


.park-showcase 
    border: 1px solid white
    width: 50%
    display: grid
    grid-template-rows: repeat(2, 3fr)
    grid-template-columns: repeat(2, 3fr)


main 
    border: 1px solid red
    grid-row: 8/13
    grid-column: 2/7
    background-color: $hamburger-colour
    display: flex
    height: 70%


.landing-card 
    border: 1px solid black


@media only screen and (max-width: 700px) 
    .park-showcase 
        display: none
    .instant-acces-menu 
        min-width: 100%
    
@media only screen and (min-width: 900px) 
    .landing-container-header 
        grid-column: 2/7
    
@media only screen and (min-width: 1200px) 
    .landing-container-header 
        grid-row: 4/7
    

@media only screen and (min-width: 1700px) 
    .landing-container-header 
        grid-row: 5/9
    .landing-card 
    




</style>