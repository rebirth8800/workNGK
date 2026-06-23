<script setup lang="ts">
import {Typography} from "@/shared/ui/typography";

defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (value) =>
        ['text', 'password', 'tel', 'email', 'date', 'number'].includes(value),
  },
  label: String,
  required: Boolean,
  placeholder: String,
  error: String,
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
      <Typography v-if="label" type="medium-24-black" class="label-text">{{ label }}</Typography>
      <Typography v-if="required" type="medium-16-primary-red" class="required-star">*</Typography>
    </div>

    <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        class="input"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="{ 'input-error': error }"
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
  gap: 7px;
  justify-content: flex-start;
  width: 100%; /* Важно! */
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
  padding: 20px 20px;
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  background: var(--color-white);
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  outline: none;
  font-size: 1rem;
}

.input::placeholder {
  color: var(--color-almost-black);
}

.input:focus {
  border-color: var(--color-primary-red);
}

.input-error {
  border-color: var(--color-primary-red);
}

.input-error:focus {
  border-color: var(--color-primary-red);
}

.error-text {
  margin-top: 4px;
  text-align: left !important;
}

.input::placeholder {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-almost-black);
}
</style>