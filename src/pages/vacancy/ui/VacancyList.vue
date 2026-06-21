<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import CardVacancy from '@/pages/vacancy/ui/CardVacancy.vue'
import ArrowLeft from '@/shared/svg/arrow-left.svg'
import ArrowRight from '@/shared/svg/arrow-right.svg'

defineProps({
  data: Array,
})
</script>

<template>
  <div class="block">
    <div class="info">
      <Typography>12334</Typography>
    </div>

    <div class="card_list">
      <CardVacancy v-for="item in data" :key="item.id" :item="item"/>
    </div>

    <div class="controls-between">
      <button class="arrow-btn">
        <ArrowRight />
      </button>

      <Typography type="regular-20-black">1 / 3</Typography>

      <button class="arrow-btn">
        <ArrowLeft />
      </button>
    </div>
  </div>
</template>

<style scoped>
.card_list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
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
</style>