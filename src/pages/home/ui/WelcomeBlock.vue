<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import SearchIcon from '@/shared/svg/search-white.svg'
import FileIcon from '@/shared/svg/file-add.svg'
import InputWithTags from "@/shared/ui/inputWithTag/InputWithTags.vue";
</script>

<template>
  <div class="container">
    <Typography type="bold-64-black">Помогаем студентам НГК</Typography>
    <Typography type="bold-64-red">найти работу</Typography>
    <Typography type="regular-32-almost-black">Актуальные вакансии от проверенных <br> работодателей — специально для студентов и <br> выпускников колледжа</Typography>
    <div class="button_block">
      <RouterLink to="/vacancies"><Button type="default" :svg="SearchIcon">Смотреть вакансии</Button></RouterLink>
      <RouterLink to="/vacancies/create"><Button type="none-back-black" :svg="FileIcon">Разместить вакансию</Button></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 6rem;
  width: 835px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
}

.button_block {
  margin: 0;
  display: flex;
  padding-top: 1rem;
  justify-content: center;
  gap: 60px; /* ← ДОБАВЛЯЕМ GAP 60px */
}
</style>