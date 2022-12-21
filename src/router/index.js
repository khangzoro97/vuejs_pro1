import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '@/views/AboutView'
import NotFound from '@/views/NotFound'
import Jobs from '@/views/jobs/Jobs'
import JobDetails from '@/views/jobs/JobDetails'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  // redirect page
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // return 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
