<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/entities/user'
import { onMounted } from 'vue'

const authStore = useAuthStore()

const checkAuth = authStore.useCheckAuth()

onMounted(()=>{
  if (localStorage.getItem('accessToken')) {
    checkAuth.mutate()
  }
})

</script>

<template>
  <RouterView />
</template>

<style>
@import './styles/main.css';
</style>
