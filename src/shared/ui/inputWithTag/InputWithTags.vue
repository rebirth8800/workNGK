<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import CloseIcon from '@/shared/svg/krest.svg'

interface Props {
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Введите пункт...',
})

const items = defineModel<string[]>()

const inputValue = ref('')

const addItem = () => {
  if (inputValue.value.trim()) {
    items.value.push(inputValue.value.trim())
    inputValue.value = ''
  }
}

const removeItem = (index: number) => {
  items.value.splice(index, 1)
}

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    addItem()
  }
}
</script>

<template>
  <div class="input-list">

    <input
        v-model="inputValue"
        :placeholder="placeholder"
        class="custom-input"
        @keypress="handleKeyPress"
    />


    <div class="button-wrapper">
      <Button  type="none-back-red" class="add-button" @click.prevent="addItem">
        + Добавить пункт
      </Button>
    </div>

    <!-- Список добавленных элементов -->
    <div v-if="items.length > 0" class="items-list">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="item-row"
      >
        <div class="item-content">
          <span class="bullet"></span>
          <Typography type="regular-20-black">{{ item }}</Typography>
        </div>
        <button  class="remove-button" @click.prevent="removeItem(index)">
          <CloseIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.custom-input {
  width: 100%;
  padding: 15px;
  border: 1px solid #BBB9B9;
  border-radius: 10px;
  font-size: 1.125rem;
  background: var(--color-grey-light);
  color:var(--color-almost-black);
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.custom-input::placeholder {
  color: var(--color-almost-black);
  font-size: 1.125rem;
}

.custom-input:focus {
  border-color: var(--color-almost-black);
}

.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.add-button {
  flex-shrink: 0;
  white-space: nowrap;
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
}

.item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  border-radius: 10px;
  box-sizing: border-box;
}

.item-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.bullet {
  width: 8px;
  height: 8px;
  background: var(--color-almost-black);
  border-radius: 50%;
  flex-shrink: 0;
}

.item-content .typography {
  font-size: 1.25rem !important;
  font-weight: 400 !important;
  color: var(--color-black) !important;
  margin: 0;
}

.remove-button {
  background: var(--color-primary-red);
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: opacity 0.3s ease;
  flex-shrink: 0;
}

.remove-button:hover {
  opacity: 0.8;
}

.remove-button svg {
  display: block;
  fill: white;
}

.remove-button :deep(svg) {
  fill: white;
}
</style>