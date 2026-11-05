import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgramView from '../views/ProgramView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/program',
      name: 'program',
      component: ProgramView
    },
    {
      path: '/sessions/:id',
      name: 'session-detail',
      component: () => import('../views/SessionDetailView.vue'),
      props: true
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router