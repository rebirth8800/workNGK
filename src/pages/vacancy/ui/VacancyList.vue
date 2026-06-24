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
    <div class="pagination-wrapper">
      <a-pagination
        v-model:current="selectedPage"
        :total="len"
        :page-size="per_page"
        @change="pageChange()"
        show-less-items
        :show-quick-jumper="false"
        :show-size-changer="false"
        :show-total="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import CardVacancy from '@/pages/vacancy/ui/CardVacancy.vue'
import ArrowLeft from '@/shared/svg/arrow-left.svg'
import ArrowRight from '@/shared/svg/arrow-right.svg'
import SortVacancy from "@/pages/vacancy/ui/SortVacancy.vue"

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

/* ===== ПАГИНАЦИЯ ===== */
.pagination-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  margin-top: 10px;
  border-top: 1px solid var(--color-grey-light);
}

:deep(.ant-pagination) {
  display: flex !important;
  justify-content: center !important;
  gap: 10px !important;
  align-items: center !important;
}

:deep(.ant-pagination-item) {
  min-width: 50px !important;
  height: 50px !important;
  line-height: 48px !important;
  font-size: 18px !important;
  border-radius: 12px !important;
  border: 1px solid var(--color-grey-light) !important;
  background: var(--color-background-grey) !important;
  color: var(--color-black) !important;
  transition: all 0.3s ease !important;
  margin: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

:deep(.ant-pagination-item a) {
  color: var(--color-black) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
  height: 100% !important;
}

:deep(.ant-pagination-item-active) {
  background: var(--color-primary-red) !important;
  border-color: var(--color-primary-red) !important;
}

:deep(.ant-pagination-item-active a) {
  color: white !important;
  font-weight: 600 !important;
}

:deep(.ant-pagination-item:hover) {
  border-color: var(--color-primary-red) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

/* ===== КНОПКИ НАЗАД/ВПЕРЕД ===== */
:deep(.ant-pagination-prev),
:deep(.ant-pagination-next) {
  min-width: 50px !important;
  height: 50px !important;
  border-radius: 12px !important;
  border: 1px solid var(--color-grey-light) !important;
  background: var(--color-background-grey) !important;
  transition: all 0.3s ease !important;
  margin: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

:deep(.ant-pagination-prev:hover),
:deep(.ant-pagination-next:hover) {
  border-color: var(--color-primary-red) !important;
}

:deep(.ant-pagination-prev .ant-pagination-item-link),
:deep(.ant-pagination-next .ant-pagination-item-link) {
  font-size: 20px !important;
  color: var(--color-black) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
  height: 100% !important;
}

/* ===== ТРИ ТОЧКИ ===== */
:deep(.ant-pagination-jump-prev),
:deep(.ant-pagination-jump-next) {
  min-width: 50px !important;
  height: 50px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 12px !important;
  margin: 0 !important;
}

:deep(.ant-pagination-jump-prev .ant-pagination-item-container),
:deep(.ant-pagination-jump-next .ant-pagination-item-container) {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
  height: 100% !important;
}

:deep(.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link),
:deep(.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link) {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
  height: 100% !important;
  font-size: 20px !important;
  line-height: 1 !important;
  color: var(--color-black) !important;
  background: transparent !important;
  border: none !important;
}

:deep(.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link .anticon),
:deep(.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link .anticon) {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 20px !important;
  line-height: 1 !important;
}

:deep(.ant-pagination-jump-prev:hover),
:deep(.ant-pagination-jump-next:hover) {
  border-color: var(--color-primary-red) !important;
  border-radius: 12px !important;
  background: var(--color-background-grey) !important;
}

:deep(.ant-pagination-options) {
  display: none !important;
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

  .pagination-wrapper {
    padding: 12px 0;
  }

  :deep(.ant-pagination) {
    gap: 6px !important;
  }

  :deep(.ant-pagination-item),
  :deep(.ant-pagination-prev),
  :deep(.ant-pagination-next),
  :deep(.ant-pagination-jump-prev),
  :deep(.ant-pagination-jump-next) {
    min-width: 40px !important;
    height: 40px !important;
    border-radius: 10px !important;
  }

  :deep(.ant-pagination-item) {
    line-height: 38px !important;
    font-size: 16px !important;
  }

  :deep(.ant-pagination-prev .ant-pagination-item-link),
  :deep(.ant-pagination-next .ant-pagination-item-link),
  :deep(.ant-pagination-jump-prev .ant-pagination-item-link),
  :deep(.ant-pagination-jump-next .ant-pagination-item-link) {
    font-size: 16px !important;
  }
}

@media (max-width: 480px) {
  :deep(.ant-pagination) {
    gap: 4px !important;
  }

  :deep(.ant-pagination-item),
  :deep(.ant-pagination-prev),
  :deep(.ant-pagination-next),
  :deep(.ant-pagination-jump-prev),
  :deep(.ant-pagination-jump-next) {
    min-width: 32px !important;
    height: 32px !important;
    border-radius: 8px !important;
  }

  :deep(.ant-pagination-item) {
    line-height: 30px !important;
    font-size: 14px !important;
  }

  :deep(.ant-pagination-prev .ant-pagination-item-link),
  :deep(.ant-pagination-next .ant-pagination-item-link),
  :deep(.ant-pagination-jump-prev .ant-pagination-item-link),
  :deep(.ant-pagination-jump-next .ant-pagination-item-link) {
    font-size: 14px !important;
  }
}
</style>