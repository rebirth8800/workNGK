<script setup lang="ts">
import { useQueryClient, useInfiniteQuery, useQuery, useMutation } from '@tanstack/vue-query'
import { getVacancy } from '@/pages/vacancy/api/get-vacancy'
import VacancyListLayout from '@/app/layout/VacancyListLayout.vue'
import Filters from '@/pages/vacancy/ui/Filters.vue'
import { reactive } from 'vue'
import { Button } from '@/shared/ui/button'
import VacancyList from './ui/VacancyList.vue'


const filters = {
  page: 1,
  per_page: 5,
}

const selectedFilters = reactive({
  page: 1,
  per_page: 8,
  category: '',
  schedule: [],
  employment: [],
  work_format: [],
})

const queryClient = useQueryClient()


const { isPending, isError, data, error } = useQuery({
  queryKey: ['vacancies'],
  queryFn: async () => {
    const response = await getVacancy(selectedFilters)
    console.log(response)
    return response.data
  },
})

// console.log(data)
</script>

<template>
  <VacancyListLayout name="Вакансии">
    <div class="container">
<!--      <Button @click="console.log(selectedFilters)">244</Button>-->
      <Filters v-model="selectedFilters" />
      <!--    <Typogra.Header level={2}></Typogra.Header>-->
      <!--    <Typo></Typo>-->
      <!--    <Skeleton v-if="isPending" />-->
      <!--    <Error v-if="isError" :error="error" />-->
      <VacancyList v-if="data" :data="data"/>
    </div>
  </VacancyListLayout>
</template>

<style scoped>
.container {
  display: flex;
}
</style>