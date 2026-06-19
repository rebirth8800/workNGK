<script setup>
defineProps({
  svg: {
    type: String,
    default: '',
  },
  type:{
    type: String,
    default: 'grey',
    validator: (value) => ['grey', 'red'].includes(value)
  }
})
</script>

<template>
<div :class="['icon-box', `icon-box-${type}`]">
  <span v-if="svg" class="icon-box-svg"></span>
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
}
.icon-box-grey {
  background-color: var(--color-grey-light);
}

.icon-box-red {
  background-color: var( --color-red-light);
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

@media (max-width: 1440px){
  .icon-box{
    width: 50px;
    height: 50px;
  }
  .icon-box-svg svg {
    width: 30px;
    height: 30px;
  }

}
@media (max-width: 768px){
  .icon-box{
    width: 50px;
    height: 50px;
  }
  .icon-box-svg svg {
    width: 30px;
    height: 30px;
  }
}
@media (max-width: 360px){
  .icon-box{
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