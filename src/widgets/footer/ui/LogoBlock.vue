<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Logo } from '@/shared/ui/logo'
</script>

<template>
  <div class="block">
    <Logo/>
    <Typography type="regular-20-almost-black">Платформа трудоустройства студентов Нижегородского Губернского колледжа</Typography>
  </div>

</template>

<style scoped>
.block{
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 1.3rem;
}

</style>
