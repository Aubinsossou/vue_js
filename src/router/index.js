import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import Event from '../views/Event.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Exo from '../views/Exo.vue'
import Details from '../views/DetailsService.vue'
import Login from '../views/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/accueil',
      name: 'acceuil',
      component: Acceuil,
      meta: { requiresAuth: true },
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { requiresAuth: true },
    },
    {
      path: '/event',
      name: 'event',
      component: Event,
      meta: { requiresAuth: true },
    },

    {
      path: '/detail/:id',
      name: 'detail',
      component: Details,
      meta: { requiresAuth: true },
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Blog.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/exo',
      name: 'exo',
      component: Exo,
      meta: { requiresAuth: true },
    },
  ],
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("auth") === "true"

  if (to.meta.requiresAuth && !isAuthenticated) {
    alert("Veillez vous authentifier")
    next("/")
  } else {
    next()
  }
})
export default router
