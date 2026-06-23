<script setup lang="ts">
import { Typography } from "@/shared/ui/typography";

defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (value) =>
        ['text', 'password', 'tel', 'email', 'date', 'number'].includes(value),
  },
  label: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input-wrapper">
    <div class="label-wrapper">
      <Typography v-if="label" type="medium-20-black" class="label-text">{{ label }}</Typography>
      <Typography v-if="required" type="medium-16-primary-red" class="required-star">*</Typography>
    </div>

    <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        class="input"
        :class="{ 'input-error': error }"
        @input="$emit('update:modelValue', $event.target.value)"
    />

    <Typography
        v-if="error"
        type="medium-16-primary-red"
        class="error-text"
    >
      {{ error }}
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