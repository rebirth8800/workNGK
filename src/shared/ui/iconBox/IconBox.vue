<script setup>
import { computed, defineAsyncComponent } from 'vue'
const props = defineProps({
  svg: String,
  type: {
    type: String,
    default: 'grey',
    validator: (value) => ['grey', 'red'].includes(value),
  },
})

const Icon = computed(() => {
  if (!props.svg) return null

  return defineAsyncComponent(() => import(`@/shared/svg/${props.svg}.svg`))
})


// const Icon = computed(() => {
//   // Используем import.meta.glob для Vite
//   const icons = import.meta.glob(`@/shared/svg/*.svg`, {
//     eager: true,
//     import: 'default'
//   })
//   // Ищем иконку по имени
//   const path = `/src/shared/svg/${props.svg}.svg`
//   return icons[path]
// })
</script>

<template>
  <div :class="['icon-box', `icon-box-${type}`]">
    <component v-if="Icon" :is="Icon" class="icon-box-svg" />
  </div>
</template>

<style scoped>
.icon-box {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin: 0;
}
.icon-box-grey {
  background-color: var(--color-grey-light);
}

.icon-box-red {
  background-color: var(--color-red-light);
}

.icon-box-svg {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-box-svg svg {
  width: 42px;
  height: 42px;
  display: block;
}

@media (max-width: 1440px) {
  .icon-box {
    width: 50px;
    height: 50px;
  }
  .icon-box-svg svg {
    width: 30px;
    height: 30px;
  }
}
@media (max-width: 768px) {
  .icon-box {
    width: 50px;
    height: 50px;
  }
  .icon-box-svg svg {
    width: 30px;
    height: 30px;
  }
}
@media (max-width: 360px) {
  .icon-box {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }

  .icon-box-svg svg {
    width: 23px;
    height: 23px;
  }
}
</style>