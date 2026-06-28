<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { useAuthStore } from '@/entities/user'
import { computed } from 'vue'
import Profile from '@/features/button-block/ui/Profile.vue'

const authStore = useAuthStore()

const user = authStore.user
const isAuthenticated = computed(() => authStore.isAuthenticated)
</script>

<template>
  <div class="main">
    <RouterLink v-if="!isAuthenticated" to="/auth" ><Button >Войти</Button></RouterLink>
    <RouterLink v-else-if="user?.role == 'admin'"  to="/admin" ><Button >Админ панель</Button></RouterLink>
    <Profile v-else :lastname="user?.last_name" :name="user?.first_name"/>
  </div>

</template>

<style scoped>
.main{
  display: flex;
  margin-right: 0;
}
</style>