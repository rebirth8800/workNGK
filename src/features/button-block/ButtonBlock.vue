<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { useAuthStore } from '@/entities/user'
import { computed } from 'vue'
import Profile from '@/features/button-block/ui/Profile.vue'

const authStore = useAuthStore()

const user = authStore.user
const isAuthenticated = computed(() => authStore.isAuthenticated)
console.log(user)

</script>

<template>
  <div class="main">
    <Profile v-if="isAuthenticated" :lastname="user?.lastname" :name="user?.name"/>
    <RouterLink v-else to="/auth" ><Button >Войти</Button></RouterLink>

  </div>

</template>

<style scoped>
.main{
  display: flex;
  margin-right: 0;
}
</style>