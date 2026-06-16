<script setup>
import {computed} from 'vue'
const props = defineProps({
  size: {
    type: String,
    default: 12,
    validator: value => ['hero', 'h1', 'h2', 'h3', 'title', 'body', 'small'].includes(value),
  },
  weight: {
    type: String,
    default: 'regular',
    validator: value => ['light', 'regular', 'medium', 'semibold', 'bold'].includes(value),
  },
  color: {
    type: String,
    default: 'black',
    validator: value => ['black', 'almost-black', 'primary-red', 'white', 'grey-light', 'background-grey', 'green-dark', 'green-light', 'orange-brown', 'yellow-light', 'red-light'].includes(value),
  },
  customClass:{
    type: String,
    default: ' ',
  }
})

const tags = computed(() => {
  const tags = {
    hero: 'h1',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    title: 'h4',
    body: 'p',
    small: 'span',
  }
  return tags[props.size] || 'p'
})
</script>

<template>
<component
  :is="tag"
  :class="[
    'typography',
    `typography--$(size}`,
    `typography--$(weight)}`,
    {
      'typography--black': color === 'black',
      'typography--almost-black': color === 'almost-black',
      'typography--primary-red': color === 'primary-red',
      'typography--white': color === 'white',
      'typography--grey-light': color === 'grey-light',
      'typography--background-grey': color === 'background-grey',
      'typography--green-dark': color === 'green-dark',
      'typography--green-light': color === 'green-light',
      'typography--orange-brown': color === 'orange-brown',
      'typography--yellow-light': color === 'yellow-light',
      'typography--red-light': color === 'red-light',

    },
    customClass,
  ]">
  <slot />
</component>
</template>

<style scoped>
.typography {
  font-family: 'Inter', sans-serif;
  margin: 0;
}

.typography--hero { font-size: 64px; }
.typography--h1 { font-size: 40px; }
.typography--h2 { font-size: 36px; }
.typography--h3 { font-size: 32px; }
.typography--title { font-size: 24px; }
.typography--body { font-size: 20px; }
.typography--small { font-size: 16px; }

.typography--light { font-weight: 300; }
.typography--regular { font-weight: 400; }
.typography--medium { font-weight: 500; }
.typography--semibold { font-weight: 600; }
.typography--bold { font-weight: 700; }

.typography--black { color: var(--color-black); }
.typography--almost-black { color: var(--color-almost-black); }
.typography--primary-red { color: var(--color-primary-red); }
.typography--white { color: var(--color-white); }
.typography--grey-light { color: var(--color-grey-light); }
.typography--background-grey { color: var(--color-background-grey); }
.typography--green-dark { color: var(--color-green-dark); }
.typography--green-light { color: var(--color-green-light); }
.typography--orange-brown { color: var(--color-orange-brown); }
.typography--yellow-light { color: var(--color-yellow-light); }
.typography--red-light { color: var(--color-red-light); }
</style>