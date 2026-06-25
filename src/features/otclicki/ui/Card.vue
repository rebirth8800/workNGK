<script setup lang="ts">
defineProps({
  item: Object
})
</script>

<template>
  <div class="card">
    {{item.title}}
  </div>

</template>

<style scoped></style>
