import { createRouter, createWebHistory } from 'vue-router'
 import Acceuil from '../views/Acceuil.vue' 
 import Event from '../views/Event.vue' 
 import About from '../views/About.vue' 
 import Contact from '../views/Contact.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'acceuil',
      component: Acceuil,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/event',
      name: 'event',
      component: Event,
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Blog.vue'),
    },
  ],
})

export default router
