<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { useAuthStore } from '@/entities/user'
import { computed, onMounted, ref } from 'vue'
import Profile from '@/features/button-block/ui/Profile.vue'

const authStore = useAuthStore()
const user = computed(() => authStore.user)


</script>

<template>
  <div class="main">
    <div class="block" v-if="user != null">
      <RouterLink v-if="user?.role == 'admin'" to="/admin"><Button>Админ панель</Button></RouterLink>
      <Profile v-else :lastname="user?.last_name" :name="user?.first_name" />
    </div>
    <RouterLink v-else to="/auth"><Button>Войти</Button></RouterLink>



  </div>
</template>

<style scoped>
.main {
  display: flex;
  margin-right: 0;
}
</style>