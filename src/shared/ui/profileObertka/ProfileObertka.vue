<script setup lang="ts"></script>

<template>
  <div class="block">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.block{
  width: 100%;
  background-color: var(--color-white);
  border: 1px solid var(--color-primary-red);
  border-radius: 10px;
}
.content{
  padding: 2rem;
  width: 100%;
}
</style>
