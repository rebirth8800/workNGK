<script setup lang="ts">
import { ProfileObertka } from '@/shared/ui/profileObertka'
import { Pagination } from '@/shared/ui/pagination'
import { Typography } from '@/shared/ui/typography'
import { reactive } from 'vue'
import { keepPreviousData, useQuery } from '@tanstack/vue-query'
import { getAdminEmployers } from '@/features/admin-employers/api/get-employers-admin.ts'
import Card from '@/features/admin-employers/ui/Card.vue'

const pagination = reactive({
  page: 1,
  per_page: 3,
})

const { isPending, isError, data, error, refetch } = useQuery({
  queryKey: ['admin-employers', pagination],
  queryFn: async () => {
    const response = await getAdminEmployers({
      page: pagination.page,
      per_page: pagination.per_page,
    })
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

      <div class="card_list" v-if="data?.len>0">
        <!--        {{data?.len}}-->
        <Card v-for="item in data?.items" :key="item.id" :item="item" />
      </div>
      <Pagination
        v-if="data?.len>0"
        :len="data?.len"
        :per_page="pagination.per_page"
        :pageChange="pageChange"
        v-model="pagination.page"
      />
      <Typography type="regular-16-almost-black" v-else>Нет заявок на рассмотрение</Typography>
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
