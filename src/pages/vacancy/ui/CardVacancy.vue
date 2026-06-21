<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'

defineProps({
  item: Object,
})
</script>

<template>
  <div class="card">
    <Typography  type="semibold-32-black">{{item.title}}</Typography>
    <Typography  type="regular-20-black">{{item.company_name}}</Typography>
  </div>
</template>

<style scoped>
.card{
  padding: 16px;
  border: 1px solid var(--color-grey-light);

}
</style>