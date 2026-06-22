<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import IconArrowDown from "@/shared/svg/arrow-down.svg";

</script>

<template>
  <div class="block">
    <Typography type="light-24-black">Сортировка:</Typography>

    <div class="sort-selector">
      <span class="sort-label">По дате (сначала новые)</span>
      <IconArrowDown></IconArrowDown>
    </div>
  </div>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.sort-selector {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background-color: var(--color-background-grey);
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  cursor: pointer;
}

.sort-label {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-black);
}

.sort-arrow {
  flex-shrink: 0;
}
</style>