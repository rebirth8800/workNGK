<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'

const isStudent = defineModel('student',{
  type: Boolean,
})

const isLogin = defineModel('login',{
  type: Boolean,
})

const setStudent = ()=>{
  isLogin.value = true
  isStudent.value = true
}
const setEmployer = ()=>{
  isLogin.value = true
  isStudent.value = false
}


</script>

<template>
  <div class="block">
    <div class="item" :class="{active: isStudent}" @click="setStudent()"><Typography type="medium-32-black">Студент</Typography></div>
    <div class="item" :class="{active: !isStudent}" @click="setEmployer()"><Typography type="medium-32-black">Работодатель</Typography></div>
  </div>
</template>

<style scoped>
.block {
  display: flex;
  width: 100%;
  padding: 10px 0;
  gap: 10px;
  background: var(--color-grey-light);
  border-radius: 10px;
}
.item{
  padding: 8px 20px;
  border-radius: 10px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.active{
  background: var(--color-white);
}

</style>
