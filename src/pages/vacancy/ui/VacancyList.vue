<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import CardVacancy from '@/pages/vacancy/ui/CardVacancy.vue'
import ArrowLeft from '@/shared/svg/arrow-left.svg'
import ArrowRight from '@/shared/svg/arrow-right.svg'
import SortVacancy from "@/pages/vacancy/ui/SortVacancy.vue";


const selectedSort = defineModel('sort',{
  type: String,
})
const selectedPage = defineModel('curent',{
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

<template>
  <div class="block">
    <div class="header-info">
      <div class="info">
        <Typography type="light-24-black">Найдено:</Typography>
        <Typography type="medium-24-black">{{len}} вакансий</Typography>
      </div>

      <SortVacancy class="sort" v-model="selectedSort" :updateSort="updateSort"/>

    </div>


    <div class="card_list">
      <CardVacancy v-for="item in data" :key="item.id" :item="item"/>
    </div>

    <a-pagination
      v-model:current="selectedPage"
      :total="len"
      :page-size="per_page"
      @change="pageChange()"
      show-less-items
      :show-quick-jumper="false"
    />


  </div>
</template>

<style scoped>




/* Контейнер пагинации */
.pagination-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin: 0 auto;
  border-top: 1px solid var(--color-grey-light);
}

/* Кнопки пагинации (цифры) */
.ant-pagination-item {
  min-width: 32px;
  height: 32px;
  line-height: 30px;
  border-radius: 8px;
  border: 1px solid var(--color-grey-light);
  background: var(--color-background-grey);
  font-size: 14px;
  color: var(--color-black);
  transition: all 0.3s ease;
}

/* Активная страница */
:deep(.ant-pagination-item-active) {
  background: var(--color-primary-red);
  border-color: var(--color-primary-red);
}
:deep(.ant-pagination-item-active a) {
  color: white;
  font-weight: 600;
}

/* Ховер на кнопках */
:deep(.ant-pagination-item:hover) {
  border-color: var(--color-primary-red);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Кнопки "Назад" и "Вперед" */
:deep(.ant-pagination-prev),
:deep(.ant-pagination-next) {
  min-width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid var(--color-grey-light);
  background: var(--color-background-grey);
  transition: all 0.3s ease;
}




.block{
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.card_list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.controls-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid var(--color-grey-light);
}

.arrow-btn {
  width: 48px;
  height: 48px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-grey);
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  cursor: pointer;
}

.arrow-btn:hover {
  background-color: var(--color-primary-red);
  border-color: var(--color-primary-red);
  color: white;
}

.arrow-btn svg {
  width: 24px;
  height: 24px;
}

.page-info {
  font-size: 1rem;
  color: var(--color-almost-black);
  font-weight: 500;
}
.info{
  display: flex;
  gap: 5px;
  margin-left: 0;
}
.header-info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.sort{
  margin-right: 0;
}
</style>