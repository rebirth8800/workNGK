<script setup lang="ts">
import {Typography} from "@/shared/ui/typography";

defineProps({
  item: Object
})
</script>

<template>
  <div class="card">
    <div class="content-left">
      <div class="content-title">
        <Typography type="semibold-24-black">{{ item.title }}</Typography>
        <Typography type="regular-20-almost-black">{{ item.company_name }}</Typography>
      </div>
      <Typography type="semibold-20-black">от {{ item.salary }} ₽</Typography>
    </div>
    <div class="content-right">
      <Typography type="regular-16-almost-black">{{ item.date }}</Typography>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background-color: var(--color-white);
  border: 1px solid  #BBB9B9;
  border-radius: 10px;
  padding: 30px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.content-title {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.content-left {
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 0;
}

.content-right {
  flex-shrink: 0;
  margin-left: auto;
}
</style>