<script setup lang="ts">
import VacancyLayout from '@/app/layout/VacancyLayout.vue'
import { Button } from '@/shared/ui/button'
import { useRoute } from 'vue-router'
import { useQuery, useQueryClient } from '@tanstack/vue-query'
import { getVacancy } from '@/pages/aboutVacancy/api/get-vacancy.ts'
const route = useRoute()

const queryClient = useQueryClient()

const { isPending, isError, data, error } = useQuery({
  queryKey: ['vacancies'],
  queryFn: async () => {
    const response = await getVacancy(route.params.id)
    return response.data
  },
})
</script>

<template>
  <VacancyLayout>
    <MainInfo />
    {{data}}
    <Brief />
    <div class="block">
      <Responsibilities />
      <Contact />
      <Button></Button>
    </div>
  </VacancyLayout>
</template>

<style scoped>
.block {
  width: 83.25rem;
}
</style>
