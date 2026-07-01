<script setup lang="ts">
import {
  useQueryClient,
  useInfiniteQuery,
  useQuery,
  useMutation,
  keepPreviousData,
} from '@tanstack/vue-query'
import { getVacancy } from '@/pages/vacancy/api/get-vacancy'
import VacancyListLayout from '@/app/layout/VacancyListLayout.vue'
import Filters from '@/pages/vacancy/ui/Filters.vue'
import { computed, reactive, ref } from 'vue'
import VacancyList from './ui/VacancyList.vue'

const selectedParams = reactive({
  page: 1,
  per_page: 6,
  category: '',
  schedule: [],
  employment: [],
  work_format: [],
  salary_min: '',
  salary_max: '',
  sort: '',
  search: '',
})

const params = computed(() => {
  return {
    page: selectedParams.page,
    per_page: selectedParams.per_page,
    category: selectedParams.category,
    schedule: selectedParams.schedule.join(','),
    employment: selectedParams.employment.join(','),
    work_format: selectedParams.work_format.join(','),
    salary_min: +selectedParams.salary_min,
    salary_max: +selectedParams.salary_max,
    sort: selectedParams.sort,
    search: selectedParams.search,
  }
})

const updateParam = () => {
  selectedParams.sort = ''
  selectedParams.page = 1
  refetch()
}

const updateSort = () => {
  refetch()
}

const deleteParam = () => {
  selectedParams.page = 1
  selectedParams.per_page = 6
  selectedParams.category = ''
  selectedParams.schedule = []
  selectedParams.employment = []
  selectedParams.work_format = []
  selectedParams.salary_min = ''
  selectedParams.salary_max = ''
  refetch()
}

const pageChange = () => {
  refetch()
}

const queryClient = useQueryClient()

const { isPending, isError, data, error, refetch } = useQuery({
  queryKey: ['vacancies', params],
  queryFn: async () => {
    const response = await getVacancy(params.value)
    return response.data
  },
  placeholderData: keepPreviousData,
})
</script>

<template>
  <VacancyListLayout name="Вакансии">
    <div class="container">
      <Filters v-model="selectedParams" :updateParam="updateParam" :deleteParam="deleteParam" />
      <VacancyList
        v-if="data"
        v-model:sort="selectedParams.sort"
        v-model:curent="selectedParams.page"
        :updateSort="updateSort"
        :data="data.items"
        :len="data.len"
        :pageChange="pageChange"
        :per_page="selectedParams.per_page"
      />
    </div>
  </VacancyListLayout>
</template>

<style scoped>
.container {
  display: flex;
  gap: 1.5rem;
  padding-top: 2.75rem;
}
</style>