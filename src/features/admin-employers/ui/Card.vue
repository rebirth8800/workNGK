<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

interface Item {
  id: string
  company_name: string
  last_name: string
  first_name: string
  middle_name: string
  email: string
  phone: string
  date: string
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
        <Typography type="semibold-24-black">{{ item?.company_name }}</Typography>
        <Typography type="regular-20-almost-black">{{ item?.last_name  }} {{item?.first_name}} {{item?.middle_name}}</Typography>
        <Typography type="regular-20-almost-black">Дата заявки: {{ item?.date || 'Нет даты' }}</Typography>
      </div>
      <div class="content-footer">
        <Typography type="regular-16-almost-black">{{ item?.email }}</Typography>
        <Typography type="regular-16-almost-black">{{ item?.phone }}</Typography>
      </div>
    </div>
    <div class="content-right">
      <Button type="default">Одобрить</Button>
      <Button type="none-back-red">Отклонить</Button>
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

.content-left {
  display: flex;
  gap: 30px;
  min-width: 0;
  align-items: center;
  flex-wrap: wrap;
}

.content-title {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.content-footer {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.content-right {
  flex-shrink: 0;
  margin-left: auto;
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>