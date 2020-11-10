import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FoodDrinks from '../views/Food-drinks.vue'
import OurBirds from '../views/OurBirds.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/our-birds',
    name: 'OurBirds',
    component: OurBirds
  },
  {
    path: '/food-drinks',
    name: 'FoodDrinks',
    component: FoodDrinks

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
