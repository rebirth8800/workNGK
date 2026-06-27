<script setup lang="ts">

import {Typography} from "@/shared/ui/typography";
import {Tag} from "@/shared/ui/tag";
import {Button} from "@/shared/ui/button";

interface Item {
  title: string
  company_name: string
  salary: number
  date: string
  status: string
}

interface Props {
  item: Item
}

defineProps<Props>()


</script>

<template>
  <div class="card">
    <div class="content-left">
      <div class="content-title">
        <Typography type="semibold-24-black">{{ item.title }}</Typography>
        <Typography type="regular-20-almost-black">{{ item.company_name }}</Typography>
      </div>
      <div class="content-footer">
        <Typography type="semibold-20-black">от {{ item.salary }} ₽</Typography>
        <Typography type="regular-20-almost-black">Создана: {{ item.date }}</Typography>
      </div>
    </div>
    <div class="content-right">
      <Tag type="red-light">{{item.status}}</Tag>
      <Button type="none-back-black">Редактировать</Button>
      <Button type="none-back-red">Удалить</Button>

    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background-color: var(--color-white);
  border: 1px solid #BBB9B9;
  border-radius: 10px;
  padding: 30px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.content-title {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.content-footer{
  display: flex;
  gap: 30px;
}
.content-left {
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 0;
}

.content-right {
  flex-shrink: 0;
  margin-left: auto;
  display: flex;
  gap: 20px;
}
</style>
