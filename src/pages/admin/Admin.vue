<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/shared/ui/button'
import DefaultLayout from '@/app/layout/DefaultLayout.vue'
import { useAuthStore } from '@/entities/user'
import { AdminVacancies } from '@/features/admin-vacancies'
import { AdminEmployers } from '@/features/admin-employers'

const authStore = useAuthStore()

const logout = authStore.useLogout()

const activeKey = ref(1)
</script>

<template>
  <DefaultLayout name="Админ панель">
    <div class="background">
      <div class="container">
        <a-tabs v-model:activeKey="activeKey" class="tabs-full-width">
          <a-tab-pane :key="1" tab="Вакансии на модерацию"><AdminVacancies/></a-tab-pane>
          <a-tab-pane :key="2" tab="Заявки работодателей" force-render><AdminEmployers/></a-tab-pane>
        </a-tabs>
        <div class="button-wrapper">
          <Button @click="logout.mutate()" class="logout-button">Выход из аккаунта</Button>
        </div>
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tabs-full-width {
  width: 100%;
}

.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.logout-button {
  font-size: 1rem;
  padding: 10px 20px;
  height: auto;
  min-height: 2.5rem;
}

:deep(.ant-tabs-tab) {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-almost-black);
}

:deep(.ant-tabs-tab-active) {
  color: var(--color-primary-red) !important;
}

:deep(.ant-tabs-tab-active .ant-tabs-tab-btn) {
  color: var(--color-primary-red) !important;
}

:deep(.ant-tabs-nav) {
  margin-left: 0;
}

:deep(.ant-tabs-content-holder) {
  margin-left: 0;
  width: 100%;
}

:deep(.ant-tabs-tab:hover) {
  color: var(--color-primary-red);
}

:deep(.ant-tabs-ink-bar) {
  background-color: var(--color-primary-red) !important;
}

:deep(.ant-tabs-tab-btn) {
  font-size: 1.5rem;
  font-weight: 500;
}
</style>