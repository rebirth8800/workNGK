<script setup lang="ts">
interface Props {
  type?:
      | 'light-15-black'
      | 'regular-15-black'
      | 'regular-12-almost-black'
      | 'regular-16-almost-black'
      | 'regular-20-black'
      | 'regular-20-grey-light'
      | 'regular-20-almost-black'
      | 'regular-20-primary-red'
      | 'regular-24-white'
      | 'regular-24-black'
      | 'regular-24-grey-light'
      | 'regular-24-almost-black'
      | 'regular-32-almost-black'
      | 'medium-15-black'
      | 'medium-16-primary-red'
      | 'medium-16-black'
      | 'medium-20-almost-black'
      | 'medium-24-almost-black'
      | 'medium-24-black'
      | 'medium-24-primary-red'
      | 'medium-32-black'
      | 'semibold-20-black'
      | 'semibold-24-black'
      | 'semibold-32-white'
      | 'semibold-32-black'
      | 'semibold-36-black'
      | 'semibold-36-primary-red'
      | 'semibold-40-grey-light'
      | 'semibold-40-black'
      | 'bold-40-black'
      | 'bold-64-black'
      | 'bold-64-red'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'regular-16-almost-black',
})
</script>

<template>
  <component
      :is="
      props.type.includes('64') || props.type.includes('40')
        ? 'h1'
        : props.type.includes('36')
          ? 'h2'
          : props.type.includes('32')
            ? 'h3'
            : props.type.includes('24')
              ? 'h4'
              : 'p'
    "
      :class="['typography', props.type]"
  >
    <slot />
  </component>
</template>

<style scoped>
.typography {
  font-family: 'Inter', sans-serif;
  margin: 0;
}


.light-15-black {
  font-size: 0.9375rem;
  font-weight: 300;
  color: var(--color-black);
}
.regular-15-black{
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-black);
}
.regular-12-almost-black {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--color-almost-black);
}
.regular-16-almost-black {
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-almost-black);
}
.regular-20-grey-light {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-grey-light);
}
.regular-20-black {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-black);
}
.regular-20-almost-black {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-almost-black);
}
.regular-20-primary-red {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-primary-red);
}
.regular-24-white {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-white);
}
.regular-24-black {
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-black);
}
.regular-24-grey-light {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-grey-light);
}
.regular-24-almost-black {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-almost-black);
}
.regular-32-almost-black {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-almost-black);
}
.medium-15-black {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-black);
}
.medium-16-black {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-black);
}
.medium-16-primary-red {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-primary-red);
}
.medium-20-almost-black {
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-almost-black);
}
.medium-24-almost-black {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-almost-black);
}

.medium-24-black {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-black);
}
.medium-24-primary-red {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-primary-red);
}
.medium-32-black {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-black);
}

.semibold-20-black {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-black);
}
.semibold-24-black {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-black);
}
.semibold-32-white {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-white);
}
.semibold-32-black {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-black);
}
.semibold-36-black {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-black);
}
.semibold-36-primary-red {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-primary-red);
}
.semibold-40-grey-light {
  font-size: 2.25rem;
  font-weight: 600;
  color: var(--color-grey-light);
}
.semibold-40-black {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-black);
}

.bold-40-black {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-black);
}
.bold-64-black {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-black);
}
.bold-64-red {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-primary-red);
}

/* ================================================================
   2. НОУТБУК (1024px и меньше)
   ================================================================ */
@media (max-width: 1024px) {
  .light-24-black { font-size: 1rem; }
  .regular-16-almost-black { font-size: 0.875rem; }
  .regular-20-grey-light { font-size: 1rem; }
  .regular-20-black { font-size: 1rem; }
  .regular-20-almost-black { font-size: 0.875rem; }
  .regular-20-primary-red { font-size: 0.875rem; }
  .regular-24-white { font-size: 1rem; }
  .regular-24-black { font-size: 0.875rem; }
  .regular-24-grey-light { font-size: 1rem; }
  .regular-24-almost-black { font-size: 1rem; }
  .regular-32-almost-black { font-size: 1.25rem; }
  .medium-16-primary-red { font-size: 0.875rem; }
  .medium-24-almost-black { font-size: 1rem; }
  .medium-24-black { font-size: 1rem; }
  .medium-24-primary-red { font-size: 1rem; }
  .medium-32-black { font-size: 1rem; }
  .semibold-20-black { font-size: 0.875rem; }
  .semibold-24-black { font-size: 1rem; }
  .semibold-32-white { font-size: 1.5rem; }
  .semibold-32-black { font-size: 1.25rem; }
  .semibold-36-black { font-size: 1.5rem; }
  .semibold-36-primary-red { font-size: 1.5rem; }
  .semibold-40-grey-light { font-size: 1.75rem; }
  .semibold-40-black { font-size: 1.5rem; }
  .bold-40-black { font-size: 1.75rem; }
  .bold-64-black { font-size: 2.25rem; }
  .bold-64-red { font-size: 2.25rem; }
}

/* ================================================================
   3. ТЕЛЕФОН (360px и меньше)
   ================================================================ */
@media (max-width: 360px) {
  .light-24-black { font-size: 0.75rem; }
  .regular-16-almost-black { font-size: 0.75rem; }
  .regular-20-grey-light { font-size: 0.75rem; }
  .regular-20-black { font-size: 0.75rem; }
  .regular-20-almost-black { font-size: 0.75rem; }
  .regular-20-primary-red { font-size: 0.75rem; }
  .regular-24-white { font-size: 0.875rem; }
  .regular-24-black { font-size: 0.75rem; }
  .regular-24-grey-light { font-size: 0.875rem; }
  .regular-24-almost-black { font-size: 0.875rem; }
  .regular-32-almost-black { font-size: 0.875rem; }
  .medium-16-primary-red { font-size: 0.75rem; }
  .medium-24-almost-black { font-size: 0.875rem; }
  .medium-24-black { font-size: 0.75rem; }
  .medium-24-primary-red { font-size: 0.875rem; }
  .medium-32-black { font-size: 0.875rem; }
  .semibold-20-black { font-size: 0.75rem; }
  .semibold-24-black { font-size: 0.875rem; }
  .semibold-32-white { font-size: 1rem; }
  .semibold-32-black { font-size: 1rem; }
  .semibold-36-black { font-size: 1.25rem; }
  .semibold-36-primary-red { font-size: 1.25rem; }
  .semibold-40-grey-light { font-size: 1.25rem; }
  .semibold-40-black { font-size: 1.25rem; }
  .bold-40-black { font-size: 1.25rem; }
  .bold-64-black { font-size: 1.5rem; }
  .bold-64-red { font-size: 1.5rem; }
}
</style>