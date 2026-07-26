<script setup>
import SearchIcon from '@/shared/svg/search-black.svg'
import {Typography} from "@/shared/ui/typography";

const search = defineModel({
  type: String,
})

</script>

<template>
<div class="block">
  <Typography type="semibold-20-black">Поиск</Typography>
  <div class="search">
    <SearchIcon class="icon-search"/>
    <input type="text" class="search-input" v-model="search" placeholder="Название вакансии...">
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
  padding: 15px 15px;
  box-sizing: border-box;
}

.icon-search {
  width: 20px;
  height: 20px;
}

.search-input {
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-almost-black);
  font-family: 'Inter', sans-serif;
  width: auto;
}

@media (max-width: 768px){
  .search-input {
    font-size: 1rem;
  }
  .icon-search {
    width: 22px;
    height: 22px;
  }
}
@media (max-width: 360px){
  .search-input {
    font-size: 0.875rem;
  }
  .icon-search {
    width: 17px;
    height: 17px;
  }
}
</style>