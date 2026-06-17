<script setup>
defineProps({
  type: {
    type: String,
    default: 'body',
    validator: (value) =>
        [
          'light-24-black',
          'regular-16-almost-black',
          'regular-20-black',
          'regular-20-almost-black',
          'regular-20-primary-red',
          'regular-24-white',
          'regular-24-black',
          'regular-24-grey-light',
          'regular-24-almost-black',
          'regular-32-almost-black',
          'medium-16-primary-red',
          'medium-24-almost-black',
          'medium-24-black',
          'medium-24-primary-red',
          'medium-32-black',
          'semibold-20-black',
          'semibold-24-black',
          'semibold-32-white',
          'semibold-32-black',
          'semibold-36-black',
          'semibold-36-primary-red',
          'semibold-40-grey-light',
          'semibold-40-black',
          'bold-40-black',
          'bold-64-black',
          'bold-64-red',
        ].includes(value),
  },
})
</script>

<template>
  <component
      :is="type.includes('64') || type.includes('40') ? 'h1' : type.includes('36') ? 'h2' : type.includes('32') ? 'h3' : type.includes('24') ? 'h4' : 'p'"
      :class="['typography', type]"
  >
    <slot />
  </component>
</template>

<style scoped>
.typography {
  font-family: 'Inter', sans-serif;
  margin: 0;
}

.light-24-black {
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--color-black);
}

.regular-16-almost-black {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-almost-black);
}
.regular-20-black {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-black);
}
.regular-20-almost-black {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-almost-black);
}
.regular-20-primary-red {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-primary-red);
}
.regular-24-white {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-white);
}
.regular-24-black {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-black);
}
.regular-24-grey-light {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-grey-light);
}
.regular-24-almost-black {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-almost-black);
}
.regular-32-almost-black {
  font-size: 2rem;
  font-weight: 400;
  color: var(--color-almost-black);
}

.medium-16-primary-red {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-primary-red);
}
.medium-24-almost-black {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-almost-black);
}
.medium-24-black {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-black);
}
.medium-24-primary-red {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-primary-red);
}
.medium-32-black {
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-black);
}

.semibold-20-black {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-black);
}
.semibold-24-black {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-black);
}
.semibold-32-white {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-white);
}
.semibold-32-black {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-black);
}
.semibold-36-black {
  font-size: 2.25rem;
  font-weight: 600;
  color: var(--color-black);
}
.semibold-36-primary-red {
  font-size: 2.25rem;
  font-weight: 600;
  color: var(--color-primary-red);
}
.semibold-40-grey-light {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-grey-light);
}
.semibold-40-black {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-black);
}

.bold-40-black {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-black);
}
.bold-64-black {
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-black);
}
.bold-64-red {
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-primary-red);
}

@media (max-width: 1440px){
  .medium-24-black {
    font-size: 1.25rem;
  }
  .bold-64-black {
    font-size: 3rem;
  }
  .bold-64-red {
    font-size: 3rem;
  }
  .regular-32-almost-black {
    font-size: 1.5rem;
  }
  .semibold-40-black {
    font-size: 2rem;
  }
  .regular-32-almost-black {
    font-size: 1.25rem;
  }
}
@media (max-width: 768px){
  .medium-24-black {
    font-size: 0.9375rem;
  }
  .bold-64-black {
    font-size: 2.5rem;
  }
  .bold-64-red {
    font-size: 2.5rem;
  }
  .regular-32-almost-black {
    font-size: 1.25rem;
  }
  .semibold-40-black {
    font-size: 	1.5rem;
  }
  .regular-32-almost-black {
    font-size: 1rem;
  }
}
@media (max-width: 360px){
  .medium-24-black {
    font-size: 0.8125rem;
  }
  .bold-64-black {
    font-size: 1.5rem;
  }
  .bold-64-red {
    font-size: 1.5rem;
  }
  .regular-32-almost-black {
    font-size: 0.875rem;
  }
  .semibold-40-black {
    font-size: 	1.25rem;
  }
  .regular-32-almost-black {
    font-size: 1rem;
  }
}
</style>