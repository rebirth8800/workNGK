<template>
  <div class="block">
    <div class="header-info">
      <div class="info">
        <Typography type="light-15-black">Найдено:</Typography>
        <Typography type="medium-15-black">{{ len }} вакансий</Typography>
      </div>

      <SortVacancy class="sort" v-model="selectedSort" :updateSort="updateSort" />
    </div>

    <div class="card_list">
      <CardVacancy v-for="item in data" :key="item.id" :item="item" />
    </div>

    <!-- Пагинация -->
    <Pagination :len="len" :per_page="per_page" :pageChange="pageChange" v-model="selectedPage" />
  </div>
</template>

<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import CardVacancy from '@/pages/vacancy/ui/CardVacancy.vue'
import ArrowLeft from '@/shared/svg/arrow-left.svg'
import ArrowRight from '@/shared/svg/arrow-right.svg'
import SortVacancy from "@/pages/vacancy/ui/SortVacancy.vue"
import { Pagination } from '@/shared/ui/pagination'

interface Props {
  data?: any[]
  len?: number
  pageChange?: () => void
  updateSort?: () => void
  per_page?: number
}

const selectedSort = defineModel<string>('sort', { default: '' })
const selectedPage = defineModel<number>('curent', { default: 1 })

defineProps<Props>()
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 0;
}

.card_list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.header-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.info {
  display: flex;
  gap: 5px;
  margin-left: 0;
}

.sort {
  margin-right: 0;
}



</style>