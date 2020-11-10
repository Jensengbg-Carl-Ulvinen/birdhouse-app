<template>
    <header class="landing-container-header">
        <section class="instant-acces-menu">
            <div class="menu-item"> 
                <figure class="menu-item-icon"> 
                    <img class="icon" alt="menu-icon" src="../assets/menu-icons/parrot.svg"> 
                </figure> 
                <button class="menu-item-button"> <router-link to="/our-birds"> <h3> BIRDS </h3> </router-link> </button> 
            </div>
            <div class="menu-item">
              <figure class="menu-item-icon"> 
                    <img class="icon" alt="menu-icon" src="../assets/menu-icons/wheel.svg"> 
                </figure> 
                <button class="menu-item-button"> <router-link to=""> <h3> PARKS </h3> </router-link> </button> 
               </div>
            <div class="menu-item"> 
                <figure class="menu-item-icon"> 
                    <img class="icon" alt="menu-icon" src="../assets/menu-icons/food.svg"> 
                </figure> 
                <button class="menu-item-button"> <router-link to="/food-drinks"> <h3> DINING </h3> </router-link> </button> 
            </div>
            <div class="menu-item"> 
                <figure class="menu-item-icon"> 
                    <img class="icon" alt="menu-icon" src="../assets/menu-icons/info.svg"> 
                </figure> 
                <button class="menu-item-button"> 
                    <router-link to="/about"> 
                        <h3> ABOUT </h3> 
                    </router-link> 
                </button> 
          </div>
        </section>
        <section class="park-showcase">
            <img class="park-picture" alt="park-picture" src="../assets/park-showcase/jungle1.jpg"> 
            <img class="park-picture" alt="park-picture" src="../assets/park-showcase/jungle2.jpg"> 
            <img class="park-picture" alt="park-picture" src="../assets/park-showcase/jungle3.jpg"> 
            <img class="park-picture" alt="park-picture" src="../assets/park-showcase/jungle4.jpg"> 
        </section>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '../styles/base.sass'

.landing-container-header
    display: flex
    grid-row: 4/9
    grid-column: 1/8
    flex-direction: column
    background-color: $primary-footer-colour
    height: 100%
    //z-index: 1

.instant-acces-menu 
    //min-width: 50%
    display: grid
    grid-template-rows: repeat(2, 3fr)
    grid-template-columns: repeat(2, 3fr)
    //height: 100%
    min-width: 100%
    height: 50%


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
    transition: 0.3s

.menu-item:hover, menu-item:active 
    //transform: scale(1.1);
    
.menu-item-icon 
    margin: 0px
    margin-bottom: -10px

.menu-item-button
    height: 35px
    width: 80%
    border: 0px
    background-color: $btn-colour
    color: $btn-font-colour
    padding: 0px
    border-radius: 2px

a
    display: flex
    text-decoration: none
    color: $btn-font-colour
    margin: 0px
    padding: 0px
    width: 100%
    height: 100%
    text-align: center
    justify-content: center
    align-items: center
    font-weight: 900
    font-size: 24px
    font-weight: 900

a:hover, active
    color: $btn-colour

h3
   border: 0px
   margin: 0px
   padding: 0px 
   width: 100%
   text-align: center
   text-decoration: none
   font-size: 24px
   font-weight: 900

.menu-item-button:hover, active
    cursor: pointer

.menu-item-button:hover
    background-color: $btn-font-colour
    color: $btn-colour

.park-showcase 
    //width: 50%
    display: grid
    grid-template-rows: repeat(2, 3fr)
    grid-template-columns: repeat(2, 3fr)
    height: 50%
    min-width: 100%

.park-showcase-container
    object-fit: contain
    padding: 0px
    margin: 0px

.park-picture
    width: 100%
    height: 100%
    object-fit: cover
    max-width: 100%
    max-height: 100vh
    margin: auto

main
    border: 1px solid red
    grid-row: 8/13
    grid-column: 2/7
    background-color: $hamburger-colour
    display: flex
    height: 70%


.landing-card
    border: 1px solid black


@media only screen and (min-width: 700px) 
    .landing-container-header 
        flex-direction: row
        grid-row: 4/6

    .park-showcase 
        display: 

    .instant-acces-menu 
        min-width: 50%
        height: 100%

    .park-showcase
        height: 100%
        min-width: 50%
    
@media only screen and (min-width: 900px) 
    .landing-container-header 
        grid-column: 2/7
    
    
    
@media only screen and (min-width: 1200px) 
    .landing-container-header 
        grid-row: 4/7

    .menu-item-button
        height: 4rem

    .icon 
        height: 5rem
        width: 5rem

@media only screen and (min-width: 1500px) 
     h3
        font-size: 36px
    


@media only screen and (min-width: 1700px)
    .landing-container-header
        grid-row: 5/9

    .icon
        width: 7rem
        height: 7rem

    .menu-item-button
        font-size: 36px
    

</style>
