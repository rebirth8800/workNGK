<script setup lang="ts">

import {Typography} from "@/shared/ui/typography";
import {Button} from "@/shared/ui/button";
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
<div class="block">
  <div class="infa-left">
    <Typography type="bold-40-black">{{ item.title }}</Typography>
    <Typography type="regular-24-almost-black">{{ item.company_name }} - {{ item.city }}</Typography>
    <Typography type="semibold-36-primary-red">от {{ item.salary }} ₽</Typography>
  </div>
  <div class="infa-right">
    <Button type="default">Откликнуться</Button>
    <Typography type="reguler-20-almost-black">Опубликовано: {{ item.date }}</Typography>
  </div>
</div>
</template>

<style scoped>
.block{
  display: flex;
  width: 100%;
  align-items: center;
}
.infa-left{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 0;
}
.infa-right{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 0;
  text-align: right;
}
</style>