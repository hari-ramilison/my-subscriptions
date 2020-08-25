import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'add',
    component: () => import('../components/Create')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/List')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/Edit')
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
