export default {
  state: {
    showMenu: false
  },
  mutations: {
    showMenu(state) {
      state.showMenu = !state.showMenu;
    }
  }
};
