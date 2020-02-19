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
      component: () => import('./views/Curriculumvitae.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
