<script setup lang="ts">
import DefaultLayout from '@/app/layout/DefaultLayout.vue'
import { useAuthStore } from '@/entities/user'
import { ProfileEmployer } from '@/widgets/profileEmployer'
import { ProfileStudent } from '@/widgets/profileStudent'
import { Button } from '@/shared/ui/button'

const name = {
  student: 'студента',
  employer: 'работодателя',
}

const authStore = useAuthStore()
const user = authStore.user
const logout = authStore.useLogout()
</script>

<template>
  <DefaultLayout :name="`Личный кабинет ${name[user?.role]}`">
    <div class="background">
      <div class="container">
        <ProfileEmployer v-if="user.role == 'employer'" />
        <ProfileStudent v-if="user.role == 'student'" />

        <div class="logout-wrapper">
          <Button @click="logout.mutate()" class="logout-btn">Выход из аккаунта</Button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.background {
  width: 100%;
  background-color: var(--color-background-grey);
}

.container {
  background-color: var(--color-background-grey);
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.logout-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
}

.logout-btn {
  padding: 15px 45px !important;
}
</style>