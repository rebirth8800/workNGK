<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/entities/user'

const authStore = useAuthStore()

// authStore.useCheckAuth()

</script>

<template>
  <RouterView />
</template>

<style>
@import './styles/main.css';
.container{
  width: 1600px;
  margin: 0 auto;
}
</style>
