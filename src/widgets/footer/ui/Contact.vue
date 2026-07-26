<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
</script>

<template>
  <div class="block">
    <Typography type="semibold-20-black">Контакты</Typography>

    <div class="flex">
      <Typography type="regular-12-almost-black">Нижний Новгород, Московское шоссе 1</Typography>
    </div>
    <div class="flex">
      <Typography type="regular-12-almost-black">+ 7 908 724 16 98</Typography>
    </div>
    <div class="flex">
      <Typography type="regular-12-almost-black">info@ngk-rabota.ru</Typography>
    </div>
  </div>
</template>

<style scoped>
.block{
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  text-align: left;
}
.flex{
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin: 0;
}

</style>
