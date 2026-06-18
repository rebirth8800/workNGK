<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
</script>

<template>
  <div class="block">
    <Typography type="semibold-32-black">Навигация</Typography>
    <RouterLink to=""><Typography type="regular-20-almost-black">Вакансии</Typography></RouterLink>
    <RouterLink to=""><Typography type="regular-20-almost-black">Студентам</Typography></RouterLink>
    <RouterLink to=""><Typography type="regular-20-almost-black">Работодателям</Typography></RouterLink>
  </div>
</template>

<style scoped>
.block{
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

}
a{
  margin: 0;
}

</style>
