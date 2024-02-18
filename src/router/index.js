import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import  Homepage from "./../components/Homepage.vue"
import  AboutUs from "./../components/AboutUs.vue"
import  Alumni from "./../components/Alumni.vue"
import  Events from "./../components/Events.vue"
import  courses from "./../components/courses.vue"
import  Library from "./../components/Library.vue"
import ContactUs from "./../components/ContactUs.vue"
import Patnerships from "./../components/Patnerships.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/abouts',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/',
      name: 'Alumni',
      component: Alumni
    },
    {
      path: '/',
      name: 'Events',
      component: Events
    },
    {
      path: '/',
      name: 'courses',
      component: courses
    },
    {
      path: '/',
      name: 'library',
      component: Library
    },
    {
      path: '/',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
