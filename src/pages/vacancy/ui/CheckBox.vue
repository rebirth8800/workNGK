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
  width: 35px;
  height: 35px;
  /* background-color: var(--color-background-grey); */
  /* border: 1px solid var(--color-grey-light); */
  /* border-radius: 5px; */
}
input[type="checkbox"] {
  accent-color: var(--color-primary-red);
  width: 35px;
  height: 35px;
}

@media (max-width: 1440px){
  input {
    width: 25px;
    height: 25px;
  }
  input[type="checkbox"] {
    width: 25px;
    height: 25px;
  }
}
@media (max-width: 768px){
  input {
    width: 20px;
    height: 20px;
  }
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
}
@media (max-width: 360px){
  input {
    width: 20px;
    height: 20px;
  }
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
}
</style>
