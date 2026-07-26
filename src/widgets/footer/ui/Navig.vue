<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
</script>

<template>
  <div class="block">
    <Typography type="semibold-20-black">Навигация</Typography>
    <RouterLink to=""><Typography type="regular-12-almost-black">Вакансии</Typography></RouterLink>
    <RouterLink to=""><Typography type="regular-12-almost-black">Создать вакансию</Typography></RouterLink>
    <RouterLink to=""><Typography type="regular-12-almost-black">Контакты</Typography></RouterLink>
  </div>
</template>

<style scoped>
.block{
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

}
a{
  margin: 0;
}

</style>
