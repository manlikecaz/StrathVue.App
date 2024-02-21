import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import  Homepage from "./../components/Homepage.vue"
import  AboutUs from "./../components/AboutUs.vue"
import  Alumni from "./../components/Alumni.vue"
import  Events from "./../components/Events.vue"
import  courses from "./../components/courses.vue"
import  Library from "./../components/Library.vue"
import ContactUs from "./../components/ContactUs.vue"
import Partnerships from "./../components/Partnerships.vue";


const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/HomeView',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/Partnerships',
      name: 'Partnerships',
      component: Partnerships
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/Alumni',
      name: 'Alumni',
      component: Alumni
    },
    {
      path: '/Events',
      name: 'Events',
      component: Events
    },
    {
      path: '/courses',
      name: 'courses',
      component: courses
    },
    {
      path: '/Library',
      name: 'library',
      component: Library
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
   
  ]
  const router = createRouter({
  history: createWebHistory(),
  routes,
 })

export default router
