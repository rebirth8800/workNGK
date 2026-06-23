<script setup lang="ts">
import {ref} from 'vue'
import VacancyLayout from '@/app/layout/VacancyLayout.vue'
import Switcher from '@/pages/auth/ui/Switcher.vue'
import Student from '@/pages/auth/ui/Student.vue'
import EmployerLogin from '@/pages/auth/ui/EmployerLogin.vue'
import EmployerRegist from '@/pages/auth/ui/EmployerRegist.vue'

const isStudent = ref(true)

const isLogin = ref(true)

</script>

<template>
  <VacancyLayout>
    <div class="container">
        <Switcher v-model:student="isStudent" v-model:login="isLogin" />
        <Student v-if="isStudent" />
        <EmployerLogin v-if="!isStudent && isLogin" />
        <EmployerRegist v-else/>
    </div>
  </VacancyLayout>
</template>

<style scoped>
.container {
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
