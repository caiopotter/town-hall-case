import Vue from 'vue'
import VueRouter from 'vue-router'
import SchoolList from '../views/SchoolList.vue'
import ClassList from '../views/ClassList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/schools'
  },
  {
    path: '/schools',
    name: 'SchoolList',
    component: SchoolList
  },
  {
    path: '/classList',
    name: 'ClassList',
    component: ClassList
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

const router = new VueRouter({
  routes
})

export default router
