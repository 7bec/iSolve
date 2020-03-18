import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup'
import Home from '../views/Home'
import Orcamento from '../views/Orcamento'
import Servico from '../views/Servico'
import videoFoto from '../views/videoFoto'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signUp',
    component: Signup,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/orcamento',
    name: 'Orcamento',
    component: Orcamento
  },
  {
    path:'/servico',
    name:'Servico',
    component:Servico

  },
  {
    path:'/videofoto',
    name:'videoFoto',
    component:videoFoto

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
