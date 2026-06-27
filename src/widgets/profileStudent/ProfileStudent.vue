<script setup lang="ts">
import { ref } from 'vue'
import { Otclicki } from '@/features/otclicki'
import StudentData from '@/features/student-data/StudentData.vue'



const activeKey = ref(1)
</script>

<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane :key="1" tab="Мои отклики"><Otclicki /></a-tab-pane>
    <a-tab-pane :key="2" tab="Личные данные" force-render><StudentData /></a-tab-pane>
    <a-tab-pane :key="3" tab="Моё резюме">резюме</a-tab-pane>
  </a-tabs>
</template>

<style scoped>
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