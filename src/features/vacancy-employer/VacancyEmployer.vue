<script setup lang="ts">
import { ProfileObertka } from '@/shared/ui/profileObertka'
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import { useQuery } from '@tanstack/vue-query'
import { reactive } from 'vue'
import { getVacancyEmployer } from '@/features/vacancy-employer/api/get-vacancy-employer.ts'
import { Pagination } from '@/shared/ui/pagination'
import Card from '@/features/vacancy-employer/ui/Card.vue'

const pagination = reactive({
  page: 1,
  per_page: 3,
})

const { isPending, isError, data, error, refetch } = useQuery({
  queryKey: ['vacancies'],
  queryFn: async () => {
    const response = await getVacancyEmployer({ page: pagination.page, per_page: pagination.per_page })
    return response.data
  },
})

const pageChange = () => {
  refetch()
}

</script>

<template>
  <ProfileObertka>
    <div class="block">
      <div class="title">
        <Typography type="semibold-32-black">Мои вакансии</Typography>
        <RouterLink to="/vacancies/create"><Button>Создать вакансию</Button></RouterLink>
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
</template>

<style scoped></style>
