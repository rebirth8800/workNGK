<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'

const salary_min = defineModel('min', {
  type: String,
})

const salary_max = defineModel('max', {
  type: String,
})

const onInput = (event: Event, model: any) => {
  const input = event.target as HTMLInputElement
  input.value = input.value.replace(/\D/g, '')
  model.value = input.value
}
</script>

<template>
  <div class="block">
    <Typography type="semibold-24-black">Зарплата, ₽</Typography>
    <div class="salary">
      <input @input="onInput($event, salary_min)" v-model="salary_min" type="text" placeholder="от 20 000" class="salary-input" />
      <span class="line"></span>
      <input @input="onInput($event, salary_max)" v-model="salary_max" type="text" placeholder="до 50 000" class="salary-input" />
    </div>
  </div>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.salary {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.salary-input {
  width: 130px;
  padding: 15px 15px;
  font-size: 1.25rem;
  background-color: var(--color-background-grey);
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  outline: none;
  text-align: center;
}

.salary-input::placeholder {
  color: var(--color-almost-black);
}

.line {
  width: 20px;
  height: 1px;
  background-color: var(--color-almost-black);
}

@media (max-width: 1440px) {
  .salary-input {
    width: 100px;
    font-size: 1.25rem;
  }
  .salary {
    gap: 10px;
  }
}
@media (max-width: 768px) {
  .salary-input {
    width: 100px;
    padding: 15px 10px;
    font-size: 1rem;
  }
  .salary {
    gap: 10px;
  }
}
@media (max-width: 360px) {
  .salary-input {
    width: 100px;
    padding: 15px 10px;
    font-size: 1rem;
  }
  .salary {
    gap: 10px;
  }
}
</style>