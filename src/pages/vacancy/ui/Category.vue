<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { ref } from 'vue'

defineProps({
  item: Object,
})

const selected = defineModel({
  type: String,
  default: ''
})

const flag = ref(false)

</script>

<template>
  <div class="block">
    <Typography type="semibold-24-black">Категория</Typography>
    <button @click="flag = !flag">Все категории</button>
    <div class="block" v-if="flag">
      <Typography
        type="regular-20-black"
        v-for="option in item"
        :key="option.value"
        class="radio"
        :class="{active: selected === option.value }"
        @click="selected = option.value"
      >
      {{ option.name }}
    </Typography>
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
.radio {
  cursor: pointer;
}
.active{
  border: 1px solid var(--color-grey-light);
  padding: 5px;
}
</style>
