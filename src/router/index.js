import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from  '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: () => import('../views/ClientesView.vue')
  },
  {
    path: '/administrador',
    name: 'administrador',
    component: () => import('../views/AdministradorView.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
