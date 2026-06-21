<script setup lang="ts">
import { useQueryClient, useInfiniteQuery, useQuery, useMutation } from '@tanstack/vue-query'
import { getVacancy } from '@/pages/vacancy/api/get-vacancy'
import VacancyListLayout from '@/app/layout/VacancyListLayout.vue'
import Filters from '@/pages/vacancy/ui/Filters.vue'
import { reactive } from 'vue'
import { Button } from '@/shared/ui/button'
import VacancyList from './ui/VacancyList.vue'
import { Typography } from '@/shared/ui/typography'


const selectedFilters = reactive({
  page: 1,
  per_page: 6,
  category: '',
  schedule: [],
  employment: [],
  work_format: [],
})
const getParams = ()=>{
  return {
    page: selectedFilters.page,
    per_page: selectedFilters.per_page,
    category: selectedFilters.category,
    schedule: selectedFilters.schedule.join(','),
    employment: selectedFilters.employment.join(','),
    work_format: selectedFilters.work_format.join(','),
  }
}
let params = getParams()

const updateParam=()=>{
  params=getParams()
  refetch()
}

const deleteParam=()=>{
  selectedFilters.page = 1
  selectedFilters.per_page = 6
  selectedFilters.category = ''
  selectedFilters.schedule = []
  selectedFilters.employment = []
  selectedFilters.work_format = []
  params=getParams()
  refetch()
}

const pagePlus = ()=>{
  selectedFilters.page += 1
  updateParam()
}
const pageMinus = ()=>{
  selectedFilters.page -= 1
  updateParam()
}

const queryClient = useQueryClient()


const { isPending, isError, data, error, refetch } = useQuery({
  queryKey: ['vacancies'],
  queryFn: async () => {
    const response = await getVacancy(params)
    console.log(response)
    return response.data
  },
})

</script>

<template>
  <VacancyListLayout name="Вакансии">
    <div class="container">
<!--      <Button @click="console.log(selectedFilters)">244</Button>-->
      <Filters v-model="selectedFilters" :updateParam="updateParam" :deleteParam="deleteParam"/>
      <!--    <Typogra.Header level={2}></Typogra.Header>-->
      <!--    <Typo></Typo>-->
      <!--    <Skeleton v-if="isPending" />-->
      <!--    <Error v-if="isError" :error="error" />-->
      <VacancyList v-if="data" :data="data.items" :len="data.len" :pagePlus="pagePlus" :pageMinus="pageMinus" :page="selectedFilters.page"/>
    </div>
  </VacancyListLayout>
</template>

<style scoped>
.container {
  display: flex;
  gap: 1.5rem;
}
</style>