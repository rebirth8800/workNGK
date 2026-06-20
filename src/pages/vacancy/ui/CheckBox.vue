<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { inject } from 'vue'

defineProps({
  item: Object,
  name: String,
})
const model = defineModel({
  type: Array,
  default: ()=>[]
})
</script>

<template>
  <div class="block">
    <Typography type="semibold-24-black">{{ name }}</Typography>
    <div class="check" v-for="i of item">
      <input type="checkbox" v-model="model" :value="i.value" />
      <Typography type="regular-20-black">{{ i.name }}</Typography>
    </div>
  </div>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-left: 0;
}
.check {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 0;
}
input {
  width: 25px;
  height: 25px;
}
</style>
