<script setup lang="ts">
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query'
import GuestLayout from '@/app/layout/GuestLayout.vue'
import { getVacancy } from '@/pages/vacancy/api/get-vacancy'

const filters = {
  page: 1,
  per_page: 5,
}

const queryClient = useQueryClient()

// Query
const { isPending, isError, data, error } = useQuery({
  queryKey: ['todos'],
  queryFn: () => getVacancy(filters),
})


</script>


<template>
  <GuestLayout title="Вакансии">
    <Filters />
    <Typogra.Header level={2}></Typogra.Header>
    <Typo></Typo>
    <Skeleton v-if="isPending" />
    <Error v-if="isError" :error="error" />
    <VacancyList v-if="data" vacalny="data.items"/>
  </GuestLayout>
</template>

<style scoped>

</style>