<script setup lang="ts">
import { Typography } from "@/shared/ui/typography";

interface Props {
  title: string
  items: string[]
}

defineProps<Props>()
</script>

<template>
  <div class="content-contact">
    <Typography type="semibold-32-black">{{ title }}</Typography>
    <ul class="content-list">
      <li v-for="(item, index) in items" :key="index">
        <Typography type="regular-24-black">{{ item }}</Typography>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.content-contact {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0;
  margin: 0;
}

.content-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.content-list li {
  position: relative;
  padding-left: 24px;
  margin: 0;
}

.content-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  background: var(--color-primary-red);
  border-radius: 50%;
}

.content-list li:last-child {
  margin-bottom: 0;
}

.content-contact :deep(.typography) {
  margin: 0;
  padding: 0;
}
</style>