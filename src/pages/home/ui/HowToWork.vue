<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import HowCard from '@/pages/home/ui/HowCard.vue'

const data = [
  {number: '01', h1: 'Разместите вакансию', h2: 'Работодатель публикует вакансию с требованиями и условиями работы', svg: 'plus'},
  {number: '02', h1: 'Студент откликается',h2: 'Студент просматривает подходящие вакансии и отправляет отклик в один клик', svg: 'send'},
  {number: '03', h1: 'Ответ на почту', h2: 'Работодатель получает контакты кандидата и связывается с ним напрямую', svg: 'mail-red'}
]

</script>

<template>
  <div class="container">
    <Typography type="semibold-40-black">Как это работает</Typography>
    <Typography type="regular-32-almost-black">Три простых шага - и студент уже на работе</Typography>
    <div class="card_list">
      <HowCard v-for="item in data" :number="item.number" :svg="item.svg" :h1="item.h1" :h2="item.h2" :key="item.number" />

    </div>
  </div>
</template>


<style scoped>
.container{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}
.card_list{
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: nowrap;
}

</style>
