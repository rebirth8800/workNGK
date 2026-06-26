<script setup lang="ts">
import { computed } from 'vue'
import { getIconSrc } from '@/shared/config'

interface Props {
  name?: string
  src?: string
  label?: string
  decorative?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  decorative: true,
})

const iconSrc = computed(() => props.src || getIconSrc(props.name))
const altText = computed(() => (props.decorative ? '' : props.label || ''))
</script>

<template>
  <img
      v-if="iconSrc"
      :src="iconSrc"
      :alt="altText"
      :aria-hidden="props.decorative ? 'true' : undefined"
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