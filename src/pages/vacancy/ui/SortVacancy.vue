<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import IconArrowDown from '@/shared/svg/arrow-down.svg'
import { useQuery, useQueryClient } from '@tanstack/vue-query'
import { getSorts } from '@/pages/vacancy/api/get-sorts.ts'

const selectedSort = defineModel({
  type: String,
})
defineProps({
  updateSort: Function,
})
const queryClient = useQueryClient()

const { isPending, isError, data, error } = useQuery({
  queryKey: ['sorts'],
  queryFn: async () => {
    const response = await getSorts()
    return response.data
  },
})
</script>

<template>
  <div class="select">
    <Typography type="light-24-black">Сортировка:</Typography>

    <div class="sort-selector">
      <select class="sort-label" v-model="selectedSort" @change="updateSort()">
        <option selected value="">По умолчанию</option>
        <option v-for="option of data" :value="option.value">{{ option.name }}</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.select {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

select {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 40px 12px 20px;
  background-color: var(--color-background-grey);
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  cursor: pointer;
}

.sort-label {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-black);

}

.sort-arrow {
  flex-shrink: 0;
}
</style>