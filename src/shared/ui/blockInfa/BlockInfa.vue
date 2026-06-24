<script setup lang="ts">
defineProps({
  svg: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    default: 'red',
    validator: (value) => ['red', 'grey'].includes(value),
  },
})
</script>

<template>
  <div :class="type">
    <span class="icon-wrap">
      <component :is="svg" class="icon" />
    </span>
    <span class="text-wrap">
      <slot />
    </span>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  gap: 10px;
}

.icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.icon {
  display: block;
}

.text-wrap {
  flex: 1;
  margin-left: 12px;
  min-width: 0;
  word-break: break-word;
}

.red {
  background: var(--color-red-light);
  border: 1px solid var(--color-primary-red);
  padding: 35px 24px;
}

.red .text-wrap {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-black);
}

.grey {
  background: var(--color-grey-light);
  border: none;
  padding: 20px 20px;
}

.grey .text-wrap {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-almost-black);
}
</style>