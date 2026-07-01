<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { ProfileObertka } from '@/shared/ui/profileObertka'
import { Pagination } from '@/shared/ui/pagination'
import { Typography } from '@/shared/ui/typography'
import { reactive } from 'vue'
import { keepPreviousData, useQuery } from '@tanstack/vue-query'
import { getAdminVacancy } from '@/features/admin-vacancies/api/get-vacancy-admin.ts'
import Card from '@/features/admin-vacancies/ui/Card.vue'

const pagination = reactive({
  page: 1,
  per_page: 3,
})

const { isPending, isError, data, error, refetch } = useQuery({
  queryKey: ['admin-vacancies', pagination],
  queryFn: async () => {
    const response = await getAdminVacancy({ page: pagination.page, per_page: pagination.per_page })
    return response.data
  },
  placeholderData: keepPreviousData,
})
const pageChange = () => {
  refetch()
}
</script>

<template>
  <ProfileObertka>
    <div class="block">
      <div class="title">
        <Typography type="semibold-32-black">Вакансии на рассмотрение</Typography>
      </div>
      <div class="card_list">
        <Card v-for="item in data?.items" :key="item.id" :item="item" />
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

<style scoped>
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

.card_list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
