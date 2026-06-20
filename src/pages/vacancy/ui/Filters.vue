<script setup lang="ts">
import { useQueryClient, useQuery } from '@tanstack/vue-query'
import { getFilters } from '@/pages/vacancy/api/get-filters.ts'
import CheckBox from '@/pages/vacancy/ui/CheckBox.vue'
import Category from '@/pages/vacancy/ui/Category.vue'
import { Button } from '@/shared/ui/button'
import { reactive } from 'vue'

const selectedFilters = defineModel({
  type: Object,
  default: () => ({}),
})

const queryClient = useQueryClient()

// Query
const { isPending, isError, data, error } = useQuery({
  queryKey: ['filter'],
  queryFn: async () => {
    const response = await getFilters()
    console.log(response)
    return response.data
  },
})

console.log(data)


</script>

<template>
  <div class="block" v-if="data">
    <!--  <Search/>-->
    <Category :item="data.category" v-model="selectedFilters.category"/>
    <CheckBox name="График работы" :item="data.schedule" v-model="selectedFilters.schedule" />
    <CheckBox name="Занятость" :item="data.employment" v-model="selectedFilters.employment"  />
    <CheckBox name="Формат работы" :item="data.work_format" v-model="selectedFilters.work_format" />
    <!--  <Sale/>-->
  </div>

</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-left: 0;
}
</style>