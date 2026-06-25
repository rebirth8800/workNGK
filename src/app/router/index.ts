import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../pages/home/HomeView.vue'
import VacancyList from '@/pages/vacancy/Vacancy.vue'
import AboutVacancy from '@/pages/aboutVacancy/AboutVacancy.vue'
import Auth from '@/pages/auth/Auth.vue'
import Profile from '@/pages/profile/Profile.vue'
import CreateVacancy from '@/pages/createVacancy/CreateVacancy.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/vacancies',
      name: 'vacancies',
      component: VacancyList,
    },
    {
      path: `/vacancies/:id`,
      name: 'aboutVacancy',
      component: AboutVacancy,
    },
    {
      path: `/auth`,
      name: 'auth',
      component: Auth,
    },
    {
      path: `/vacancies/creaty`,
      name: 'createVacancy',
      component: CreateVacancy,
    },
    {
      path: `/profile`,
      name: 'profile',
      component: Profile,
    },
  ],
})

export default router
