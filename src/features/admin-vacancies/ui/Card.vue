<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { putVacancy } from '@/features/admin-vacancies/api/put-vacancy-status.ts'
import { message } from 'ant-design-vue'

interface Item {
  id: string
  title: string
  company_name: string
  salary: number
  date: string
  status: string // "Отклонена" | "Опубликована" | "На модерации"
}

interface Props {
  item: Item
}

const props = defineProps<Props>()

const queryClient = useQueryClient()

const { mutate } = useMutation({
  mutationFn: async (status: string) => {
    const responce = await putVacancy(props.item.id, status)
    return responce.data
  },
  onSuccess: (data) => {
    message.success({
      content: data.message,
      class: 'custom-message-large',
    })
    queryClient.invalidateQueries({ queryKey: ['admin-vacancies'] })
  },
})

const vacancy_update = (status: string) => {
  mutate(status)
}
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
      <RouterLink :to="`/vacancies/${item.id}`"
        ><Button type="none-back-black">Просмотреть</Button></RouterLink
      >
      <Button type="default" @click="() => vacancy_update('Опубликована')">Опубликовать</Button>
      <Button type="none-back-red" @click="vacancy_update('Отклонена')">Отклонить</Button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background-color: var(--color-white);
  border: 1px solid #bbb9b9;
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

.content-footer {
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
  align-items: center;
}

.card-tag {
  padding: 5px 40px !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  border-radius: 10px !important;
  min-height: 25px !important;
}
</style>
