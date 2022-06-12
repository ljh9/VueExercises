import { createRouter, createWebHistory } from 'vue-router'
//import TestTest from '../views/TestTest.vue'
//import ExerciseTest01 from '../views/ExerciseTest01.vue'
//import ExerciseTest from '../views/Exercise/ExerciseTest.vue'
import ExerciseTest02 from '../views/Exercise02/ExerciseTest02.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    //component: TestTest
    //component: ExerciseTest01
    //component: ExerciseTest
    component: ExerciseTest02
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
