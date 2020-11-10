<!-- <template>
<div id="nav">
  <img id="nav-logo" src="@/assets/header-logo.png">
  <button @click="showMenu"><i class="material-icons menu" key="menu">menu</i></button>
  <button id="show-modal" @click="showModal = true">Show Modal</button>
       use the modal component, pass in the prop
      <modal v-if="showModal" @close="showModal = false">
        <Menu />

      you can use custom content here to overwrite
      default content

        <h3 class="header">custom header</h3>
      </modal>

</div>
</template> -->

<template>
<div class="text-center">
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Dropdown
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</div>
</template>



<script>
export default {
  data: () => ({
    items: [{
        title: 'Click Me'
      },
      {
        title: 'Click Me'
      },
      {
        title: 'Click Me'
      },
      {
        title: 'Click Me 2'
      },
    ],
  }),
}
</script>

<style lang="scss">
@import '@/styles/base.sass';
// button{
//   background: transparent!important;
//   border: transparent !important;
// }

.clear,
.menu {
    cursor: pointer;
    font-size: 3em;
    padding-left: 5%;
    transition: all 0.3s ease;
    width: 1.5em;
}

.menu {
    color: $primary-title-colour;
    &:active,
    &:hover {
        color: $btn-colour-hover;
    }
}

.clear {
    color: $btn-colour-hover;
    &:active,
    &:hover {
        color: $primary-title-colour;
    }
}

#nav {
    height: 100px;
    width: 100%;
    background: $primary-header-background;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#nav-logo {
    height: 60px;
    margin-left: 1rem;
    padding-top: 1rem;
}
a {
    font-weight: bold;
    color: #2c3e50;
}
</style>
