<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { ref } from 'vue'

interface Option {
  value: string
  name: string
}

interface Props {
  item?: Option[]
}

defineProps<Props>()

const selected = defineModel<string>({ default: '' })
const flag = ref(false)
</script>

<template>
  <div class="block">
    <Typography type="semibold-20-black">Категория</Typography>

    <div class="dropdown-wrapper">
      <button @click="flag = !flag" class="toggle-btn">
        <p>Все категории</p>
        <p> > </p>
      </button>

      <div v-if="flag" class="dropdown-list">
        <Typography
            type="regular-15-black"
            v-for="option in item"
            :key="option.value"
            class="radio"
            :class="{ active: selected === option.value }"
            @click="selected = option.value"
        >
          {{ option.name }}
        </Typography>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 0;
}

.dropdown-wrapper {
  display: flex;
  flex-direction: column;
  width: 264px;
}

.toggle-btn {
  background-color: var(--color-red-light);
  border: none;
  color: var(--color-primary-red);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 16px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 5rem;
  border-radius: 6px;
  width: 100%;
  height: 53px;
  box-sizing: border-box;
}

.dropdown-list {
  background-color: var(--color-white);
  border-radius: 6px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  width: 100%;
  box-sizing: border-box;
}

.radio {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.radio:hover {
  background-color: var(--color-red-light);
}

.active {
  background-color: var(--color-red-light);
  font-weight: 600;
}

@media (max-width: 1440px){
  .toggle-btn {
    font-size: 1.25rem;
  }
}
@media (max-width: 768px){
  .toggle-btn {
    font-size: 1rem;
    height: 47px;
  }

}
@media (max-width: 360px){
  .toggle-btn {
    font-size: 1rem;
    height: 47px;
  }
}
</style>