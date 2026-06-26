<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { IconBox } from '@/shared/ui/iconBox'

interface Props {
  number?: string
  h1?: string
  h2?: string
  svg?: string
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <div class="ui">
      <IconBox type="red" class="square" :name="svg" />
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