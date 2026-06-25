<script setup lang="ts">
import DefaultLayout from '@/app/layout/DefaultLayout.vue'
import { useAuthStore } from '@/entities/user'

const name = {
  student: 'студента',
  employer: 'работодателя',
}

const authStore = useAuthStore()

const user = authStore.user

</script>

<template>
  <DefaultLayout :name="`Личный кабинет ${name[user?.role]}`">
      {{user}}
  </DefaultLayout>
</template>

<style scoped></style>
