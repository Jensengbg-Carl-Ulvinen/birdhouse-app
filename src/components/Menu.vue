<template>
  <section>
      <nav>
        <h1 @click="toHome">Home</h1>
        <h1 @click="toAbout">About</h1>
        <h1 @click="toOurBirds">Our Birds</h1>
        <h1 @click="toFoodDrinks">Food and Drinks</h1>
      </nav>
    </section>
</template>


<script type="text/javascript">
import { mapMutations } from "vuex";
export default {
  name: "Menu",
  state: {
    showMenu: false
  },
  mutations: {
    showMenu(state) {
      state.showMenu = !state.showMenu;
    }
  },
  methods: {
    ...mapMutations(["showMenu"]),
    toHome() {
      this.showMenu();
      const path = `/`;
      if (this.$route.path !== path) this.$router.push("/");
    },
    toAbout() {
      this.showMenu();
      const path = `/about`;
      if (this.$route.path !== path) this.$router.push("/about");
    },
    toOurBirds() {
      this.showMenu();
      const path = `/our-birds`;
      if (this.$route.path !== path) this.$router.push("/our-birds");
    },
    toFoodDrinks() {
      this.showMenu();
      const path = `/food-drinks`;
      if (this.$route.path !== path) this.$router.push("/food-drinks");
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import '@/styles/base.sass';

nav{
  display: flex;
  flex-direction: row;
}

button {
  background: transparent!important;
  border: transparent !important;
}

h1{
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 20px!important;
  cursor: pointer;
}

</style>
