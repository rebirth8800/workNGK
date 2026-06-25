<script setup lang="ts">
import DefaultLayout from '@/app/layout/DefaultLayout.vue'
import { useAuthStore } from '@/entities/user'
import { ProfileEmployer } from '@/widgets/profileEmployer'
import { ProfileStudent } from '@/widgets/profileStudent'

const name = {
  student: 'студента',
  employer: 'работодателя',
}

const authStore = useAuthStore()

const user = authStore.user
</script>

<template>
  <DefaultLayout :name="`Личный кабинет ${name[user?.role]}`">
    <div class="background">
      <div class="container">
        <ProfileEmployer v-if="user.role == 'employer'" :id="user.id"/>
        <ProfileStudent v-if="user.role == 'student'" :id="user.id"/>
      </div>
    </div>

  </DefaultLayout>
</template>

<style scoped>
.background{
  width: 100%;
  background-color: var(--color-background-grey);
}
.container {
  background-color: var(--color-background-grey);
  padding-bottom: 3rem;
}
</style>
