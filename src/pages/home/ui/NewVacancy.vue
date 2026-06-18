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
    console.log(response)
    return response.data
  },
})
// for (let item in data){
//   console.log(item)
// }
// console.log(isPending)
</script>

<template>
  <div class="container">
    <Typography type="semibold-40-black">Свежие вакансии</Typography>
    <Typography type="regular-16-almost-black" v-if="isPending">Загрузка...</Typography>
<!--    <Skeleton v-if="isPending" />-->
<!--    <Error v-else-if="isError" :error="error" />-->
    <div class="card_list">
      <NewCard v-for="todo in data" :key="todo.id" :item="todo" />

    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
}
.card_list{
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

}

</style>
