<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  svg?: Component
  type?: 'grey' | 'red-light' | 'status-red' | 'status-green' | 'status-yellow'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'grey',
})
</script>

<template>
  <span :class="props.type">
    <component :is="props.svg" v-if="props.svg" class="tag-icon" />
    <slot />
  </span>
</template>

<style scoped>
span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  font-size: 1rem;
  margin: 0 auto;
  margin-left: 0;
}

.tag-icon {
  width: 28px;
  height: 28px;
  display: block;
  flex-shrink: 0;
}

.grey {
  padding: 5px 10px;
  background-color: var(--color-grey-light);
  font-weight: 400;
  color: var(--color-almost-black);
}
.red-light {
  padding: 6px 16px;
  background-color: var(--color-red-light);
  font-weight: 600;
  color: var(--color-primary-red);
}
.status-red {
  padding: 5px 45px;
  background-color: var(--color-red-light);
  font-weight: 500;
  color: var(--color-primary-red);
}
.status-green {
  padding: 5px 45px;
  background-color: var(--color-green-light);
  font-weight: 500;
  color: var(--color-green-dark);
}
.status-yellow {
  padding: 5px 45px;
  background-color: var(--color-yellow-light);
  font-weight: 500;
  color: var(--color-orange-brown);
}

.status-red,
.status-green,
.status-yellow {
  margin: 0 5px;
}

@media (max-width: 1440px) {
  span {
    font-size: 1rem;
    gap: 2px;
  }
  .tag-icon {
    width: 24px;
    height: 24px;
  }
  .grey,
  .red-light {
    padding: 5px 7px;
  }
  .status-red,
  .status-green,
  .status-yellow {
    padding: 5px 40px;
    margin: 0 4px;
  }
}

@media (max-width: 768px) {
  span {
    font-size: 0.875rem;
    gap: 2px;
  }
  .tag-icon {
    width: 19px;
    height: 19px;
  }
  .grey,
  .red-light {
    padding: 5px 5px;
  }
  .status-red,
  .status-green,
  .status-yellow {
    padding: 5px 15px;
    margin: 0 3px;
  }
}

@media (max-width: 360px) {
  span {
    border-radius: 5px;
    font-size: 0.875rem;
    gap: 2px;
  }
  .tag-icon {
    width: 19px;
    height: 19px;
  }
  .grey,
  .red-light {
    padding: 5px 5px;
  }
  .status-red,
  .status-green,
  .status-yellow {
    padding: 5px 20px;
    margin: 0 2px;
  }
}
</style>