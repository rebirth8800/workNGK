<script setup lang="ts">
import { RouterLink, RouterView,  } from 'vue-router'
import { onMounted } from 'vue'
import { useAuthStore } from '@/entities/user'

const authStore = useAuthStore()
const checkAuth = authStore.useCheckAuth()

onMounted(() => {
  const token = localStorage.getItem('accessToken')

  if (token) {
    checkAuth.mutate()
  } else {
    authStore._initialized = true
  }
})
</script>

<template>
  <RouterView />
</template>

<style>
@import './styles/main.css';
</style>
