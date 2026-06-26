<script setup lang="ts">
import { Typography } from "@/shared/ui/typography";

interface Props {
  type?: 'text' | 'password' | 'tel' | 'email' | 'date' | 'number'
  label?: string
  required?: boolean
  placeholder?: string
  error?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  label: '',
  required: false,
  placeholder: '',
  error: '',
})

const model = defineModel<string>()
</script>

<template>
  <div class="input-wrapper">
    <div class="label-wrapper">
      <Typography v-if="props.label" class="label-text">{{ props.label }}</Typography>
      <Typography v-if="props.required" type="medium-16-primary-red" class="required-star">*</Typography>
    </div>

    <input
        :type="props.type"
        v-model="model"
        :placeholder="props.placeholder"
        class="input"
        :class="{ 'input-error': props.error }"
    />

    <Typography
        v-if="props.error"
        type="medium-16-primary-red"
        class="error-text"
    >
      {{ props.error }}
    </Typography>
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.label-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-start;
  width: 100%;
}

.label-text {
  text-align: left !important;
  width: auto;
}

.required-star {
  text-align: left !important;
  flex-shrink: 0;
}

.input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  background: var(--color-white);
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  outline: none;
  font-size: 1rem;
  color: var(--color-black);
}

.input::placeholder {
  color: var(--color-grey);
  font-size: 1rem;
  font-weight: 400;
  opacity: 1;
}

.input:focus {
  border-color: var(--color-primary-red);
}

.input:focus::placeholder {
  opacity: 0.5;
}

.input-error {
  border-color: var(--color-primary-red);
}

.input-error::placeholder {
  color: var(--color-primary-red);
}

.input-error:focus {
  border-color: var(--color-primary-red);
}

.error-text {
  margin-top: 4px;
  text-align: left !important;
}
</style>