<script setup>
defineProps({
  svg: String,
  type: {
    type: String,
    default: 'default',
    validator: (value) =>
      ['default', 'none-back-red', 'none-back-black', 'text-red', 'text-black'].includes(value),
  },
})
</script>

<template>
  <button :class="type">
    <svg v-if="svg">{{ svg }}</svg><slot />
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 10px;
  padding: 15px 45px;
  display: flex;
  gap: 10px;
  white-space: nowrap;
  align-items: center;
}
.default {
  background-color: var(--color-primary-red);
  color: var(--color-white);
  border: none;
}
.none-back-red{
  color: var(--color-primary-red);
  background-color: var(--color-white);
  border: 2px solid var(--color-primary-red);
}
.none-back-black{
  color: var(--color-black);
  background-color: var(--color-white);
  border: 2px solid var(--color-black);
}
.text-red{
  color: var(--color-primary-red);
  background-color: var(--color-white);
  border: none;
}
.text-black{
  color: var(--color-black);
  background-color: var(--color-white);
  border: none;
}

@media (max-width: 1440px){
button {
  padding: 10px 20px;
  font-size: 1.25rem;
}
}
@media (max-width: 768px){
  button {
    padding: 10px 15px;
    font-size: 1rem;
  }
}
@media (max-width: 360px){
  button {
    padding: 20px 7px;
    font-size: 0.85rem;
    border-radius: 5px;
  }
}
</style>