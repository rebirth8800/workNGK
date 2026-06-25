import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  // ============ ПУБЛИЧНЫЕ МАРШРУТЫ (для всех) ============
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/HomeView.vue'),
  },
  {
    path: '/vacancies/:id',
    name: 'aboutVacancy',
    component: () => import('@/pages/aboutVacancy/AboutVacancy.vue'),
  },
  {
    path: '/vacancies',
    name: 'vacancies',
    component: () => import('@/pages/vacancy/Vacancy.vue'),
  },

  // ============ ГОСТЕВЫЕ МАРШРУТЫ (только для неавторизованных) ============
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/pages/auth/Auth.vue'),
    meta: { requiresGuest: true }, // <-- Только для гостей
  },

  // ============ ЗАЩИЩЕННЫЕ МАРШРУТЫ (только для авторизованных) ============
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/pages/profile/Profile.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/vacancies/create',
    name: 'createVacancy',
    component: () => import('@/pages/createVacancy/CreateVacancy.vue'),
    meta: {
      requiresAuth: true,
      roles: ['employer'],
    },
  },

  // ============ АДМИНСКИЕ МАРШРУТЫ (только для админов) ============
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/pages/admin/Admin.vue'),
    meta: {
      requiresAuth: true,
      requiresAdmin: true, // <-- Требуется роль admin
    },
  },
]