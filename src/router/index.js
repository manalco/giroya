import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Auth from '@/components/Auth'
import GiroCreate from '@/components/GiroCreate'
import GiroGet from '@/components/GiroGet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/giro/create',
      name: 'Crear Giro',
      component: GiroCreate
    },
    {
      path: '/giro/:bookId',
      name: 'GiroGet',
      component: GiroGet
    }
  ],
  mode: 'history'
})
