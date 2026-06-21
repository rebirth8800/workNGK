<script setup>
import SearchIcon from '@/shared/svg/search-black.svg'
import {Typography} from "@/shared/ui/typography";
</script>

<template>
<div class="block">
  <Typography type="semibold-24-black">Поиск</Typography>
  <div class="search">
    <SearchIcon class="icon-search"></SearchIcon>
    <input type="text" class="search-input" placeholder="Название вакансии...">
  </div>
</div>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

.search {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: var(--color-background-grey);
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  padding: 20px 20px;
  box-sizing: border-box;
}

.icon-search {
  width: 24px;
  height: 24px;
}

.search-input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-almost-black);
  font-family: 'Inter', sans-serif;
  width: auto;
}
</style>