<script setup lang="ts">
import { ref } from 'vue'
import { Otclicki } from '@/features/otclicki'
import StudentData from '@/features/student-data/StudentData.vue'

defineProps({
  id: Number,
})
const activeKey = ref(1)
</script>

<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane :key="1" tab="Мои отклики"><Otclicki /></a-tab-pane>
    <a-tab-pane :key="2" tab="Личные данные" force-render><StudentData :id="id"/></a-tab-pane>
    <a-tab-pane :key="3" tab="Моё резюме">резюме</a-tab-pane>
  </a-tabs>
</template>

<style scoped>

.ant-tabs-nav{
  margin-left: 0;
}
.ant-tabs-content-holder{
  margin-left: 0 ;
}

</style>
