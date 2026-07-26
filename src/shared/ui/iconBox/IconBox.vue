<script setup lang="ts">
import { Icon } from '@/shared/ui/icon'

interface Props {
  name?: string
  type?: 'grey' | 'red'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'grey',
})
</script>

<template>
  <div :class="['icon-box', `icon-box-${type}`]">
    <Icon :name="name" class="icon-box-svg" />
  </div>
</template>

<style scoped>
.icon-box {
  width: 50px;
  height: 50px;
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
  width: 30px;
  height: 30px;
}

@media (max-width: 1440px) {
  .icon-box {
    width: 50px;
    height: 50px;
  }
  .icon-box-svg {
    width: 30px;
    height: 30px;
  }
}
@media (max-width: 768px) {
  .icon-box {
    width: 50px;
    height: 50px;
  }
  .icon-box-svg {
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

  .icon-box-svg {
    width: 23px;
    height: 23px;
  }
}
</style>
