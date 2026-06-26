<script setup lang="ts">
import { ProfileObertka } from '@/shared/ui/profileObertka'
import { Typography } from '@/shared/ui/typography'
import { Pagination } from '@/shared/ui/pagination'
import { useQuery } from '@tanstack/vue-query'
import { getOtcliki } from '@/features/otclicki/api/get-otcliki.ts'
import { reactive } from 'vue'
import Card from '@/features/otclicki/ui/Card.vue'

const pagination = reactive({
  page: 1,
  per_page: 3,
})

const { isPending, isError, data, error, refetch } = useQuery({
  queryKey: ['vacancies'],
  queryFn: async () => {
    const response = await getOtcliki({ page: pagination.page, per_page: pagination.per_page })
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
      <Typography type="semibold-32-black">История откликов</Typography>
      <div class="card_list" v-if="data">
        <Card v-for="(item, index) in data.items" :key="item.id" :item="item" />
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
  width: 100%;
  background-color: var(--color-white);
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 !important;
  //border: 1px solid ;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.card_list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}
</style>