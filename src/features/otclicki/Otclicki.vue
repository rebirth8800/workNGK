<script setup lang="ts">
import { ProfileObertka } from '@/shared/ui/profileObertka'
import { Typography } from '@/shared/ui/typography'
import { Pagination } from '@/shared/ui/pagination'
import { useQuery } from '@tanstack/vue-query'
import { getOtcliki } from '@/features/otclicki/api/get-otcliki.ts'
import { reactive } from 'vue'
import Card from '@/features/otclicki/ui/Card.vue'
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
    const response = await getOtcliki(user?.id, {
      page: pagination.page,
      per_page: pagination.per_page,
    })
    return response.data
  },
})

const pageChange = () => {
  refetch()
}
</script>

<template>
  <div class="otkliki-container">
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
  </div>
</template>

<style scoped>
.otkliki-container {
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

.otkliki-container * {
  margin: 0 !important;
}

.block {
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  background-color: var(--color-white) !important;
  border-radius: 10px !important;
  box-sizing: border-box !important;
  margin: 0 !important;
}

.card_list {
  display: flex !important;
  flex-direction: column !important;
  gap: 25px !important;
  width: 100% !important;
  margin-top: 30px !important;
  padding: 0 !important;
}

.card_list > * {
  margin: 0 !important;
}

:deep(.ant-pagination) {
  margin-top: 30px !important;
}
</style>