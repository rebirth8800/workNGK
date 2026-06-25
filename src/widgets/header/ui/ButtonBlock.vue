<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { useAuthStore } from '@/entities/user'
import { computed } from 'vue'

const authStore = useAuthStore()

const isAuthenticated = computed(() => authStore.isAuthenticated)


</script>

<template>
  <div class="main">
    <RouterLink to="/auth" v-if="!isAuthenticated"><Button >Войти</Button></RouterLink>
  </div>

</template>

<style scoped>
.main{
  display: flex;
  margin-right: 0;
}
</style>