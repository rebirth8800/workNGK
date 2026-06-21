<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'

defineProps({
  data: Array,
})
import CardVacancy from '@/pages/vacancy/ui/CardVacancy.vue'
</script>

<template>
  <div class="block">
    <div class="info">
      <Typography>12334</Typography>
<!--      <Sort/>-->
    </div>
    <div class="card_list">
      <CardVacancy v-for="item in data" :key="item.id" :item="item"/>
    </div>
  </div>
</template>

<style scoped>
.card_list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>