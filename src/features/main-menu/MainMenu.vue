<script setup lang="ts">

import Typography from '@/shared/ui/typography/Typography.vue'
</script>

<template>
  <div class="main">
    <RouterLink to="/vacancies"><Typography type="medium-24-black">Вакансии</Typography></RouterLink>
    <RouterLink to=""><Typography type="medium-24-black">Создать вакансию</Typography></RouterLink>
    <RouterLink to=""><Typography type="medium-24-black">Контакты</Typography></RouterLink>
  </div>

</template>

<style scoped>
.main{
  display: flex;
  justify-content: space-between;
  gap: 58px;
  margin: 0;
}
</style>