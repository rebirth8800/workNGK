<script setup lang="ts">
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query'
import DefaultLayout from '@/app/layout/DefaultLayout.vue'
import { getVacancy } from '@/pages/vacancy/api/get-vacancy'
import VacancyListLayout from '@/app/layout/VacancyListLayout.vue'
import Filters from '@/pages/vacancy/ui/Filters.vue'
import { provide, reactive, ref } from 'vue'
import { Button } from '@/shared/ui/button'
import SearchVacancy from "@/pages/vacancy/ui/SearchVacancy.vue";
import Zarplata from "@/pages/vacancy/ui/Zarplata.vue";

const filters = {
  page: 1,
  per_page: 5,
}

const selectedFilters = reactive({
  category: '',
  schedule: [],
  employment: [],
  work_format: []
})



// const queryClient = useQueryClient()
//
// // Query
// const { isPending, isError, data, error } = useQuery({
//   queryKey: ['todos'],
//   queryFn: () => getVacancy(filters),
// })


</script>


<template>
  <VacancyListLayout name="Вакансии">
    <div class="container">
      <Button @click="console.log(selectedFilters)">244</Button>
      <SearchVacancy></SearchVacancy>
      <Filters v-model="selectedFilters" />
      <Zarplata></Zarplata>
      <!--    <Typogra.Header level={2}></Typogra.Header>-->
      <!--    <Typo></Typo>-->
      <!--    <Skeleton v-if="isPending" />-->
      <!--    <Error v-if="isError" :error="error" />-->
      <!--    <VacancyList v-if="data" vacalny="data.items"/>-->
    </div>

  </VacancyListLayout>
</template>

<style scoped>

</style>