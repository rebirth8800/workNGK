<script setup lang="ts">
import {computed, defineComponent} from 'vue'
import { Typography } from '@/shared/ui/typography'
import { IconBox } from '@/shared/ui/iconBox'
const props = defineProps({
  number: String,
  h1: String,
  h2: String,
  svg: String,
})
const Icon = computed(() => {
  // Используем import.meta.glob для Vite
  const icons = import.meta.glob(`@/shared/svg/*.svg`, {
    eager: true,
    import: 'default'
  })
  // Ищем иконку по имени
  const path = `/src/shared/svg/${props.svg}.svg`
  return icons[path]
})

</script>

<template>
  <div class="card">
    <div class="ui">
      <IconBox type="red" class="square" ><Icon/></IconBox>
      <Typography type="semibold-40-grey-light">{{ number }}</Typography>
    </div>
    <Typography type="semibold-32-black">{{ h1 }}</Typography>
    <Typography type="regular-20-almost-black">{{ h2 }}</Typography>
  </div>
</template>

<style scoped>
.card {
  padding: 35px 25px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid var(--color-grey-light);
  border-radius: 10px;
}
.ui {
  display: flex;
  margin: 0;
  justify-content: space-between;
}
</style>
