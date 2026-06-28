<script setup lang="ts">
import { ProfileObertka } from '@/shared/ui/profileObertka'
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import { useQuery } from '@tanstack/vue-query'
import { reactive } from 'vue'
import { getVacancyEmployer } from '@/features/vacancy-employer/api/get-vacancy-employer.ts'
import { Pagination } from '@/shared/ui/pagination'
import Card from '@/features/vacancy-employer/ui/Card.vue'
import InfoAboutOtklic from "@/features/vacancy-employer/ui/InfoAboutOtklic.vue"
import { useAuthStore } from '@/entities/user'

const authStore = useAuthStore()

const user = authStore.user

const pagination = reactive({
  page: 1,
  per_page: 3,
})

const { isPending, isError, data, error, refetch } = useQuery({
  queryKey: ['vacancies'],
  queryFn: async () => {
    const response = await getVacancyEmployer(user?.id, { page: pagination.page, per_page: pagination.per_page })
    return response.data
  },
})

const pageChange = () => {
  refetch()
}
</script>

<template>
  <div class="vacancy-page">
    <ProfileObertka>
      <div class="block">
        <div class="title">
          <Typography type="semibold-32-black">Мои вакансии</Typography>
          <RouterLink to="/vacancies/create"><Button class="bth">+ Создать вакансию</Button></RouterLink>
        </div>
        <div class="card_list">
          <Card v-for="item in data?.items" :key="item.id" :item="item"/>
        </div>
        <Pagination
            :len="data?.len"
            :per_page="pagination.per_page"
            :pageChange="pageChange"
            v-model="pagination.page"
        />
      </div>
    </ProfileObertka>

    <div class="info-wrapper">
      <InfoAboutOtklic />
    </div>
  </div>
</template>

<style scoped>
.vacancy-page {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: var(--color-background-grey);
  padding: 0;
  box-sizing: border-box;
}

.block {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.bth {
  margin-right: 0;
  flex-shrink: 0;
}

.card_list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-wrapper {
  width: 100%;
  max-width: 100%;
  padding: 0;
  box-sizing: border-box;
}

.info-wrapper :deep(.container) {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
  margin: 0 !important;
}
</style>