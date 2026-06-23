<script setup lang="ts">
import VacancyLayout from '@/app/layout/VacancyLayout.vue'
import { Button } from '@/shared/ui/button'
import { useRoute } from 'vue-router'
import { useQuery, useQueryClient } from '@tanstack/vue-query'
import { getVacancy } from '@/pages/aboutVacancy/api/get-vacancy.ts'
import MainInfo from '@/pages/aboutVacancy/ui/MainInfo.vue'
import Responsibilities from '@/pages/aboutVacancy/ui/Responsibilities.vue'
import Contact from '@/pages/aboutVacancy/ui/Contact.vue'
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
    <div class="section">
      <MainInfo v-if="data" :item="data" />
      <div class="container" v-if="isPending"><div  class="loading">Загрузка...</div></div>
      <div class="container" v-if="isError"><div  class="error">Ошибка: {{ error.message }}</div></div>
      <div class="background" v-if="data" >
        <Responsibilities  :item="data" />
      </div>
      <div class="container">
        <div class="main-info" v-if="data">
          <Contact  :item="data" />
          <Button class="bth">Откликнуться</Button>
        </div>
      </div>


    </div>
  </VacancyLayout>
</template>

<style scoped>

.background {
  width: 100%;
  background-color: var(--color-background-grey);
  padding: 23px 0;
}
.main-info {
  width: 83.25rem;
}
.section {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 2.75rem;
}
.bth {
  margin-left: 0;
}
</style>
