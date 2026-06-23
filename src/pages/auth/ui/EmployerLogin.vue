<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Input } from '@/shared/ui/input'
</script>

<template>
  <div class="block">
    <div class="title">
      <Typography type="">Вход для работодателя</Typography>
      <Typography type=""></Typography>
    </div>
    <Input label="Email" placeholder="user123@company.ru" :required="true" />
    <Input />
  </div>
</template>

<style scoped>
.block{
  box-sizing: border-box;
  padding: 60px 50px;
  width: 100%;
  border: 2px solid var(--color-grey-light);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
</style>
