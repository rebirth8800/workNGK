<script setup lang="ts">
import { useQueryClient, useQuery } from '@tanstack/vue-query'
import { getFilters } from '@/shared/api/get-filters.ts'
import CheckBox from '@/pages/vacancy/ui/CheckBox.vue'
import Category from '@/pages/vacancy/ui/Category.vue'
import { Button } from '@/shared/ui/button'
import { reactive } from 'vue'
import SearchVacancy from '@/pages/vacancy/ui/SearchVacancy.vue'
import Zarplata from '@/pages/vacancy/ui/Zarplata.vue'

interface Filters {
  category?: string,
  schedule?: any,
  employment?: any,
  work_format?: any,
  salary_min?: number
  salary_max?: number
  search?: string
}

interface Props {
  updateParam?: () => void
  deleteParam?: () => void
}

const selectedFilters = defineModel<Filters>( { default: () => ({}) })
defineProps<Props>()

const queryClient = useQueryClient()

// Query
const { isPending, isError, data, error } = useQuery({
  queryKey: ['filter'],
  queryFn: async () => {
    const response = await getFilters()
    return response.data
  },
})
</script>

<template>
  <div class="block" v-if="data">
    <SearchVacancy v-model="selectedFilters.search"/>
    <Category :item="data.category" v-model="selectedFilters.category" />
    <CheckBox name="График работы" :item="data.schedule" v-model="selectedFilters.schedule" />
    <CheckBox name="Занятость" :item="data.employment" v-model="selectedFilters.employment" />
    <CheckBox name="Формат работы" :item="data.work_format" v-model="selectedFilters.work_format" />
    <Zarplata v-model:min="selectedFilters.salary_min" v-model:max="selectedFilters.salary_max" />
    <div class="button_block">
      <Button type="default" @click="() => updateParam?.()">Применить фильтры</Button>
      <Button type="text-black" @click="() => deleteParam?.()">Сбросить фильтры</Button>
    </div>
  </div>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-left: 0;
}
.button_block {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>