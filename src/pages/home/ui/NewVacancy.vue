<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { useQuery, useQueryClient } from '@tanstack/vue-query'
import { getNewVacancy } from '@/pages/home/api/get-new-vacancy.ts'
import NewCard from '@/pages/home/ui/NewCard.vue'

const queryClient = useQueryClient()

// Query
const { isPending, isError, data, error } = useQuery({
  queryKey: ['todo', 3],
  queryFn: async () => {
    const response = await getNewVacancy()
    return response.data
  },
})
</script>

<template>
  <div class="container">
    <Typography type="semibold-40-black">Свежие вакансии</Typography>
    <Typography type="regular-16-almost-black" v-if="isPending">Загрузка...</Typography>
    <div v-else-if="data && data.length > 0" class="card_list">
      <NewCard v-for="todo in data" :key="todo.id" :item="todo" />
    </div>
    <Typography v-else type="regular-16-almost-black">Нет вакансий</Typography>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
}

.card_list {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
}

.card_list > * {
  flex: 0 0 515px;
  width: 515px;
  height: 375px;
}
</style>