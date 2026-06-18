<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
</script>

<template>
  <div class="container">
    <Typography type="bold-64-black">Помогаем студентам НГК</Typography>
    <Typography type="bold-64-red">найти работу</Typography>
    <Typography type="regular-32-almost-black">Актуальные вакансии от проверенных <br> работодателей — специально для студентов и <br> выпускников колледжа</Typography>
    <div class="button_block">
      <Button type="default">Смотреть вакансии</Button>
      <Button type="none-back-black">Разместить вакансию</Button>
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
.button_block{
  margin: 0;
  display: flex;
  padding-top: 1rem;
  justify-content: center;
}
</style>
