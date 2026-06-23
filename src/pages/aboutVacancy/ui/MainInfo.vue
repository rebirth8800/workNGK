<script setup lang="ts">

import {Typography} from "@/shared/ui/typography";
import {Button} from "@/shared/ui/button";
import { computed } from 'vue'
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const date = (date)=>{
  return date.split('-').reverse().join('.')
}

</script>

<template>
<div class="container">
  <div class="info-left">
    <Typography type="bold-40-black">{{ item.title }}</Typography>
    <Typography type="regular-24-almost-black">{{ item.company_name }} - {{ item.city }}</Typography>
    <Typography type="semibold-36-primary-red">от {{ item.salary }} ₽</Typography>
  </div>
  <div class="info-right">
    <Button type="default">Откликнуться</Button>
    <Typography type="regular-20-almost-black">Опубликовано: {{ date(item.date) }}</Typography>
  </div>
</div>
</template>

<style scoped>
.container{
  display: flex;
  align-items: center;
}
.info-left{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 0;
}
.info-right{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 0;
  text-align: right;
}
</style>