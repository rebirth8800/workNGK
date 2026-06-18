<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
</script>

<template>
  <div class="block">
    <Typography type="semibold-32-black">Контакты</Typography>

    <div class="flex">
      <Typography type="regular-20-almost-black">Нижний Новгород, Московское шоссе 1</Typography>
    </div>
    <div class="flex">
      <Typography type="regular-20-almost-black">+ 7 908 724 16 98</Typography>
    </div>
    <div class="flex">
      <Typography type="regular-20-almost-black">info@ngk-rabota.ru</Typography>
    </div>
  </div>
</template>

<style scoped>
.block{
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  text-align: left;
}
.flex{
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin: 0;
}

</style>
