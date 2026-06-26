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
  <div class="wrapper">
    <div class="block">
      <div class="item" :class="{active: isStudent}" @click="setStudent()">
        <Typography type="medium-32-black">Студент</Typography>
      </div>
      <div class="item" :class="{active: !isStudent}" @click="setEmployer()">
        <Typography type="medium-32-black">Работодатель</Typography>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center; /* ← ЦЕНТРИРУЕМ БЛОК */
}

.block {
  display: flex;
  width: 100%;

  padding: 10px;
  gap: 10px;
  background: var(--color-grey-light);
  border-radius: 10px;
}

.item {
  padding: 8px 20px;
  border-radius: 10px;
  flex: 1; /* ← РАСТЯГИВАЕМ КНОПКИ НА ВСЮ ШИРИНУ */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease;
  text-align: center;
}

.active {
  background: var(--color-white);
}

/* Если текст в Typography не центрируется, добавляем */
.item :deep(.typography) {
  text-align: center;
  width: 100%;
}
</style>