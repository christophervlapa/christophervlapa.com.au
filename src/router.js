import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/Home.vue'
import SingleWork from './views/SingleWork.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
    ,{
      path: '/works/:workRoot',
      name: 'works',
      component: SingleWork
    }
    ,
    {
      path: '/curriculumvitae',
      name: 'curriculumvitae',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "curriculumvitae" */ './views/Curriculumvitae.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    }
  ]
})
