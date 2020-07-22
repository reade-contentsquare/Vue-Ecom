import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import Contact from '@/views/Contact.vue'
import Info from '@/views/Info.vue'


Vue.use(Router)

export default new Router({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ],
  mode: 'history'
})
