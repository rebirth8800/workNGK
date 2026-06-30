<script setup lang="ts">
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'
import { Tag } from '@/shared/ui/tag'
import Icon from '@/shared/svg/clip.svg'
const text = ['Бесплатное размещение', 'Быстрая модерация', 'Прямая связь']
</script>

<template>
  <div class="backgraund">
    <div class="container">
      <div class="info_flex">
        <Tag type="red-light" class="tag-left">Для работодателей</Tag>
        <Typography type="semibold-32-white">Найдите сотрудников среди <br> студентов НГК</Typography>
        <Typography type="regular-24-white">Более 1000 студентов готовы к стажировке и подработке. Разместите вакансию бесплатно и получите отклики уже сегодня</Typography>
        <div class="flex">
          <div v-for="item in text" :key="item" class="flex-text">
            <Icon/>
            <Typography type="regular-24-white">{{item}}</Typography>
          </div>
        </div>
      </div>
      <div class="button_block">
        <RouterLink to="/vacancies/create"><Button>Разместить вакансию</Button></RouterLink>
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
  width: 1200px;
  display: flex;
  align-items: center;
  border-radius: 10px;
}

.info_flex{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.tag-left {
  align-self: flex-start !important;
  margin-right: auto !important;
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

.button_block {
  margin-left: auto;
  flex-shrink: 0;
}
</style>