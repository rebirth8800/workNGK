<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

const text = ['Бесплатное размещение', 'Быстрая модерация', 'Прямая связь']
</script>

<template>
  <div class="backgraund">
    <div class="container">
      <div class="info_flex">
        <Typography type="regular-24-white">Для работодателей</Typography>
        <Typography type="semibold-32-white">Найдите сотрудников среди <br> студентов НГК</Typography>
        <Typography type="regular-24-white">Более 1000 студентов готовы к стажировке и подработке. Разместите вакансию бесплатно и получите отклики уже сегодня</Typography>
        <div class="flex">
          <div v-for="item in text" :key="item" class="flex-text">
            <Typography type="regular-24-white">{{item}}</Typography>
          </div>
        </div>
      </div>
      <div class="button_block">
        <Button>Разместить вакансию</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backgraund{
  width: 100%;
  background: var(--color-grey-light);
}

.container {
  margin: 2.5rem auto;
  background-color: var(--color-black);
  padding: 50px;
  width: 1350px;
  display: flex;
  align-items: center;
  border-radius: 10px;
}
.info_flex{
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.flex{
  display: flex;
  gap: 1.85rem;
  margin-left: 0;
  align-items: center;
}
.flex-text{
  display: flex;
  gap: 1rem;
  align-items: center;
 }



</style>
