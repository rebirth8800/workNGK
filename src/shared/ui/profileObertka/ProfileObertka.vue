<script setup lang="ts">
defineProps({
  noMargin: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="block">
    <div class="content" :style="noMargin ? 'margin: 0 !important; padding: 0 !important;' : ''">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.block {
  width: 100%;
  background-color: var(--color-white);
  border: 1px solid #BBB9B9;
  border-radius: 10px;
  box-sizing: border-box;
}

.content {
  padding: 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
}
</style>