<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input-wrapper">
    <div class="label-wrapper">
      <label class="label">{{ label }}</label>
      <span v-if="required" class="required-star">*</span>
    </div>

    <input
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        class="input"
        :class="{ 'input-error': error }"
    />

    <span v-if="error" class="error-text">{{ error }}</span>
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
}

.label {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-black);
  line-height: 1.5;
}

.required-star {
  color: var(--color-primary-red);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
}

.input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-black);
  background: var(--color-white);
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  outline: none;
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
  color: var(--color-primary-red);
  font-size: 1rem;
  font-weight: 500;
  margin-top: 4px;
}
</style>