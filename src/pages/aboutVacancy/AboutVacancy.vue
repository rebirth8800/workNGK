<script setup lang="ts">
import VacancyLayout from '@/app/layout/VacancyLayout.vue'
import { Button } from '@/shared/ui/button'
import { useRoute } from 'vue-router'
import { useQuery, useQueryClient } from '@tanstack/vue-query'
import { getVacancy } from '@/pages/aboutVacancy/api/get-vacancy.ts'
import MainInfo from "@/pages/aboutVacancy/ui/MainInfo.vue";
import Responsibilities from "@/pages/aboutVacancy/ui/Responsibilities.vue";
import Contact from "@/pages/aboutVacancy/ui/Contact.vue";
const route = useRoute()

const queryClient = useQueryClient()

const { isPending, isError, data, error } = useQuery({
  queryKey: ['vacancies', route.params.id],
  queryFn: async () => {
    const response = await getVacancy(route.params.id)
    return response.data
  },
})
</script>
<template>
  <VacancyLayout>
    <div class="container">
<!--      {{data}}-->

      <MainInfo v-if="data" :item="data" />

      <div v-if="isPending" class="loading">Загрузка...</div>

      <div v-if="isError" class="error">Ошибка: {{ error.message }}</div>

      <Brief v-if="data" :item="data" />

      <Responsibilities v-if="data" :item="data" />
      <div class="main-info">
        <Contact v-if="data" :item="data"  />

        <Button class="bth">Откликнуться</Button>
      </div>
    </div>
  </VacancyLayout>
</template>

<style scoped>
.main-info {
  width: 83.25rem;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 2.75rem;
}
.bth{
  margin-left: 0;
}
</style>
