import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/RepoView',
      name: 'RepoView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RepoView/RepoView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'ErrorView',
      component: () => import('../views/ErrorView/ErrorView.vue'),
      meta: {
        title: '404 Not Found',
        description: 'The page you are looking for does not exist.'
      }
    },

    {
      path: '/repo/:id',
      name: 'SingleRepoView',
      component: () => import('../views/RepoView/SingleRepoView.vue'),
      props: true
    }
  ]
})

export default router
