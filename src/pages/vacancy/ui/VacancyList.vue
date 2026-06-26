<template>
  <div class="block">
    <div class="header-info">
      <div class="info">
        <Typography type="light-24-black">Найдено:</Typography>
        <Typography type="medium-24-black">{{ len }} вакансий</Typography>
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

const selectedSort = defineModel('sort', {
  type: String,
})
const selectedPage = defineModel('curent', {
  type: Number,
})

defineProps({
  data: Array,
  len: Number,
  pageChange: Function,
  updateSort: Function,
  per_page: Number,
})
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-right: 0;
}

.card_list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
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



/* ===== АДАПТИВ ===== */
@media (max-width: 768px) {
  .card_list {
    grid-template-columns: 1fr;
  }

  .header-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .sort {
    margin-right: 0;
    width: 100%;
  }


}

@media (max-width: 480px) {

}
</style>