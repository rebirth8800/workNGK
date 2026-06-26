<script setup lang="ts">
import { computed } from 'vue'
import { getIconSrc } from '@/shared/config'

const props = withDefaults(
  defineProps<{
    name?: string
    src?: string
    label?: string
    decorative?: boolean
  }>(),
  {
    decorative: true,
  },
)

const iconSrc = computed(() => props.src || getIconSrc(props.name))
const altText = computed(() => (props.decorative ? '' : props.label || ''))
</script>

<template>
  <img
    v-if="iconSrc"
    :src="iconSrc"
    :alt="altText"
    :aria-hidden="decorative ? 'true' : undefined"
    class="icon"
  />
</template>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  display: block;
  flex-shrink: 0;
  object-fit: contain;
}
</style>
